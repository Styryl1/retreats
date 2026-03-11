# Soulful Algarve Astro Site

Astro site with TinaCMS wired for Git-backed content editing, inline editing, and Tina Cloud preview.

## Project Structure

```text
/
├── content/
│   └── tina/
│       └── site-content.json
├── public/
│   ├── fonts/
│   └── social-card.svg
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro-tina-directive/
└── tina/
    └── config.ts
```

`content/tina/site-content.json` is the source of truth edited by Tina.

## Commands

| Command | Action |
| :-- | :-- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start Astro + Tina inline editing mode |
| `pnpm dev:cloud` | Build the Tina Cloud client, then run Astro dev |
| `pnpm dev:local` | Start Astro + Tina local file-based editing mode |
| `pnpm dev:astro` | Start plain Astro dev server |
| `pnpm build` | Tina Cloud build + Astro production build |
| `pnpm build:local` | Local Tina build + Astro production build |
| `pnpm check` | Run Astro type/content checks |
| `pnpm preview` | Preview the Cloudflare build with Wrangler |

## TinaCMS Setup

1. Put this code in the Git repository you want Tina Cloud to manage.
2. Create a Tina Cloud project at `https://app.tina.io/`.
3. Connect that Tina project to your GitHub repo and branch.
4. Copy these values from Tina Cloud:
   - `Client ID`
   - `Read Only Token`
5. Add them to your deploy environment:
   - `NEXT_PUBLIC_TINA_CLIENT_ID`
   - `TINA_TOKEN`
   - `TINA_PREVIEW_ORIGIN=https://soulfullalgarve.com`
   - Optional: `NEXT_PUBLIC_TINA_BRANCH=main` if your production branch is not obvious from the hosting environment

For local cloud-backed preview, copy `.env.example` to `.env` and fill in the Tina values, then run:

- `pnpm dev:cloud`
- `pnpm build`

For local file-based editing without Tina Cloud credentials:

- `pnpm dev:local`
- `pnpm build:local`

## Editing Online

After deployment, sign in at:

- `https://soulfullalgarve.com/admin/index.html`

Set the Tina Cloud project Site URL / Allowed Origins to include:

- `https://soulfullalgarve.com`

## Cloudflare

Suggested Cloudflare build settings:

- Build command: `pnpm build`
- Build output directory: `dist`
- Root directory: `/`

The current `@astrojs/cloudflare` adapter also expects a KV binding named `SESSION` unless you change the adapter/session configuration. Add that KV namespace in Cloudflare before relying on `wrangler dev` or `wrangler deploy`.
# retreats
