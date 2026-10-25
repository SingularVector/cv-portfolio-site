# Portfolio Website

A customizable portfolio website for presenting professional experience, technical case studies, projects, skills and an optional interactive terminal.

Built with React, Vite and Lucide icons. The production build is a static website suitable for Cloudflare Pages.

## Features

- Engineering case studies with summaries, ownership, outcomes and expandable implementation details.
- Professional experience, skills, credentials and open-source projects.
- Responsive architecture diagrams with light and dark variants.
- System-aware theme selection with a saved Light or Dark override.
- An interactive portfolio terminal with `neofetch`, content navigation, Tab completion and command recall.
- A public CV download.

The terminal is a browser interface to portfolio content. It does not execute operating-system commands or provide access to a server shell.

## Run with Docker

### Requirements

- Docker Desktop, or Docker Engine with the Compose plugin.
- Docker running before starting the project.

No local Node.js installation is required for this workflow.

### Clone and start

Replace the example GitHub owner and repository below with your repository details. The final argument creates a local folder named `portfolio-site`.

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git portfolio-site
cd portfolio-site
docker compose up -d
```

The first start downloads the Node image and installs the locked dependencies. Installation may take a little time before Vite starts.

Open **http://localhost:5173/**.

### View status and logs

```bash
docker compose ps
docker compose logs -f portfolio
```

When following logs, press **Ctrl+C** to stop following them. The container keeps running because it was started with `-d`.

### Edit the site

Edit files in `src/` on your computer. The project directory is mounted into the container, and Vite updates the browser as files change.

Dependencies are stored in a Docker named volume mounted at `/app/node_modules`. The development port is bound to `127.0.0.1`, so this Compose configuration exposes it only on the local computer.

### Stop, restart or remove the container

```bash
# Stop the container, retaining it and its dependency volume
docker compose stop

# Start the existing stopped container
docker compose start

# Stop and remove the container and Compose network
docker compose down

# Recreate and start after bringing it down
docker compose up -d
```

`docker compose down` preserves the named dependency volume and your source files. Adding `-v` removes the dependency volume too; the next start must reinstall dependencies.

For an attached development session, use `docker compose up` without `-d`. In that mode, **Ctrl+C stops the service**.

### Build inside Docker

With the development container running:

```bash
docker compose exec portfolio npm run build
```

The generated site is written to `dist/` in the project directory. The build command does not publish it or change the running development server into a production server.

### Troubleshooting

**Port 5173 is already in use**

Check whether another copy of the portfolio or a local development server is running. Stop the conflicting server, or change the host-side mapping in `compose.yaml`:

```yaml
ports:
  - "127.0.0.1:5175:5173"
```

Apply the change with `docker compose up -d`, then open http://localhost:5175/. The port inside the container remains `5173`.

**The page is unavailable immediately after starting**

Run `docker compose logs -f portfolio` and wait for Vite to report that it is ready. If installation or startup fails, the error appears in these logs.

**Docker cannot connect to its engine**

Start Docker Desktop or the Docker service, then retry `docker compose up -d`.

## Run with local Node.js

Use Node.js 22 and npm for a setup consistent with the Docker image.

```bash
npm ci
npm run dev
```

Open the URL printed by Vite. The development script uses port `5173` and fails rather than silently choosing another port when it is occupied.

To build and preview the static site:

```bash
npm run build
npm run preview
```

Open the preview URL printed in the terminal, normally http://localhost:4173/. The preview server is for local verification; Cloudflare Pages serves the production files itself.

## Project structure

```text
public/
  *.pdf                      Public CV download
  favicon.svg                Browser icon
  social-preview.png         Sharing image
src/
  data/                      Profile, experience, projects, skills and case studies
  components/
    AppContent.jsx           Portfolio section presentation
    ArchitectureDiagram.jsx  Case-study diagrams
    Terminal.jsx             Interactive portfolio terminal
  App.jsx                    Layout, navigation, theme and terminal dialog
  main.jsx                   React entry point
  styles.css                 Responsive styles and themes
compose.yaml                 Local Docker development
index.html                   Page title, metadata and initial theme selection
vite.config.js               Vite and React configuration
```

## Update the content

| File | Content |
| --- | --- |
| `src/data/profile.js` | Profile, availability, target roles and professional links |
| `src/data/experience.js` | Career history and detailed responsibilities |
| `src/data/projects.js` | Open-source project descriptions and repository links |
| `src/data/cases.js` | Case-study summaries, ownership, outcomes and engineering detail |
| `src/data/skills.js` | Technical skill groups |
| `src/data/certifications.js` | Earlier qualifications and languages |

The terminal reads the same content files. Some concise career highlights and hero text are defined in `AppContent.jsx` and `App.jsx`; review those when making substantial content changes.

Architecture diagrams are maintained separately in `ArchitectureDiagram.jsx`. When changing a case study, check its diagram too. Terminal case-study topics are mapped to the case-study order in `Terminal.jsx`; keep those mappings aligned if reordering entries.

### Update the public CV

Replace the existing CV PDF in `public/` with the intended public version. Preserve its filename so existing download links continue to work. To use a different filename, update the CV links in `src/App.jsx` as well. A neutral filename such as `cv.pdf` is suitable when adapting the project.

The PDF is a separate document and is not regenerated from the website data. Review its text, links and metadata before replacing it. Keep private CV versions and source documents outside `public/`; everything in that directory is copied into the published site. Include only contact details you intend to make public.

## Deploy to Cloudflare Pages

Push the source repository to GitHub, then connect it through **Workers & Pages → Create application → Pages → Import an existing Git repository** in Cloudflare.

Use these build settings:

| Setting | Value |
| --- | --- |
| Framework preset | React (Vite), if offered |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | Repository root |
| Application environment variables | None required |

Cloudflare builds from the source and lockfile. It does not use `compose.yaml`, and `dist/` does not need to be committed.

When the final public hostname is known, update `index.html` with the canonical URL, `og:url`, and absolute HTTPS sharing-image URLs. The current root-relative image paths are placeholders for that final configuration. Check the live CV download, navigation, diagrams and sharing preview after deployment.

See the [Cloudflare React deployment guide](https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-site/) for the current dashboard workflow.

## Before publishing changes

- Run `npm run build`, locally or in Docker.
- Check the page in light and dark mode and at a narrow screen width.
- Test the case-study expanders, terminal and CV download.
- Review public content for confidential customer information and unintended contact details.
- Keep `package-lock.json` committed for reproducible installs.
- Keep dependencies, generated output, local environment files, credentials and backup archives out of Git. The included `.gitignore` covers common cases.

The source code and bundled assets should all be treated as public. Collapsed sections and terminal commands do not provide privacy. No API keys or application secrets are needed to build this portfolio.
