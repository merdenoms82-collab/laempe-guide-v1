export const SCREEN_SHEETS = {
  pneu: {
    title: "PNEU",
    content: `Sensor 41 — Corebox / Part Removal Detection
Sensor 51 — Machine Function Monitoring
Sensor 61 — Machine State Monitoring

Reset Air: cycles air off/on to clear air or sensor-state stops.`,
  },

  sand: {
    title: "SAND",
    content: `Sand Demand: indicates the hopper is low.
Release: enable to automatically make sand whenever it is low.

Mixer states shown: Mixing • Transporting • Ready.`,
  },

  lg: {
    title: "LG",
    content: `Pre-dosing [strokes]: amount added before cycle dosing.
Post dosing start delay [s]: delay before post dosing begins.
Maximum post dosing [strokes]: maximum allowed post dosing amount.
Post dosing [strokes]: amount added after main dosing.`,
  },
};