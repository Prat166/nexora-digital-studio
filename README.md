# Nexora Digital Studio

React + Vite + TypeScript + Tailwind + Framer Motion + React Three Fiber.

## Run locally
    npm install
    npm run dev

## Build check
    npm run build

## Edit your details
Open `src/config/site.ts`: WhatsApp number, brand name, email, location, pricing and optional form endpoint.

## Deploy on Vercel
Framework Preset: Vite | Build Command: `npm run build` | Output Directory: `dist` | Install Command: `npm install`

## Connect a real form backend later
Create a free form at formspree.io, copy the form URL, and paste it into `formEndpoint` in `src/config/site.ts`.
No secret keys are needed or stored in this project.
