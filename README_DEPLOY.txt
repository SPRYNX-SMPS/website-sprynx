SPRYNX WEBSITE V11 - CLOUDFLARE WORKERS STATIC ASSETS

This package fixes the issue where HTML loads but CSS, JavaScript and images are missing.

GitHub repository root must contain:
  wrangler.jsonc
  README_DEPLOY.txt
  public/

Inside public/ are index.html, css/, js/, images/ and all other site pages.

Cloudflare settings for the current Worker project:
  Build command: None
  Deploy command: npx wrangler deploy
  Root directory: /

After pushing this structure to the main branch, trigger a new deployment.
Wrangler reads wrangler.jsonc and uploads everything inside ./public as static assets.
