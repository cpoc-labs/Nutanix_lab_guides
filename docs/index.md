<style>
.cpoc-hero {
  padding: 2.5rem 0 2rem;
  text-align: center;
  border-bottom: 1px solid var(--md-default-fg-color--lightest);
  margin-bottom: 2rem;
}
.cpoc-hero h1 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
}
.cpoc-hero p {
  font-size: 1.1rem;
  color: var(--md-default-fg-color--light);
  max-width: 40rem;
  margin: 0 auto;
}
.cpoc-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
  margin: 2rem 0;
}
.cpoc-card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--md-default-fg-color--lightest);
  border-radius: 0.5rem;
  padding: 1.5rem;
  background: var(--md-code-bg-color);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.cpoc-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}
.cpoc-card .cpoc-tag {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--md-primary-fg-color);
  background: rgba(0, 188, 235, 0.14);
  padding: 0.2rem 0.6rem;
  border-radius: 1rem;
  margin-bottom: 0.75rem;
  width: fit-content;
}
.cpoc-card h2 {
  margin: 0 0 0.5rem;
  font-size: 1.3rem;
}
.cpoc-card p.cpoc-desc {
  color: var(--md-default-fg-color--light);
  flex-grow: 1;
  margin-bottom: 1rem;
}
.cpoc-card ul {
  margin: 0 0 1.25rem;
  padding-left: 1.1rem;
  font-size: 0.92rem;
}
.cpoc-card ul li {
  margin-bottom: 0.3rem;
}
.cpoc-stats {
  display: flex;
  gap: 1.25rem;
  font-size: 0.8rem;
  color: var(--md-default-fg-color--light);
  margin-bottom: 1.25rem;
}
.cpoc-stats strong {
  color: var(--md-default-fg-color);
}
.cpoc-footer {
  text-align: center;
  color: var(--md-default-fg-color--light);
  font-size: 0.85rem;
  margin-top: 2.5rem;
}
</style>

<div class="cpoc-cta" markdown>
<div class="cpoc-cta-logos">
<img src="assets/cisco-logo.png" alt="Cisco">
<img src="assets/cpoc-logo.png" alt="Customer Proof of Concept">
</div>

<div class="cpoc-hero" markdown>
# Cisco + Nutanix CPOC Guides

Step-by-step Customer Proof of Concept lab guides for deploying Nutanix hyperconverged infrastructure on Cisco UCS, managed through Cisco Intersight.
</div>

<div class="cpoc-grid" markdown>

<div class="cpoc-card" markdown>
<span class="cpoc-tag">Cloud-managed</span>

## Intersight Managed Mode

<p class="cpoc-desc">Claim UCS X-Series and rack servers into Intersight SaaS, build domain profiles and policies, then deploy and expand a Nutanix cluster entirely through cloud-managed Intersight.</p>

<div class="cpoc-stats"><span><strong>6</strong> scenarios</span><span><strong>163</strong> screenshots</span></div>

<!-- - Claim servers &amp; build domain profiles
- Generate Intersight API keys
- Onboard nodes in Foundation Central
- Deploy AHV/ESX cluster &amp; Prism Central
- Expand the cluster -->

<div class="cpoc-btn-row" markdown>
[Start the IMM guide →](imm-ahv/index.md){ .cpoc-btn }
[PDF](#){ .cpoc-btn .cpoc-btn--outline data-pdf-guide="imm-ahv" }
</div>
</div>

<div class="cpoc-card" markdown>
<span class="cpoc-tag">On-premises</span>

## Intersight Standalone Mode

<p class="cpoc-desc">Deploy and manage Nutanix through an on-premises Intersight appliance, with no connection to Intersight cloud — ideal for secure, air-gapped, or compliance-driven environments.</p>

<div class="cpoc-stats"><span><strong>5</strong> scenarios</span><span><strong>128</strong> screenshots</span></div>

<!-- - Claim servers in Cisco Intersight
- Onboard nodes in Foundation Central
- Deploy AHV/ESX cluster &amp; Prism Central
- Expand the cluster
- Optional: Prism Central 2022 install -->

<div class="cpoc-btn-row" markdown>
[Start the ISM guide →](ism-ahv/index.md){ .cpoc-btn }
[PDF](#){ .cpoc-btn .cpoc-btn--outline data-pdf-guide="ism-ahv" }
</div>
</div>

<div class="cpoc-card" markdown>
<span class="cpoc-tag">Cloud-managed</span>

## Intersight Unified Edge

<p class="cpoc-desc">A new CPOC guide for Cisco Unified Edge is being drafted. Check back soon for the full set of scenarios.</p>

<div class="cpoc-btn-row" markdown>
[Start the Unified Edge→](unified-edge/index.md){ .cpoc-btn }
</div>

</div>

</div>

<div class="cpoc-footer" markdown>
*Cisco Global Demo Engineering — Esteban Arguedas ([eargueda@cisco.com](mailto:eargueda@cisco.com))*
</div>

</div>
