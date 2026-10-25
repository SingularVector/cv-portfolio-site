# Daniele portfolio website

Recovered from the final saved website build and the authoring scripts. Portfolio data and styles were recovered from the build; React components were reconstructed. This is not a byte-for-byte recovery of the deleted source. The earlier compiled recovery remains separate.

## Docker

From this folder run `docker compose up -d` and open <http://localhost:5173/>.

Stop with `docker compose stop`; remove containers with `docker compose down`. Do not use `down -v` unless you intend to remove installed dependencies.

## Local Node alternative

`npm ci`, then `npm run dev`. Build for static hosting with `npm run build`.

## Editing

- `src/data/`: profile, career history, skills, projects, case studies and credentials.
- `src/components/AppContent.jsx`: section presentation.
- `src/components/Terminal.jsx`: optional shell.
- `src/App.jsx`: page layout and navigation.
- `src/styles.css`: recovered final styling.
- `public/`: CV, favicon and sharing image.

The CV download is a separate PDF; update it deliberately when editing the website. The LaTeX source survives in the sibling deliverable folder.

## Backup

Keep the source ZIP outside this folder. Git history is initialized locally with the reconstructed baseline. Commit changes after editing and keep a second backup on another device or private remote. Nothing is published.

## Current CV download

The download is the supplied master CV, copied without changing its contents to `public/Daniele_Catanesi_CV.pdf`. Its original versioned file remains untouched. The earlier generated PDF and LaTeX are historical deliverables and do not represent this new master.

## Public terminal and CV

The terminal exposes portfolio content only: about, experience, cases, projects, skills, credentials, contact, open, help and clear. It does not execute shell commands.

The public CV is derived from the supplied master with the phone number removed from its text content. Email, LinkedIn and GitHub remain. The private master is not changed. Never replace the public copy with the private master without reviewing contact details.
