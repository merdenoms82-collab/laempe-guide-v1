# Architecture Overview



The Laempe Operator Hub is a mobile-first operator reference tool built in Vite + React for use on the foundry floor.



## Design Goals

- Fast navigation

- Large touch targets

- Clear operator language

- Minimal taps to useful info

- Conservative safety guidance

- No direct machine connection



## Application Structure



### App Entry

- `src/main.jsx` mounts the app

- `src/App.jsx` controls route-based rendering



### Routing Layer

The app uses a custom hash-routing pattern through the navigation feature.



Current routing behavior is intentionally lightweight and centralized rather than using a larger router abstraction.



### Presentation Layer

Reusable UI components live in `src/components/`.



These handle:

- app shell layout

- top bar and dock navigation

- browse lists

- detail views

- bottom-sheet style content patterns



### Feature Layer

Feature-specific logic lives in `src/features/`.



Current feature areas include:

- navigation

- search

- static content rendering



### Data Layer

Structured operator content lives in `src/data/`.



This includes:

- troubleshooting content

- content pages

- machine/screen parameters

- checklists

- error code data



### Styling Layer

Shared styling lives in `src/styles/`.



## Current UX Pattern

The strongest content model in the app is:



- what it looks like

- try this first

- when to stop and escalate



That troubleshooting pattern should continue to guide future expansions where appropriate.



## Guardrails

- Preserve current structure before expanding

- Do not collapse the app into one large file

- Do not move error codes out of Troubleshooting

- Do not turn search into a chatbot-only experience

- Prefer visible browse pages plus searchable results

- Label unconfirmed content as pending confirmation



## Expansion Guidance

Expand module by module.

Reuse existing browse/detail patterns first.

Only introduce larger architectural changes if the current pattern clearly fails operator use.

