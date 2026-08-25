# trippydak.com source — start here

This folder is a clean copy of the source used by the live `trippydak.com`
OpenAI Sites deployment, captured from version 2 on August 24, 2026.

## Important facts

- The live website is hosted by OpenAI Sites, not GitHub Pages.
- Uploading this source to GitHub creates an editable source repository and
  backup, but a GitHub push by itself will not update the live website.
- Do not enable GitHub Pages for this repository yet. This is a Vinext/React
  application, not a plain `index.html` GitHub Pages site.
- Do not change the Cloudflare record for `packages.trippydak.com`; that record
  belongs to the separate package repository.

## What each important file controls

| File | Purpose |
| --- | --- |
| `app/page.tsx` | Homepage sections, words, buttons, links, ticker and transmission cards |
| `app/globals.css` | Colors, fonts, layout, animation and responsive design |
| `app/layout.tsx` | Page title, SEO description, social-preview metadata and favicon settings |
| `public/og.png` | Social-sharing preview image |
| `public/favicon.svg` | Browser-tab icon |
| `package.json` | Development, test and build commands |

## Copy this source into the existing GitHub repository

The existing `The-trippydak-Project` repository contains empty placeholder files.
Delete these placeholders before copying this folder into the repository:

```text
index.html
styles.css
script.js
```

Using GitHub Desktop:

1. Clone `trippydak/The-trippydak-Project` to the computer.
2. Open the cloned repository folder.
3. Delete the three empty placeholder files listed above.
4. Copy every file and folder from this extracted source folder into the
   cloned repository folder.
5. Keep the repository's existing `README.md`. The source package's technical
   documentation is named `SITES-TECHNICAL-README.md` so it will not overwrite
   your branded repository README.
6. In GitHub Desktop, review the changes.
7. Use the commit message `Import live trippydak.com source`.
8. Push the commit to GitHub.

Using Git in a terminal:

```bash
git clone https://github.com/trippydak/The-trippydak-Project.git
cd The-trippydak-Project
git rm index.html styles.css script.js
```

Then copy every file from this extracted folder into the cloned
`The-trippydak-Project` folder and run:

```bash
git add .
git status
git commit -m "Import live trippydak.com source"
git push
```

## Run and edit it locally

Install Node.js 22.13 or newer, then open a terminal inside the repository:

```bash
npm ci
npm run dev
```

Open the local address printed by the terminal. Keep the development command
running while making changes.

Recommended first edits:

1. Change homepage copy or cards in `app/page.tsx`.
2. Change the palette under `:root` near the top of `app/globals.css`.
3. Update the browser title and share text in `app/layout.tsx`.
4. Replace `public/og.png` or `public/favicon.svg` when needed.

Before committing an edit, run:

```bash
npm run build
git status
```

Then save the revision:

```bash
git add .
git commit -m "Describe the website change"
git push
```

## Publish changes to trippydak.com

For the current setup, GitHub is the manually editable source copy while
OpenAI Sites remains the live host. After editing, provide the updated source
or repository revision in ChatGPT Work and request that it be synchronized and
published to the existing `trippydak.com` Site.

If fully automatic publication directly from GitHub is desired later, migrate
the application to a Git-connected Cloudflare Workers deployment or convert it
to a plain static GitHub Pages site. Test the replacement before changing any
production DNS records.
