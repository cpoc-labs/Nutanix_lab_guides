// OAuth relay for Decap CMS's "github" backend.
//
// GitHub Pages can only serve static files, but completing a GitHub OAuth
// login requires a client secret that must never reach the browser. This
// Cloudflare Worker is the minimum server-side piece needed to bridge that
// gap: it starts the GitHub OAuth handshake, exchanges the returned code for
// an access token using the secret (kept as a Worker secret, never in the
// repo), and hands the token back to the CMS popup window.
//
// Deploy this as a Cloudflare Worker with two secrets set:
//   GITHUB_CLIENT_ID     - from your GitHub OAuth App
//   GITHUB_CLIENT_SECRET - from your GitHub OAuth App
//
// Then point docs/admin/config.yml's `backend.base_url` at this Worker's URL.

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/auth") {
      const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
      authorizeUrl.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
      authorizeUrl.searchParams.set("redirect_uri", `${url.origin}/callback`);
      authorizeUrl.searchParams.set("scope", "repo,user");
      authorizeUrl.searchParams.set("state", crypto.randomUUID());
      return Response.redirect(authorizeUrl.toString(), 302);
    }

    if (url.pathname === "/callback") {
      const code = url.searchParams.get("code");
      if (!code) {
        return new Response("Missing OAuth code", { status: 400 });
      }

      const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: env.GITHUB_CLIENT_ID,
          client_secret: env.GITHUB_CLIENT_SECRET,
          code,
        }),
      });
      const tokenData = await tokenRes.json();

      if (!tokenData.access_token) {
        return new Response("OAuth error: " + JSON.stringify(tokenData), { status: 400 });
      }

      const tokenPayload = { token: tokenData.access_token, provider: "github" };

      // Standard Decap/Netlify CMS popup handshake: the popup pings its
      // opener, waits for a reply (to learn the opener's origin), then
      // posts the real token message back to that origin.
      const html = `<!DOCTYPE html>
<html><body>
<script>
(function() {
  function receiveMessage(message) {
    window.opener.postMessage(
      'authorization:github:success:' + JSON.stringify(${JSON.stringify(tokenPayload)}),
      message.origin
    );
    window.removeEventListener("message", receiveMessage, false);
  }
  window.addEventListener("message", receiveMessage, false);
  window.opener.postMessage("authorizing:github", "*");
})();
</script>
</body></html>`;

      return new Response(html, { headers: { "Content-Type": "text/html" } });
    }

    return new Response("Not found", { status: 404 });
  },
};
