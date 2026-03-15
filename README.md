# Laempe Operator Hub

Structured, mobile-first operator reference app for Laempe systems.

## Purpose
Reduce downtime, support onboarding, and help operators find the right next step fast.

## Current State
This project is a Vite + React application deployed from GitHub Pages.

It is being built as an operator-first support tool for foundry floor use, with emphasis on:

- fast scanning
- mobile-friendly navigation
- troubleshooting-first workflows
- conservative safety guidance
- visible browse pages plus searchable results

## Product Intent
The app is not a manual dump and not a maintenance knowledge pile.

It is a structured operator sidekick that helps users quickly find:

- machine guidance
- control screen references
- setup flows
- troubleshooting help
- error code lookup
- safety and LOTO information
- cleaning and checks
- shift-useful operational knowledge

## Current Architecture
Main repo structure:

- `public/`
- `src/`
  - `components/`
  - `data/`
  - `features/`
  - `styles/`
  - `App.jsx`
  - `main.jsx`
- `index.html`
- `vite.config.js`

## Navigation Pattern
The app currently uses hash-based routing with a custom route hook.

Routing is centralized in `src/App.jsx`.

## Module Pattern
Current module families include:

- Home
- Machine Operation
- Control Screens
- Sand Mixer
- Corebox Setup
- Troubleshooting
- Shift Checklists
- Emergency & Safety
- Search

## Quality Rules
- Preserve current architecture unless there is a clear problem
- Reuse existing patterns before inventing new ones
- Keep content operator-first and mobile-friendly
- Keep safety-critical guidance conservative
- Label unconfirmed content as pending confirmation
- Keep error codes inside Troubleshooting
- Prefer visible browse pages plus searchable results

## Deployment
GitHub Pages deployment uses the Vite base path:

`/laempe-guide-v1/`

## Status Notes
Some sections are populated with real operator content.
Some sections still contain placeholders or pending-confirmation content and should be expanded carefully without drifting module boundaries.
