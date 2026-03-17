# Laempe Operator Hub

Mobile-first operator reference hub for Laempe systems.

## Purpose
Laempe Operator Hub is designed to help operators find the right answer quickly during production, setup, recovery, and troubleshooting.

Primary goals:
- reduce downtime
- speed up operator onboarding
- improve troubleshooting consistency
- create a clear, structured reference tool for floor use

## What This App Is
This app is an operator-facing reference and training tool.

It is built to:
- guide operators to the right page quickly
- support common troubleshooting and recovery tasks
- organize machine knowledge into clear, practical modules
- provide a cleaner alternative to digging through manuals or scattered notes

## What This App Is Not
This app:
- does not interface with the machine
- does not replace official manuals, plant procedures, or LOTO requirements
- is not a copy of the machine manufacturer’s control software
- is not intended to replace maintenance, engineering, or formal safety authority

## Current Build
The current build is a Vite + React application structured for mobile-friendly use and GitHub Pages deployment.

Current focus areas in the app include:
- Home navigation
- Control Screens
- Corebox Setup
- Sand Mixer
- Emergency & Safety
- Troubleshooting
- Search
- Shift Checklists

## Product Direction
The product is being developed as a practical operator sidekick, not a document dump.

Guiding principles:
- operators first
- fast navigation
- simple plant-floor language
- conservative safety tone
- strong troubleshooting flow
- modular growth over time

## Architecture
The application is organized around a modular React structure with reusable UI components and feature-based content patterns.

High-level pieces include:
- `src/` application code
- reusable components for navigation and detail views
- feature modules for content and search
- structured data files for troubleshooting, parameters, and reference content
- GitHub Pages deployment workflow

## Deployment
The app is configured for GitHub Pages deployment through GitHub Actions.

## Recommended Use
This tool is best presented as:
- an internal operator reference hub
- a training support tool
- a controlled plant-floor pilot for structured feedback and expansion

## Expansion Path
Planned long-term direction may include:
- deeper troubleshooting coverage
- stronger core-specific reference content
- richer screen and parameter documentation
- broader training support
- multi-area or multi-plant internal rollout

## Project Positioning
Laempe Operator Hub should be treated as an internal operations support tool built around clarity, speed, and usability for operators.
