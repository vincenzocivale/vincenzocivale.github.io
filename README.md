# Vincenzo Civale — Portfolio

Personal research and engineering portfolio built as a statically rendered site.

## Stack

- Astro 7
- TypeScript
- Vanilla CSS
- npm
- GitHub Actions
- GitHub Pages

The site ships static HTML and CSS by default. Client-side JavaScript is limited
to the interactions that require it, currently the responsive navigation and
experience tabs.

## Requirements

- Node.js 24 recommended
- npm

The expected Node version is declared in `.nvmrc`.

## Local development

From the repository root:

```bash
npm install
npm run dev
```

Astro serves the site at `http://localhost:4321` by default.

## Validation

Run the complete local validation before committing:

```bash
npm run format:check
npm run check
npm run build
```

The production build is generated in `dist/` and is not committed.

## Deployment

GitHub Actions builds and deploys the site to GitHub Pages from
`refactored_main`.

GitHub Pages must use:

```text
Settings → Pages → Build and deployment → Source → GitHub Actions
```

Generated website bundles are not committed to the repository.

## Structure

```text
.
├── .github/
│   ├── workflows/
│   └── dependabot.yml
├── public/              # static files and media
├── src/
│   ├── components/      # Astro components
│   ├── data/            # typed project/publication/experience data
│   ├── layouts/         # document layouts
│   ├── pages/           # routes
│   └── styles/          # vanilla CSS
├── astro.config.mjs
├── package.json
├── package-lock.json
└── tsconfig.json
```
