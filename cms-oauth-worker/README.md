# CMS OAuth relay

Decap CMS (the visual editor at `/admin/`) needs to complete a GitHub OAuth
login to know who's editing. GitHub Pages can only serve static files, so it
can't hold the OAuth client secret or run the token exchange — this small
Cloudflare Worker is the one piece of server-side glue that does that, and
nothing else. It never touches your content; it only turns a GitHub OAuth
`code` into an access token and hands it to the CMS popup.

## 1. Create a GitHub OAuth App

GitHub → Settings → Developer settings → OAuth Apps → **New OAuth App**
(use your org's settings if the repo is org-owned, so the app is owned
alongside the repo rather than your personal account).

- **Homepage URL**: `https://cpoc-labs.github.io/Nutanix_lab_guides/`
- **Authorization callback URL**: `https://<your-worker-subdomain>.workers.dev/callback`
  (you'll get the exact Worker URL in step 2 — you can come back and fill
  this in after deploying)

Save it, then note the **Client ID** and generate a **Client Secret**.

## 2. Deploy the Worker

Easiest path — Cloudflare dashboard (no local tooling needed):

1. Sign in at [dash.cloudflare.com](https://dash.cloudflare.com) (free tier is enough).
2. **Workers & Pages → Create → Create Worker**. Give it a name (e.g. `cpoc-cms-oauth`).
3. Click **Edit code**, paste in the contents of `worker.js` from this folder, deploy.
4. Go to the Worker's **Settings → Variables and Secrets**, add two **secrets**
   (not plain variables, so they're encrypted):
   - `GITHUB_CLIENT_ID`
   - `GITHUB_CLIENT_SECRET`
5. Note the Worker's URL, shown at the top of its page —
   `https://cpoc-cms-oauth.<your-subdomain>.workers.dev`.

(If you prefer the CLI: `npm install -g wrangler`, `wrangler login`, then
from this folder `wrangler deploy`, followed by `wrangler secret put
GITHUB_CLIENT_ID` and `wrangler secret put GITHUB_CLIENT_SECRET`.)

## 3. Wire the two pieces together

- Go back to the GitHub OAuth App from step 1 and set its **Authorization
  callback URL** to `https://<your-worker-url>/callback`.
- Edit `docs/admin/config.yml` in the site repo and set:
  ```yaml
  backend:
    base_url: https://<your-worker-url>
  ```
- Commit and push. Once the site rebuilds, visit
  `https://cpoc-labs.github.io/Nutanix_lab_guides/admin/` and log in with
  GitHub.

## Who can actually save changes?

Anyone can open `/admin/` and click "Login with GitHub" — that just proves
who they are. Whether their *save* actually succeeds is enforced by GitHub
itself: the token only carries whatever repo permissions that GitHub account
already has. Collaborators with write access can save; anyone else's login
will succeed but their commits will be rejected by GitHub's API. There's
nothing extra to configure for this — it's just how repo permissions work.

## Note on "add new scenarios"

The CMS can create new `.md` files inside `docs/imm-ahv/`, `docs/ism-ahv/`,
and `docs/unified-edge/` directly. They're built and reachable by URL as
soon as the site redeploys, but they won't appear in the left sidebar until
a line for them is added to `mkdocs.yml`'s `nav:` section — that's a manual
one-line edit (or ask Claude to add it) each time a brand-new scenario file
shows up.
