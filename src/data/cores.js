export const CORES = [
  {
    id: "1-25-001",
    title: '1.25"001',
    machineName: '1.25"001',
    stacking: [
      "12 per layer",
      "10 layers per buggy",
    ],
    commonProblems: [
      "Cores sticking",
      "Breakage",
    ],
    bestFix: [
      "Lower gassing time",
      "Clean surface of box",
      "Wipe Zip Slip only in the center of the bottom box",
      "Use Zip Slip all over the top part",
      "Only pick vents at bottom of core",
    ],
    gassingSettings: [
      { label: "Number of gassings", saved: "1", floor: "1" },
      { label: "Filling pressure [bar]", saved: "0.0", floor: "1.0" },
      { label: "Filling time [s]", saved: "0.0", floor: "2.0" },
      { label: "Gassing pressure [bar]", saved: "0.9", floor: "0.8" },
      { label: "Gassing time [s]", saved: "22.0", floor: "16.0" },
      { label: "Time to final pressure [s]", saved: "7.8", floor: "5.8" },
      { label: "Post-hardening time [s]", saved: "0.0", floor: "0.0" },
      { label: "Gas exhaust time valve [s]", saved: "1.8", floor: "1.7" },
      { label: "Pre-heating time [s]", saved: "350.0", floor: "350.0" },
    ],
    shotSettings: [
      { label: "Number of shots", saved: "1", floor: "1" },
      { label: "Shooting pressure [bar]", saved: "1.8", floor: "1.8" },
      { label: "Shooting time [s]", saved: "2.5", floor: "2.5" },
      { label: "Exhaust time corebox [s]", saved: "2.5", floor: "2.5" },
      { label: "Exhaust time valve [s]", saved: "2.5", floor: "2.5" },
      { label: "Sand refill interval", saved: "1", floor: "1" },
      { label: "Sand refill time 1 [s]", saved: "11.0", floor: "11.0" },
      { label: "Sand refill time 2 [s]", saved: "0.0", floor: "0.0" },
    ],
  },
];