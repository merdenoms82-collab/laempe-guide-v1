export const KB_TROUBLESHOOT = [
  {
    id: "vacuum-drops",
    title: "Vacuum drops / won’t hold vacuum",
    priority: "high",
    triggers: [
      "vac",
      "vacuum",
      "vac drop",
      "vacuum low",
      "losing vacuum",
      "losing vac",
      "vac gauge low",
      "vac leak",
      "won't hold vacuum",
      "wont hold vacuum",
    ],
    symptom: "Vacuum will not reach target or drops during/after clamp.",
    firstChecks: [
      "Confirm air supply is stable at the normal bar setting.",
      "Watch gauge pattern: steady low vs. slowly falling vs. sudden 0.",
      "Check obvious leaks: loose hoses, cracked lines, fittings not seated.",
      "Check sealing surfaces for sand/debris; clean if allowed.",
      "If allowed: verify vacuum filter/line is not blocked.",
    ],
    nextSteps: [
      "If it drops only after clamp: suspect seal seating/alignment (see “Cope eject seal issue”).",
      "If low even while idle: suspect upstream leak or valve not sealing.",
      "If it drops to 0 suddenly: check disconnected line / valve not actuating.",
      "Record: gauge value + step where it fails for maintenance.",
    ],
    likelyCauses: [
      "Seal not seated / dirty sealing surface",
      "Loose/cracked vacuum line or fitting",
      "Restriction/blockage in vacuum path",
      "Valve not sealing (pneumatic issue)",
    ],
    whenCallMaint:
      "Call maintenance if you cannot reach minimum vacuum to run after basic checks, if it repeatedly drops to 0 suddenly, or if there is a constant leak you cannot locate quickly.",
    safetyNotes: ["Do not bypass interlocks or run below minimum vacuum."],
    pending: [],
    relatedPages: [
      { label: "Control Screens", route: "screens" },
      { label: "Gassing parameters", route: "screens/gassing" },
    ],
  },
  {
    id: "random-stop-mid-cycle",
    title: "Machine stops mid-cycle / random stop",
    priority: "high",
    triggers: [
      "stops",
      "mid cycle",
      "cycle stopped",
      "random stop",
      "halts",
      "wont run",
      "won't run",
      "fault",
      "error",
    ],
    symptom: "Cycle halts unexpectedly without a clear operator command.",
    firstChecks: [
      "Read the HMI message / fault text first—capture exact wording if possible.",
      "Check whether one sensor/state is not being made (see PNEU screen).",
      "Use Reset Air if the machine is in a safe stopped state and site practice allows it.",
      "Check if the stop repeats at the same step every cycle.",
    ],
    nextSteps: [
      "If it repeats at the same step: suspect a missing condition/sensor/state.",
      "If it clears with Reset Air but returns: document the repeating condition for maintenance.",
      "If it is paired with vacuum loss: troubleshoot vacuum first.",
    ],
    likelyCauses: [
      "Required sensor/state not made",
      "Air logic did not reset cleanly",
      "Underlying pneumatic issue",
    ],
    whenCallMaint:
      "Call maintenance if the same stop repeats after a safe reset, if a sensor/state will not make, or if a fault text indicates hardware/service action.",
    safetyNotes: [
      "Do not repeatedly reset and run without identifying the repeating condition.",
    ],
    pending: [],
    relatedPages: [
      { label: "Troubleshooting", route: "troubleshooting" },
      { label: "Control Screens", route: "screens" },
    ],
  },
  {
    id: "core-stuck-eject",
    title: "Core stuck / eject problem",
    priority: "medium",
    triggers: [
      "core stuck",
      "stuck core",
      "eject problem",
      "wont eject",
      "won't eject",
      "eject issue",
      "sticking",
    ],
    symptom: "Core does not release/eject cleanly from the box.",
    firstChecks: [
      "Confirm vacuum/clamp state is normal before the eject step.",
      "Check if the issue is one side only or both sides.",
      "Look for sand buildup / debris on accessible surfaces.",
      "Check whether the problem started after a setup/corebox change.",
    ],
    nextSteps: [
      "Compare to the last known good box/job condition.",
      "If paired with clamp/seat issues, check the seal/alignment path.",
      "If paired with cure problems, review gassing settings and core condition.",
    ],
    likelyCauses: [
      "Mechanical sticking / buildup",
      "Alignment or seating issue",
      "Cure-related release issue",
    ],
    whenCallMaint:
      "Call maintenance if it becomes a repeated mechanical hang-up or risks damage during removal/eject.",
    safetyNotes: ["Do not put hands in unsafe areas to free a stuck part/core."],
    pending: [],
    relatedPages: [
      { label: "Corebox Setup", route: "loadbox" },
      { label: "Control Screens", route: "screens" },
    ],
  },
  {
    id: "cope-eject-seal-issue",
    title: "Cope eject seal issue",
    priority: "medium",
    triggers: [
      "cope eject seal",
      "seal issue",
      "cope seal",
      "seal not seating",
      "clamp issue",
      "wont clamp",
      "won't clamp",
    ],
    symptom: "Cope side appears not to seal/seat correctly, affecting clamp or vacuum behavior.",
    firstChecks: [
      "Check for sand/debris on sealing surfaces.",
      "Check visible alignment/seating condition if safely observable.",
      "Watch whether vacuum behavior changes exactly when clamp/seal should make.",
    ],
    nextSteps: [
      "Clean accessible surfaces if allowed.",
      "Compare current seating/alignment to normal condition.",
      "If repeated after cleaning/reset: document exact step where sealing fails.",
    ],
    likelyCauses: [
      "Dirty sealing surface",
      "Seal not seating correctly",
      "Alignment issue on cope eject side",
    ],
    whenCallMaint:
      "Call maintenance if the seal will not seat correctly after basic cleaning/reset or if clamp/vacuum depends on that failed seating condition.",
    safetyNotes: ["Keep hands clear of pinch points during seating attempts."],
    pending: [
      "Pending confirmation: exact HMI indicator/state that permits clamp.",
    ],
    relatedPages: [
      {
        label: "Troubleshooting — Vacuum drops",
        route: "troubleshooting/vacuum-drops",
      },
      { label: "PNEU — Sensors + Reset Air", route: "screens" },
    ],
  },
  {
    id: "gas-smell-exhaust",
    title: "Gas smell complaint / exhaust adjustment",
    priority: "medium",
    triggers: [
      "gas smell",
      "smell gas",
      "odor",
      "fumes",
      "amine",
      "exhaust",
      "venting",
      "strong smell",
    ],
    symptom: "Operators notice gas odor during or after the gassing cycle.",
    firstChecks: [
      "Confirm the area is safe and ventilation is functioning (follow site policy).",
      "Check for obvious leaks in accessible lines/fittings (visual + audible).",
      "Verify exhaust-related setting is not set too low for clearing residual gas.",
    ],
    nextSteps: [
      "If odor increased after changes: revert last setting change if allowed and document.",
      "Increase Gas Exhaust Time slightly to clear residual gas (cycle time increases).",
      "If odor persists or leak suspected: stop and escalate—do not normalize it.",
    ],
    likelyCauses: [
      "Exhaust duration too short",
      "Leak in accessible connections",
      "Ventilation issue in the area",
    ],
    whenCallMaint:
      "Suspected leak you cannot identify/stop safely. Persistent odor despite exhaust adjustments. Any safety alarm/exposure concern.",
    safetyNotes: [
      "Treat unusual odor as a safety issue first. Follow site PPE/vent rules.",
    ],
    pending: [
      "Pending confirmation: exact adjustment increment and site policy for exhaust changes.",
    ],
    relatedPages: [{ label: "Gassing parameters", route: "screens/gassing" }],
  },
  {
    id: "vent-marks-holes",
    title: "Holes/marks near vents (possible over-gassing symptom)",
    priority: "medium",
    triggers: [
      "holes near vents",
      "vent marks",
      "marks near vents",
      "pitting",
      "overgassing",
      "over gassing",
      "gas too much",
      "holes",
      "vents",
    ],
    symptom: "Visible defects concentrated near vents (holes/marks).",
    firstChecks: [
      "Confirm the pattern is consistently near vents (pattern matters).",
      "Check for recent changes in gassing time/pressure or ramp settings.",
      "Inspect vents for blockage or sand buildup (if allowed).",
    ],
    nextSteps: [
      "If settings changed recently: move back toward baseline if allowed and document effect.",
      "If vents are partially blocked: clean/clear per approved practice.",
      "Escalate with photos, box ID, and what settings changed.",
    ],
    likelyCauses: [
      "Process imbalance linked to gassing/exhaust timing (symptom-linked)",
      "Vent blockage causing localized effects",
      "Corebox condition at vent features",
    ],
    whenCallMaint:
      "Defects persist after baseline re-check and approved cleaning. Suspected damage to vent features or corebox surfaces.",
    safetyNotes: [],
    pending: [
      "Pending confirmation: exact relationship between this defect pattern and gassing settings for this process.",
    ],
    relatedPages: [{ label: "Gassing parameters", route: "screens/gassing" }],
  },
  {
    id: "cold-box-preheat",
    title: "Cold box start issues / preheating use (Pending)",
    priority: "low",
    triggers: [
      "cold box",
      "cold start",
      "preheat",
      "preheating",
      "first run bad",
      "startup curing",
      "initial curing",
    ],
    symptom: "Early runs on a cold corebox show poor curing/consistency until the box warms.",
    firstChecks: [
      "Confirm it happens mainly at start of shift or after long downtime.",
      "Check if Pre-heating is available and operator-accessible on this machine.",
      "Compare first-run vs later-run outcomes (does it stabilize after warming?).",
    ],
    nextSteps: [
      "If preheating is used on the floor: increase preheat time modestly to stabilize startup (cycle time increases).",
      "Document the preheat time used and whether it improved first run.",
      "Escalate if you need a baseline preheat standard for the box/process.",
    ],
    likelyCauses: [
      "Corebox temperature too low at startup affecting early curing/consistency",
    ],
    whenCallMaint:
      "Call maintenance if the preheat setting exists but has no noticeable effect, or if startup issues persist beyond the initial warmup period.",
    safetyNotes: [],
    pending: [
      "Pending confirmation: exact startup/preheat guidance by box and process.",
    ],
    relatedPages: [{ label: "Gassing parameters", route: "screens/gassing" }],
  },
  {
    id: "machine-cannot-be-started",
    title: "Machine cannot be started",
    priority: "high",
    triggers: [
      "machine cannot be started",
      "machine wont start",
      "machine won't start",
      "cannot start machine",
      "wont start",
      "won't start",
      "startup fault",
      "machine not starting",
      "machine fault startup",
    ],
    symptom: "Machine will not start when you try to run it.",
    firstChecks: [
      "Make sure the machine is in the correct operating mode.",
      "Make sure required guards, doors, and safety conditions are made.",
      "Check whether the machine is reset and ready to run.",
      "Look for any active warning or fault message on the screen.",
      "Make sure required green conditions are made before trying again.",
    ],
    nextSteps: [
      "Check the screen for the exact active message or fault.",
      "Verify the machine is actually ready for startup and not waiting on a condition.",
      "Retry only if the machine state is understood and safe.",
      "Record what message is showing and what step the machine stopped at.",
    ],
    likelyCauses: [
      "A machine condition is not satisfied",
      "A safety condition is blocking startup",
      "A fault or warning is preventing the start sequence",
    ],
    whenCallMaint:
      "Call maintenance if the machine still will not start after basic checks, if a fault message stays active and the cause is not clear, or if a guard, sensor, or machine condition will not make.",
    safetyNotes: [
      "Do not bypass safety conditions or interlocks to force a startup.",
    ],
    pending: [],
    relatedPages: [
      { label: "Machine Operation", route: "basics" },
      { label: "Control Screens", route: "screens" },
    ],
  },
  {
    id: "vacuum-pressure-too-low",
    title: "Vacuum pressure too low",
    priority: "high",
    triggers: [
      "vacuum pressure too low",
      "vacuum low",
      "vacuum wont make",
      "vacuum won't make",
      "vacuum drops",
      "losing vacuum",
      "low vacuum",
      "vacuum fault",
    ],
    symptom: "Vacuum will not make correctly or drops too low during the cycle.",
    firstChecks: [
      "Check the visible vacuum reading if the gauge is available.",
      "Check for obvious leaks, loose lines, or poor seating if safe to inspect.",
      "Check whether the related position step fully made before the vacuum step.",
      "Check for debris or buildup affecting the sealing area.",
      "Look for an active fault or message tied to the vacuum step.",
    ],
    nextSteps: [
      "Verify the related part is fully seated and in the correct position.",
      "Clean obvious debris or buildup from the seal area if procedure allows.",
      "Retry only if the machine condition is understood and safe.",
      "Watch whether vacuum makes and holds steady on the retry.",
    ],
    likelyCauses: [
      "Vacuum is not being made or held correctly",
      "Leak or poor seal",
      "Poor seating or poor machine position",
      "Machine-side vacuum problem",
    ],
    whenCallMaint:
      "Call maintenance if vacuum still will not make, if vacuum drops again after retry, or if you suspect a damaged seal, leak, or machine-side fault.",
    safetyNotes: ["Do not continue guessing if vacuum is unstable."],
    pending: [],
    relatedPages: [
      { label: "Control Screens", route: "screens" },
      {
        label: "Troubleshooting — Vacuum drops",
        route: "troubleshooting/vacuum-drops",
      },
    ],
  },
  {
    id: "light-curtain-interrupted",
    title: "Light curtain interrupted",
    priority: "high",
    triggers: [
      "light curtain",
      "curtain interrupted",
      "safety curtain",
      "machine won't run light curtain",
      "machine wont run light curtain",
      "light barrier",
    ],
    symptom:
      "Machine will not run or stops because the light curtain is interrupted.",
    firstChecks: [
      "Make sure no person, part, cart, or tool is in the light curtain area.",
      "Check for anything breaking the curtain path.",
      "Make sure the area is clear before trying again.",
      "Look for anything hanging or sitting in the safety zone.",
    ],
    nextSteps: [
      "Clear the area completely.",
      "Check for material or obstruction in the light curtain path.",
      "Retry only after the area is clear and the condition is understood.",
      "If the curtain still shows blocked, document what the screen says.",
    ],
    likelyCauses: [
      "The safety light curtain is detecting an interruption",
      "Material, person, or obstruction is in the curtain path",
      "Possible curtain alignment or sensor problem",
    ],
    whenCallMaint:
      "Call maintenance if the light curtain fault remains after the area is clear, if the curtain appears clear but the machine still shows interruption, or if you suspect a sensor/alignment problem.",
    safetyNotes: ["Do not bypass or defeat the light curtain."],
    pending: [],
    relatedPages: [
      { label: "Machine Operation", route: "basics" },
      { label: "Control Screens", route: "screens" },
    ],
  },
  {
    id: "sand-bind-shoot-area-dirty",
    title: "Sand bind / shoot area dirty",
    priority: "medium",
    triggers: [
      "sand bind",
      "shoot area dirty",
      "shoot dirty",
      "sand blockage",
      "shoot plate dirty",
      "sand build up shoot",
      "shoot blocked",
    ],
    symptom:
      "Sand binds in the shooting area or the shoot area does not clear correctly.",
    firstChecks: [
      "Check for visible buildup in the shoot area if safe.",
      "Check for dirty or restricted shoot components.",
      "Check whether sand flow looks restricted.",
      "Check whether the issue is getting worse from cycle to cycle.",
    ],
    nextSteps: [
      "Clean the affected area only if procedure allows.",
      "Remove buildup carefully using approved cleaning steps.",
      "Make sure the area is clear before restarting.",
      "Document where the buildup is happening if the problem returns.",
    ],
    likelyCauses: [
      "Sand buildup in the shooting area",
      "Dirty or partially blocked shoot components",
      "Restricted sand flow",
    ],
    whenCallMaint:
      "Call maintenance if buildup returns immediately, if the restriction cannot be cleared safely, or if you suspect a deeper shoot plate or machine issue.",
    safetyNotes: [
      "Do not reach into unsafe areas or clean moving parts without the correct safe condition.",
    ],
    pending: [],
    relatedPages: [
      { label: "Mixer Cleaning", route: "mixer/cleaning" },
      { label: "Corebox Setup", route: "loadbox" },
      { label: "Core Reference", route: "loadbox/core-reference" },
    ],
  },
  {
    id: "core-not-shot-out",
    title: "Core is not shot out",
    priority: "high",
    triggers: [
      "core not shot out",
      "wont shoot",
      "won't shoot",
      "shooting fault",
      "incomplete shot",
      "core shooting problem",
      "core not filling",
    ],
    symptom: "Core does not shoot out correctly or the shot is incomplete.",
    firstChecks: [
      "Check for sand bind or restriction in the shoot area.",
      "Check whether shooting pressure looks reduced.",
      "Check whether the machine completed the shooting step correctly.",
      "Check whether the problem is repeatable on the next cycle.",
    ],
    nextSteps: [
      "Check the shoot area for buildup if safe.",
      "Verify the machine made the required shooting condition.",
      "Retry only if the cause is understood and the machine is safe to run.",
      "Record whether the fault happens the same way each cycle.",
    ],
    likelyCauses: [
      "Shooting step not completing correctly",
      "Restriction or buildup in the shooting area",
      "Low or reduced shooting pressure",
      "Material movement problem",
    ],
    whenCallMaint:
      "Call maintenance if the core still does not shoot out correctly after checks, if repeated incomplete shots continue, or if you suspect a pressure, blockage, or machine-side failure.",
    safetyNotes: [],
    pending: [],
    relatedPages: [
      { label: "Corebox Setup", route: "loadbox" },
      { label: "Control Screens", route: "screens" },
      { label: "Core Reference", route: "loadbox/core-reference" },
    ],
  },
  {
    id: "reduced-shooting-pressure",
    title: "Reduced shooting pressure",
    priority: "high",
    triggers: [
      "reduced shooting pressure",
      "low shooting pressure",
      "weak shot",
      "shot not full",
      "shooting pressure",
      "low shot pressure",
    ],
    symptom:
      "Shot looks weak or incomplete and the machine appears to have low shooting force.",
    firstChecks: [
      "Check for visible restriction or buildup in the shooting area if safe.",
      "Check whether material flow looks normal.",
      "Check whether the problem happens every cycle or only sometimes.",
      "Check whether the job settings still match the expected setup.",
    ],
    nextSteps: [
      "Check the shooting area for buildup or blockage.",
      "Verify the process is set to the correct job conditions.",
      "Retry only after obvious issues are cleared and the machine is safe.",
      "Document whether the shot improves, stays weak, or gets worse.",
    ],
    likelyCauses: [
      "Shooting pressure is lower than needed",
      "Restriction or blockage",
      "Flow issue",
      "Machine-side pressure issue",
    ],
    whenCallMaint:
      "Call maintenance if pressure still appears low after basic checks, if incomplete shots continue, or if you suspect a pressure supply or machine-side problem.",
    safetyNotes: [],
    pending: [],
    relatedPages: [
      { label: "Control Screens", route: "screens" },
      { label: "Corebox Setup", route: "loadbox" },
      { label: "Core Reference", route: "loadbox/core-reference" },
    ],
  },
  {
    id: "shot-not-full",
    title: "Shot not full",
    priority: "high",
    triggers: [
      "shot not full",
      "not full shot",
      "incomplete shot",
      "weak fill",
      "partial shot",
      "shot incomplete",
      "core not full",
    ],
    symptom:
      "Shot is incomplete and the core does not fill out the way it should.",
    firstChecks: [
      "Check whether shooting pressure looks reduced.",
      "Check for buildup or restriction in the shoot area if safe.",
      "Check whether the problem is happening every cycle or only sometimes.",
      "Check whether the setup still matches the correct job conditions.",
    ],
    nextSteps: [
      "Compare current machine behavior to the last known good run.",
      "Clear obvious buildup if procedure allows.",
      "Retry only after confirming the machine is safe and the setup looks correct.",
      "If the shot stays incomplete, document whether it is weak in the same area each time.",
    ],
    likelyCauses: [
      "Reduced shooting pressure",
      "Restriction or buildup in the shoot path",
      "Material movement issue",
      "Incorrect process/setup condition",
    ],
    whenCallMaint:
      "Call maintenance or setup if shots continue to be incomplete after basic checks, or if the machine repeatedly produces weak shots.",
    safetyNotes: [],
    pending: [],
    relatedPages: [
      { label: "Reduced shooting pressure", route: "troubleshooting/reduced-shooting-pressure" },
      { label: "Corebox Setup", route: "loadbox" },
      { label: "Core Reference", route: "loadbox/core-reference" },
    ],
  },
  {
    id: "core-not-gassed",
    title: "Core is not gassed",
    priority: "high",
    triggers: [
      "core not gassed",
      "not gassed",
      "no gassing",
      "core wont gas",
      "core won't gas",
      "gassing fault",
    ],
    symptom:
      "Core does not appear to gas correctly or the hardening step does not happen.",
    firstChecks: [
      "Check whether the gassing step actually ran.",
      "Check the screen for a hardening or gassing-related message.",
      "Check whether the correct job settings are loaded.",
      "Check whether this is happening every cycle or only sometimes.",
    ],
    nextSteps: [
      "Verify the machine reached the gassing step.",
      "Document the exact point where the cycle fails.",
      "If allowed, compare current settings to the correct job setup.",
      "Retry only if the machine condition is understood and safe.",
    ],
    likelyCauses: [
      "Gassing step did not run correctly",
      "Wrong or incomplete process condition",
      "Hardening-related machine fault",
    ],
    whenCallMaint:
      "Call maintenance if the gassing step still does not happen, if the screen shows a hardening fault you cannot clear safely, or if the same condition repeats.",
    safetyNotes: [
      "Do not guess through repeated runs if the core is not being gassed correctly.",
    ],
    pending: [],
    relatedPages: [
      { label: "Gassing parameters", route: "screens/gassing" },
      { label: "Machine Operation", route: "basics" },
      { label: "Core Reference", route: "loadbox/core-reference" },
    ],
  },
  {
    id: "core-does-not-harden",
    title: "Core does not harden",
    priority: "high",
    triggers: [
      "core does not harden",
      "core not hard",
      "soft core",
      "won't harden",
      "wont harden",
      "hardening fault",
      "soft after gassing",
    ],
    symptom: "Core stays soft or does not harden correctly after the process.",
    firstChecks: [
      "Check whether the gassing step ran correctly.",
      "Check whether the issue started after a setup or setting change.",
      "Check whether the problem is affecting every cycle or only some parts.",
      "Compare current conditions to the last known good run if possible.",
    ],
    nextSteps: [
      "Verify the correct job settings are loaded.",
      "Check whether the problem is tied to startup, cold condition, or repeated cycles.",
      "Document what changed before the issue started.",
      "Escalate if acceptable cores cannot be produced.",
    ],
    likelyCauses: [
      "Hardening step not completing correctly",
      "Gassing-related process issue",
      "Wrong setting or process condition",
      "Material/process condition out of normal range",
    ],
    whenCallMaint:
      "Call maintenance or setup if the core continues to stay soft, if acceptable cores cannot be produced, or if the hardening issue repeats after basic checks.",
    safetyNotes: [],
    pending: [],
    relatedPages: [
      { label: "Gassing parameters", route: "screens/gassing" },
      { label: "Machine Operation", route: "basics" },
      { label: "Core Reference", route: "loadbox/core-reference" },
    ],
  },
  {
    id: "dosing-pump-not-running",
    title: "Dosing pump not running",
    priority: "high",
    triggers: [
      "dosing pump not running",
      "pump not running",
      "dosing pump",
      "pump fault",
      "hardening pump",
      "dosing fault",
    ],
    symptom:
      "The hardening process shows a dosing pump problem or the pump does not appear to run.",
    firstChecks: [
      "Check the screen for the exact dosing pump or hardening-related message.",
      "Check whether the fault happens every cycle or only once.",
      "Verify the machine reached the hardening step.",
      "Check whether another related hardening fault is also active.",
    ],
    nextSteps: [
      "Record the exact fault message and when it happens in the cycle.",
      "Retry only if the machine condition is understood and site procedure allows it.",
      "If the fault returns immediately, stop repeated retries.",
      "Document whether the problem started after a change, reset, or restart.",
    ],
    likelyCauses: [
      "Dosing pump did not run correctly",
      "Hardening system fault",
      "Related control or supply issue",
    ],
    whenCallMaint:
      "Call maintenance if the dosing pump fault repeats, if the hardening step cannot run, or if the core quality is affected and the cause is not obvious.",
    safetyNotes: [
      "Do not keep cycling the machine if the hardening system is not working correctly.",
    ],
    pending: [],
    relatedPages: [
      { label: "Gassing parameters", route: "screens/gassing" },
      { label: "Machine Operation", route: "basics" },
      { label: "Core Reference", route: "loadbox/core-reference" },
    ],
  },
  {
    id: "no-medium-at-ex-flow-heater",
    title: "No medium at ex-flow heater",
    priority: "high",
    triggers: [
      "no medium at ex-flow heater",
      "ex-flow heater",
      "no medium heater",
      "heater medium fault",
      "hardening heater fault",
    ],
    symptom:
      "The machine shows a no-medium or heater-related hardening fault.",
    firstChecks: [
      "Check the exact fault text on the screen.",
      "Check whether the hardening step is failing every cycle.",
      "Check whether another heater or hardening-related fault is active at the same time.",
      "Document where in the cycle the fault appears.",
    ],
    nextSteps: [
      "Do not keep restarting the cycle without understanding the fault.",
      "Record the exact message and whether the problem is repeatable.",
      "If allowed, compare the current condition to the last known good run.",
      "Escalate with the fault text and cycle step information.",
    ],
    likelyCauses: [
      "Heater-related medium/supply condition is not being met",
      "Hardening system fault",
      "Related control or process issue",
    ],
    whenCallMaint:
      "Call maintenance if the fault repeats, if the hardening step cannot complete, or if heater-related faults remain active.",
    safetyNotes: [
      "Do not guess through repeated runs when a heater/hardening supply fault is active.",
    ],
    pending: [],
    relatedPages: [
      { label: "Gassing parameters", route: "screens/gassing" },
      { label: "Machine Operation", route: "basics" },
    ],
  },
  {
    id: "pneumatic-fault",
    title: "Pneumatic fault / air system issue",
    priority: "high",
    triggers: [
      "pneumatic fault",
      "pneu",
      "air fault",
      "air issue",
      "pneumatic issue",
      "air pressure problem",
    ],
    symptom:
      "Machine shows a pneumatic fault, air-related issue, or air functions do not respond correctly.",
    firstChecks: [
      "Check the screen for the exact pneumatic fault text.",
      "Confirm plant air supply is present and stable.",
      "Check whether the problem is tied to one motion or function.",
      "Look for obvious loose airlines or audible leaks if safe.",
      "Check whether Reset Air is appropriate and allowed for the stopped condition.",
    ],
    nextSteps: [
      "If safe and allowed, perform the normal reset practice once.",
      "Watch whether the same pneumatic fault returns at the same step.",
      "Record the exact message, machine step, and any gauge condition.",
      "Stop repeated resets if the same fault keeps coming back.",
    ],
    likelyCauses: [
      "Air supply condition is not stable",
      "Pneumatic valve or actuator issue",
      "Air leak or line problem",
      "Required air-driven condition is not being made",
    ],
    whenCallMaint:
      "Call maintenance if the pneumatic fault repeats after a normal reset, if air supply looks unstable, if a leak is obvious, or if a motion will not make correctly.",
    safetyNotes: [
      "Do not keep forcing cycles through repeated resets when the air system is not making correctly.",
    ],
    pending: [],
    relatedPages: [
      { label: "Control Screens", route: "screens" },
      { label: "Machine Operation", route: "basics" },
      { label: "Troubleshooting", route: "troubleshooting" },
    ],
  },
  {
    id: "electrical-fault",
    title: "Electrical fault / control power issue",
    priority: "high",
    triggers: [
      "electrical fault",
      "control power issue",
      "cpu fault",
      "24v fault",
      "motor protection",
      "limit switch fault",
      "electrical issue",
    ],
    symptom:
      "Machine shows an electrical or control fault, or a control power-related function will not run.",
    firstChecks: [
      "Read the exact fault text on the screen.",
      "Check whether the issue happened during startup or during a specific cycle step.",
      "Check whether control power and normal machine indications are present.",
      "Check whether the same electrical message returns immediately after reset.",
    ],
    nextSteps: [
      "Record the exact message and when it happens.",
      "Do not guess through repeated resets if the same fault comes right back.",
      "If the machine lost control power or has a repeated electrical fault, stop and escalate.",
      "Document whether the issue affects all functions or one specific area.",
    ],
    likelyCauses: [
      "Electrical/control fault is active",
      "Control supply issue",
      "Motor protection or limit-switch-related issue",
      "CPU/control-side fault",
    ],
    whenCallMaint:
      "Call maintenance if an electrical fault remains active, if control power is lost, if the same message returns immediately, or if a control-related function will not recover normally.",
    safetyNotes: [
      "Do not bypass electrical faults or open electrical areas unless you are authorized and following procedure.",
    ],
    pending: [],
    relatedPages: [
      { label: "Control Screens", route: "screens" },
      { label: "Machine Operation", route: "basics" },
      { label: "Troubleshooting", route: "troubleshooting" },
    ],
  },
  {
    id: "excessive-noise-vibration",
    title: "Excessive noise / vibration",
    priority: "high",
    triggers: [
      "noise",
      "vibration",
      "machine shaking",
      "loud machine",
      "excessive noise",
      "excessive vibration",
      "rattling",
      "vibrating",
    ],
    symptom:
      "Machine makes unusual noise, rattles, or vibrates more than normal during operation.",
    firstChecks: [
      "Check whether the noise happens at the same step every cycle.",
      "Check whether the vibration started after a setup, box change, or restart.",
      "Look for obvious loose material, loose parts, or abnormal movement if safe to observe.",
      "Check whether the noise is coming from one area only or the whole machine.",
    ],
    nextSteps: [
      "Stop and observe which motion or step causes the noise.",
      "Do not keep cycling the machine just to see if it gets better.",
      "Document the step, area, and whether the sound is constant or only during one motion.",
      "Escalate with the exact cycle point where the vibration starts.",
    ],
    likelyCauses: [
      "Abnormal machine movement",
      "Loose or unstable component",
      "Hydraulic or mechanical issue",
      "Problem tied to one motion or load condition",
    ],
    whenCallMaint:
      "Call maintenance if the noise or vibration is new, severe, getting worse, or tied to a repeated machine motion.",
    safetyNotes: [
      "Do not continue running a machine that is vibrating abnormally or sounds unsafe.",
    ],
    pending: [],
    relatedPages: [
      { label: "Machine Operation", route: "basics" },
      { label: "Control Screens", route: "screens" },
      { label: "Troubleshooting", route: "troubleshooting" },
    ],
  },
  {
    id: "jerky-movement-oscillation",
    title: "Jerky movement / oscillation",
    priority: "high",
    triggers: [
      "jerky movement",
      "oscillation",
      "shaking movement",
      "unstable motion",
      "jumps during movement",
      "stuttering motion",
      "not smooth",
    ],
    symptom:
      "One machine motion is not smooth and appears jerky, unstable, or oscillating.",
    firstChecks: [
      "Check which motion is affected and whether it happens every cycle.",
      "Check whether the issue started after a restart, setup, or recovery action.",
      "Check whether another fault message is active at the same time.",
      "Watch whether the motion improves, stays the same, or gets worse on the next safe attempt.",
    ],
    nextSteps: [
      "Document which movement is affected.",
      "Stop repeated retries if the motion remains unstable.",
      "Record whether the motion binds, jumps, or hesitates at the same point each time.",
      "Escalate with the exact machine movement and step where it happens.",
    ],
    likelyCauses: [
      "Hydraulic or pneumatic movement issue",
      "Binding or unstable motion condition",
      "Control or position issue tied to one axis or function",
    ],
    whenCallMaint:
      "Call maintenance if a motion is jerky, oscillating, or not controllable in a normal smooth way.",
    safetyNotes: [
      "Keep clear of moving areas. Do not try to work around unstable movement.",
    ],
    pending: [],
    relatedPages: [
      { label: "Control Screens", route: "screens" },
      { label: "Corebox Setup", route: "loadbox" },
      { label: "Troubleshooting", route: "troubleshooting" },
    ],
  },
  {
    id: "foaming-oil-condition",
    title: "Foaming / oil condition issue",
    priority: "medium",
    triggers: [
      "foaming",
      "oil foaming",
      "hydraulic oil foam",
      "oil condition",
      "foam in oil",
      "oil looks bad",
    ],
    symptom:
      "Hydraulic oil condition looks abnormal or foaming is suspected along with machine performance issues.",
    firstChecks: [
      "Check whether the machine is also showing unstable movement, noise, or pressure-related behavior.",
      "Check whether the issue appeared with another hydraulic-related symptom.",
      "Do not open or service hydraulic components unless authorized.",
      "Record what operator-visible condition or machine behavior was observed.",
    ],
    nextSteps: [
      "Stop and document the related machine symptoms.",
      "Report whether the problem is tied to heat, noise, or unstable motion.",
      "Do not keep running the machine if performance is getting worse.",
    ],
    likelyCauses: [
      "Hydraulic oil condition issue",
      "Hydraulic system condition out of normal range",
      "Related heat, air, or flow issue in the hydraulic system",
    ],
    whenCallMaint:
      "Call maintenance if oil-related abnormal condition is suspected or if hydraulic performance is affected.",
    safetyNotes: [
      "Hydraulic system inspection beyond normal operator checks should be left to authorized personnel.",
    ],
    pending: [],
    relatedPages: [
      { label: "Control Screens", route: "screens" },
      { label: "Machine Operation", route: "basics" },
    ],
  },
  {
    id: "oil-temperature-too-high",
    title: "Oil temperature too high",
    priority: "high",
    triggers: [
      "oil temperature",
      "oil too hot",
      "hydraulic oil hot",
      "high oil temperature",
      "oil temp high",
      "overheating oil",
    ],
    symptom:
      "Machine shows signs of high oil temperature or an oil-temperature-related fault.",
    firstChecks: [
      "Check the screen for the exact temperature or hydraulic-related message.",
      "Check whether the machine is also showing noise, vibration, or unstable movement.",
      "Check whether the issue gets worse the longer the machine runs.",
      "Record when the temperature-related issue appears in the shift or run.",
    ],
    nextSteps: [
      "Stop repeated running if the machine appears to be overheating.",
      "Document the exact message and related machine behavior.",
      "Report whether the issue is tied to longer runtime, repeated cycling, or other hydraulic symptoms.",
    ],
    likelyCauses: [
      "Hydraulic oil temperature out of normal range",
      "Related hydraulic system condition",
      "Heat-related performance issue in the hydraulic system",
    ],
    whenCallMaint:
      "Call maintenance if oil temperature is too high, if the fault repeats, or if the machine shows related hydraulic performance problems.",
    safetyNotes: [
      "Do not continue pushing the machine if overheating is suspected.",
    ],
    pending: [],
    relatedPages: [
      { label: "Control Screens", route: "screens" },
      { label: "Machine Operation", route: "basics" },
      { label: "Troubleshooting", route: "troubleshooting" },
    ],
  },

  {
    id: "clamp-wont-turn-green-search",
    title: "Clamp won’t turn green",
    priority: "high",
    triggers: [
      "clamp wont turn green",
      "clamp won't turn green",
      "clamp not green",
      "wont clamp",
      "won't clamp",
      "clamp issue",
      "clamp not making",
    ],
    symptom:
      "Clamp step does not complete and the required green confirmation does not make.",
    firstChecks: [
      "Check whether the box is fully seated and aligned.",
      "Check for sand, debris, or buildup on seating or contact surfaces.",
      "Check whether the machine is in the correct step and mode.",
      "Check whether another required condition has not been made first.",
    ],
    nextSteps: [
      "Use the Auto Load Recovery page for the exact recovery steps from this machine state.",
      "Do not guess the recovery sequence from memory.",
      "Document the exact point where the clamp step stops if the issue repeats.",
    ],
    likelyCauses: [
      "Box not seated correctly",
      "Debris or buildup affecting clamp/seating",
      "Required condition not made before clamp step",
      "Mechanical or sensor-side clamp issue",
    ],
    whenCallMaint:
      "Call maintenance if the clamp still will not turn green after following the correct recovery path, or if the same clamp step fails repeatedly.",
    safetyNotes: [
      "Keep clear of pinch points while checking clamp-related conditions.",
    ],
    pending: [],
    relatedPages: [
      { label: "Auto Load Recovery (Manual)", route: "loadbox/auto-recovery" },
      {
        label: "Clamp won’t turn green",
        route: "loadbox/auto-recovery/clamp-wont-turn-green",
      },
      { label: "Corebox Setup", route: "loadbox" },
    ],
  },
  {
    id: "carriage-wont-move-search",
    title: "Carriage won’t move",
    priority: "high",
    triggers: [
      "carriage wont move",
      "carriage won't move",
      "gas carriage wont move",
      "gas carriage won't move",
      "carriage stuck",
      "carriage issue",
    ],
    symptom:
      "The carriage does not move when it should during load or recovery.",
    firstChecks: [
      "Check whether the machine is in the correct mode for the move.",
      "Check whether another required condition has not been made first.",
      "Check whether the table or another motion is still in the wrong position.",
      "Check for an active fault or stop message on the screen.",
    ],
    nextSteps: [
      "Use the Auto Load Recovery page for the exact recovery steps from this state.",
      "Verify the machine sequence before retrying the move.",
      "Document the exact step where the carriage stops responding if it repeats.",
    ],
    likelyCauses: [
      "Required sequence condition not made",
      "Table or related motion not in correct position",
      "Active fault blocking carriage movement",
      "Mechanical or pneumatic issue affecting the carriage",
    ],
    whenCallMaint:
      "Call maintenance if the carriage still will not move after following the correct recovery path, or if the same move is blocked repeatedly.",
    safetyNotes: [
      "Keep clear of moving areas and do not force the carriage path.",
    ],
    pending: [],
    relatedPages: [
      { label: "Auto Load Recovery (Manual)", route: "loadbox/auto-recovery" },
      {
        label: "Carriage won’t move",
        route: "loadbox/auto-recovery/carriage-wont-move",
      },
      { label: "Corebox Setup", route: "loadbox" },
    ],
  },
  {
    id: "table-lifted-auto-stopped-search",
    title: "Table lifted but auto stopped",
    priority: "high",
    triggers: [
      "table lifted auto stopped",
      "table lifted but stopped",
      "auto stopped after table lifted",
      "table stopped short",
      "table close but not there",
    ],
    symptom:
      "Auto load stops after the table lifts close to position, but the required position does not fully make.",
    firstChecks: [
      "Check whether the table is close to position but not fully there.",
      "Check whether the required green confirmation has not been made.",
      "Do not guess the final position.",
      "Check whether the machine must now be finished manually.",
    ],
    nextSteps: [
      "Use the Auto Load Recovery page for the exact manual finish from this point.",
      "Move the table only as required by the recovery page.",
      "Document the recovery point if the issue repeats.",
    ],
    likelyCauses: [
      "Table stopped short of the required position",
      "Required position confirmation not made",
      "Auto sequence interrupted before the step fully completed",
    ],
    whenCallMaint:
      "Call maintenance if the table will not make the required position, if the same stop repeats, or if the correct confirmation still will not turn green.",
    safetyNotes: [
      "Do not guess position. Use the required confirmation before continuing.",
    ],
    pending: [],
    relatedPages: [
      { label: "Auto Load Recovery (Manual)", route: "loadbox/auto-recovery" },
      {
        label: "Table lifted but auto stopped",
        route: "loadbox/auto-recovery/table-lifted-auto-stopped",
      },
      { label: "Corebox Setup", route: "loadbox" },
    ],
  },
  {
    id: "corebox-wont-lock-in-out-search",
    title: "Corebox won’t lock in / lock out",
    priority: "high",
    triggers: [
      "corebox wont lock in",
      "corebox won't lock in",
      "corebox wont lock out",
      "corebox won't lock out",
      "lock in issue",
      "lock out issue",
      "box wont lock",
      "box won't lock",
    ],
    symptom:
      "Corebox will not complete the lock-in or lock-out step correctly.",
    firstChecks: [
      "Check whether the box is seated and aligned correctly.",
      "Check whether the machine is in the correct step and mode.",
      "Check for buildup or obstruction affecting the locking step.",
      "Check whether another required condition has not been made first.",
    ],
    nextSteps: [
      "Use the Corebox Setup and Auto Load Recovery pages for the correct next step from this machine state.",
      "Do not guess the lock sequence from memory.",
      "Document whether the problem happens on lock-in, lock-out, or both.",
    ],
    likelyCauses: [
      "Box not seated correctly",
      "Obstruction or buildup in the locking path",
      "Required sequence condition not made",
      "Mechanical or sensor-side lock issue",
    ],
    whenCallMaint:
      "Call maintenance if the corebox still will not lock in or out after following the correct recovery path, or if the locking step repeatedly fails.",
    safetyNotes: [
      "Keep clear of pinch points and moving areas during lock steps.",
    ],
    pending: [],
    relatedPages: [
      { label: "Corebox Setup", route: "loadbox" },
      { label: "Auto Load Recovery (Manual)", route: "loadbox/auto-recovery" },
      { label: "Corebox Removal Safety", route: "safety/corebox-removal-safety" },
    ],
  },
  {
    id: "robot-not-removing-core",
    title: "Robot not removing core",
    priority: "high",
    triggers: [
      "robot not removing core",
      "robot wont remove core",
      "robot won't remove core",
      "robot issue",
      "robot not picking core",
      "core not removed by robot",
    ],
    symptom:
      "Robot does not remove the core correctly or the removal step does not complete the way it should.",
    firstChecks: [
      "Check whether the robot problem happens every cycle or only once.",
      "Check whether the machine completed the related cycle step before the robot move.",
      "Check whether the core is positioned normally for pickup/removal.",
      "Look for an active message tied to robot or cycle interruption.",
    ],
    nextSteps: [
      "Stop and document the exact step where the robot fails.",
      "Do not keep retrying if the same removal failure repeats.",
      "Record whether the issue is paired with camera, pickoff, or placement problems.",
      "Escalate with the exact cycle point and what the robot did or did not do.",
    ],
    likelyCauses: [
      "Robot removal step not completing correctly",
      "Core position or cycle condition not normal before robot pickup",
      "Related robot/camera/pickoff issue",
    ],
    whenCallMaint:
      "Call setup or maintenance if the robot repeatedly fails to remove the core, or if the machine cannot continue normal production.",
    safetyNotes: [
      "Do not enter robot or machine movement areas unless the machine is in the correct safe condition.",
    ],
    pending: [],
    relatedPages: [
      { label: "Machine Operation", route: "basics" },
      { label: "Corebox Setup", route: "loadbox" },
      { label: "Troubleshooting", route: "troubleshooting" },
    ],
  },
  {
    id: "pickoff-camera-issue",
    title: "Pickoff / camera issue",
    priority: "high",
    triggers: [
      "pickoff issue",
      "camera issue",
      "camera not working",
      "pickoff not working",
      "robot camera",
      "camera fault",
      "pickoff fault",
    ],
    symptom:
      "Pickoff or camera-related function is not working correctly during production.",
    firstChecks: [
      "Check whether the issue is happening every cycle or only sometimes.",
      "Check whether the machine and core position look normal before the camera/pickoff step.",
      "Check for an active message tied to robot, pickoff, or camera operation.",
      "Check whether the issue started after a restart, setup, or changeover.",
    ],
    nextSteps: [
      "Record the exact cycle point where the pickoff or camera problem happens.",
      "Do not keep retrying if the same function fails the same way each cycle.",
      "Escalate with the message shown and what the robot/camera did or did not do.",
    ],
    likelyCauses: [
      "Camera or pickoff condition not being made correctly",
      "Robot-related process interruption",
      "Cycle state not normal before pickoff/camera action",
    ],
    whenCallMaint:
      "Call setup or maintenance if the camera or pickoff issue repeats or stops normal production.",
    safetyNotes: [
      "Keep clear of robot and moving equipment areas unless the machine is in the correct safe condition.",
    ],
    pending: [],
    relatedPages: [
      { label: "Machine Operation", route: "basics" },
      { label: "Control Screens", route: "screens" },
      { label: "Troubleshooting", route: "troubleshooting" },
    ],
  },
  {
    id: "vacuum-wont-make-during-load-search",
    title: "Vacuum won’t make during load",
    priority: "high",
    triggers: [
      "vacuum wont make during load",
      "vacuum won't make during load",
      "vacuum load issue",
      "load vacuum issue",
      "vacuum not making during auto load",
      "vacuum during load",
    ],
    symptom:
      "Auto load reaches the vacuum step, but vacuum does not make.",
    firstChecks: [
      "Check whether the machine reached the vacuum step during auto load.",
      "Check whether the related positions made correctly before the vacuum step.",
      "Check for obvious seating or sealing issues if safe to observe.",
      "Do not continue guessing through repeated auto attempts.",
    ],
    nextSteps: [
      "Use the Auto Load Recovery page for the exact manual recovery from this point.",
      "Document whether the vacuum failure happens at the same place every time.",
      "If vacuum still does not make after the correct retry path, escalate.",
    ],
    likelyCauses: [
      "Vacuum step not making during auto load",
      "Related position or seating condition not fully made",
      "Seal or vacuum-side issue affecting the load step",
    ],
    whenCallMaint:
      "Call maintenance if vacuum still will not make after following the correct recovery path, or if the same load interruption repeats.",
    safetyNotes: [
      "Do not force the load sequence when vacuum will not make.",
    ],
    pending: [],
    relatedPages: [
      { label: "Auto Load Recovery (Manual)", route: "loadbox/auto-recovery" },
      {
        label: "Vacuum won’t make",
        route: "loadbox/auto-recovery/vacuum-wont-make",
      },
      { label: "Corebox Setup", route: "loadbox" },
    ],
  },
];