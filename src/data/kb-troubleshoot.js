export const KB_TROUBLESHOOT = [
  {
    id: "vacuum-drops",
    title: "Vacuum drops / won’t hold vacuum",
    priority: "high",
    triggers: [
      "vacuum drops",
      "vacuum wont hold",
      "vacuum won't hold",
      "wont hold vacuum",
      "won't hold vacuum",
      "losing vacuum",
      "vacuum leak",
      "vacuum low",
      "vac gauge low",
      "low vacuum",
      "vac drop",
    ],
    symptom:
      "Vacuum will not reach target or will not hold during the vacuum or clamp step.",
    firstChecks: [
      "Confirm air supply is stable at the normal bar setting.",
      "Check whether vacuum is steady low, slowly falling, or dropping suddenly to 0.",
      "Check for obvious leaks such as loose hoses, cracked lines, or fittings not seated.",
      "Check sealing surfaces for sand or debris and clean if allowed.",
      "Check whether the vacuum filter or line is blocked if procedure allows.",
    ],
    nextSteps: [
      "If vacuum drops after clamp or seating, suspect seal seating or alignment.",
      "If vacuum is low before the main step, suspect an upstream leak or valve issue.",
      "If vacuum drops suddenly to 0, check for a disconnected line or valve problem.",
      "Record the gauge behavior and the exact cycle step where it fails.",
    ],
    likelyCauses: [
      "Seal not seated or dirty sealing surface",
      "Loose or cracked vacuum line or fitting",
      "Restriction or blockage in the vacuum path",
      "Valve not sealing correctly",
    ],
    whenCallMaint:
      "Call maintenance if minimum vacuum cannot be reached after basic checks, if vacuum repeatedly drops to 0 suddenly, or if there is a constant leak you cannot locate quickly.",
    safetyNotes: ["Do not bypass interlocks or run below minimum vacuum."],
    pending: [],
    relatedPages: [
      { label: "Control Screens", route: "screens" },
      { label: "Gassing parameters", route: "screens/gassing" },
    ],
  },  {
    id: "random-stop-mid-cycle",
    title: "Machine stops mid-cycle / random stop",
    priority: "high",
    triggers: [
      "machine stops mid cycle",
      "stops mid cycle",
      "random stop",
      "cycle stopped",
      "machine halts",
      "stops during cycle",
      "stopped partway through cycle",
      "machine stopped during run",
    ],
    symptom:
      "The machine stops during the cycle without a clear operator command.",
    firstChecks: [
      "Check the HMI message or fault text first and capture the exact wording if possible.",
      "Check whether a required sensor or machine state is not being made.",
      "Check whether the stop repeats at the same step every cycle.",
      "Use Reset Air only if the machine is safely stopped and site practice allows it.",
    ],
    nextSteps: [
      "If it repeats at the same step, suspect a missing condition, sensor, or state.",
      "If it clears with Reset Air but returns, document the repeating condition.",
      "If it is paired with vacuum loss, troubleshoot vacuum first.",
    ],
    likelyCauses: [
      "Required sensor or state not made",
      "Air logic did not reset cleanly",
      "Underlying pneumatic issue",
    ],
    whenCallMaint:
      "Call maintenance if the same stop repeats after a safe reset, if a sensor or state will not make, or if a fault text indicates hardware or service action.",
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
      "not ejecting",
      "core won't come out",
      "core wont come out",
      "sticking on eject",
    ],
    symptom:
      "The core does not release or eject cleanly after the process step is complete.",
    firstChecks: [
      "Confirm vacuum and clamp state are normal before the eject step.",
      "Check whether the issue is on one side only or both sides.",
      "Check for sand buildup or debris on accessible surfaces.",
      "Check whether the problem started after a setup or corebox change.",
    ],
    nextSteps: [
      "Compare to the last known good box or job condition.",
      "If paired with clamp or seating issues, check the seal and alignment path.",
      "If paired with cure problems, review gassing settings and core condition.",
    ],
    likelyCauses: [
      "Mechanical sticking or buildup",
      "Alignment or seating issue",
      "Cure-related release issue",
    ],
    whenCallMaint:
      "Call maintenance if it becomes a repeated mechanical hang-up or risks damage during removal or eject.",
    safetyNotes: ["Do not put hands in unsafe areas to free a stuck part or core."],
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
      "cope seal issue",
      "cope seal not seating",
      "seal not seating cope",
      "cope clamp issue",
      "cope won't clamp",
      "cope wont clamp",
    ],
    symptom:
      "The cope side does not appear to seal or seat correctly, affecting clamp or vacuum behavior.",
    firstChecks: [
      "Check for sand or debris on sealing surfaces.",
      "Check visible alignment or seating condition if safely observable.",
      "Check whether vacuum behavior changes exactly when clamp or seal should make.",
    ],
    nextSteps: [
      "Clean accessible surfaces if allowed.",
      "Compare current seating and alignment to normal condition.",
      "If it repeats after cleaning or reset, document the exact step where sealing fails.",
    ],
    likelyCauses: [
      "Dirty sealing surface",
      "Seal not seating correctly",
      "Alignment issue on cope eject side",
    ],
    whenCallMaint:
      "Call maintenance if the seal will not seat correctly after basic cleaning or reset, or if clamp or vacuum depends on that failed seating condition.",
    safetyNotes: ["Keep hands clear of pinch points during seating attempts."],
    pending: [],
    relatedPages: [
      {
        label: "Troubleshooting — Vacuum drops",
        route: "troubleshooting/vacuum-drops",
      },
      { label: "PNEU — Sensors + Reset Air", route: "screens" },
    ],
  },  {
    id: "vent-marks-holes",
    title: "Holes/marks near vents (possible over-gassing symptom)",
    priority: "medium",
    triggers: [
      "holes near vents",
      "vent marks",
      "marks near vents",
      "holes in cores near vents",
      "pitting near vents",
      "overgassing vents",
      "over gassing vents",
      "vent holes in core",
    ],
    symptom: "Core defects are concentrated near vents, such as holes or marks.",
    firstChecks: [
      "Check whether the pattern is consistently near vents.",
      "Check for recent changes in gassing time, pressure, or ramp settings.",
      "Check vents for blockage or sand buildup if allowed.",
    ],
    nextSteps: [
      "If settings changed recently, move back toward baseline if allowed and document the effect.",
      "If vents are partially blocked, clean or clear them per approved practice.",
      "Escalate with photos, box ID, and what settings changed.",
    ],
    likelyCauses: [
      "Process imbalance linked to gassing or exhaust timing",
      "Vent blockage causing localized effects",
      "Corebox condition at vent features",
    ],
    whenCallMaint:
      "Call maintenance if defects persist after baseline re-check and approved cleaning, or if vent features or corebox surfaces appear damaged.",
    safetyNotes: [],
    pending: [],
    relatedPages: [
      { label: "Gassing parameters", route: "screens/gassing" },
      { label: "Core Reference", route: "loadbox/core-reference" },
    ],
  },
  {
    id: "vent-buildup-vents-plugging",
    title: "Vent buildup / vents plugging",
    priority: "medium",
    triggers: [
      "vent buildup",
      "vents plugging",
      "vents plugged",
      "sand in vents",
      "resin in vents",
      "vent packed",
      "vent clogging",
      "vents clogging",
      "sand packing into vents",
      "vent build up",
      "vents clog up",
    ],
    symptom:
      "Sand or binder buildup packs into the vents and repeated cleaning is needed to keep the box running correctly.",
    firstChecks: [
      "Check sand condition. Does it seem too wet, sticky, clumping, or inconsistent?",
      "Check whether shoot pressure or blow force is higher than normal.",
      "Check whether the vents are already partly plugged or carrying old buildup.",
      "Check whether curing looks weak or inconsistent, especially if cores are soft.",
    ],
    nextSteps: [
      "Blow out the vents with an air wand using normal safe practice.",
      "Run a few cycles and watch whether buildup comes back immediately or slowly over time.",
      "If allowed, reduce shoot pressure slightly and watch whether vent buildup improves.",
      "Compare vent behavior with core hardness, especially on the bottom or near vent areas.",
    ],
    likelyCauses: [
      "Sand too wet or binder condition too heavy, causing sand to stick in the vents",
      "Shoot pressure too high, forcing sand tightly into vent areas",
      "Weak curing or gas-related setting issue, allowing soft material to smear into vents",
      "Vent design, wear, damage, or old buildup restricting normal venting",
    ],
    whenCallMaint:
      "Call setup or maintenance if vents clog again immediately after cleaning, if pressure changes do not help, if sand condition feels off or inconsistent, or if curing/gas behavior appears unstable.",
    safetyNotes: [
      "Use normal safe cleaning practice when blowing out vents.",
      "Do not reach into unsafe areas or clean the box unless the machine is in the correct safe condition.",
    ],
    pending: [],
    relatedPages: [
      {
        label: "Core does not harden",
        route: "troubleshooting/core-does-not-harden",
      },
      {
        label: "Holes/marks near vents",
        route: "troubleshooting/vent-marks-holes",
      },
      { label: "Gassing parameters", route: "screens/gassing" },
      { label: "Core Reference", route: "loadbox/core-reference" },
    ],
  },
  {
    id: "cold-box-preheat",
    title: "Cold box start issues / preheating use",
    priority: "low",
    triggers: [
      "cold box start issue",
      "cold start box",
      "preheat corebox",
      "preheating corebox",
      "first run bad cold box",
      "startup curing issue",
      "initial curing problem",
    ],
    symptom:
      "Early runs on a cold corebox show poor curing or poor consistency until the box warms.",
    firstChecks: [
      "Check whether it happens mainly at start of shift or after long downtime.",
      "Check whether Pre-heating is available and operator-accessible on this machine.",
      "Check whether first-run quality improves after the box warms up.",
    ],
    nextSteps: [
      "If preheating is used on the floor, increase preheat time modestly if procedure allows.",
      "Document the preheat time used and whether it improved the first run.",
      "Escalate if you need a baseline preheat standard for the box or process.",
    ],
    likelyCauses: [
      "Corebox temperature too low at startup affecting early curing or consistency",
    ],
    whenCallMaint:
      "Call maintenance if the preheat setting exists but has no noticeable effect, or if startup issues persist beyond the initial warmup period.",
    safetyNotes: [],
    pending: [],
    relatedPages: [
      { label: "Gassing parameters", route: "screens/gassing" },
      { label: "Core Reference", route: "loadbox/core-reference" },
    ],
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
      "machine not starting",
      "startup fault machine",
      "machine fault startup",
    ],
    symptom: "The machine will not start when you try to run it.",
    firstChecks: [
      "Confirm the machine is in the correct operating mode.",
      "Confirm required guards, doors, and safety conditions are made.",
      "Check whether the machine is reset and ready to run.",
      "Check for any active warning or fault message on the screen.",
      "Check whether required green conditions are made before trying again.",
    ],
    nextSteps: [
      "Check the screen for the exact active message or fault.",
      "Confirm the machine is ready for startup and not waiting on a condition.",
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
  },  {
    id: "open-door-upper-section",
    title: "Open door on upper section",
    priority: "high",
    triggers: [
      "open door upper section",
      "upper door open",
      "door in handrails open",
      "upper section door open",
      "machine says door open upper",
    ],
    symptom:
      "The machine will not run or faults because an upper access or handrail-area door is open.",
    firstChecks: [
      "Check whether the upper section access door is fully closed.",
      "Check whether the door latch looks fully made.",
      "Check whether the message clears after the door is properly closed.",
      "Check whether another safety condition is also active.",
    ],
    nextSteps: [
      "Close the door fully and verify the machine reads it correctly.",
      "Do not keep retrying startup if the same door message returns immediately.",
      "Document which door is being called out if the machine still does not clear.",
    ],
    likelyCauses: [
      "Upper section door open",
      "Door not fully latched",
      "Door switch or safety read not making correctly",
    ],
    whenCallMaint:
      "Call maintenance if the door is closed but the machine still shows it open, or if the same door fault keeps returning.",
    safetyNotes: [
      "Do not bypass or defeat the door safety condition.",
    ],
    pending: [],
    relatedPages: [
      { label: "Machine Operation", route: "basics" },
      { label: "Control Screens", route: "screens" },
      { label: "Emergency & Safety", route: "safety" },
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
      "shoot plate dirty",
      "shoot blocked",
      "sand blockage shoot area",
      "sand build up shoot",
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
      "Check that the area is clear before restarting.",
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
      { label: "Corebox Setup", route: "loadbox" },
      { label: "Core Reference", route: "loadbox/core-reference" },
      { label: "Mixer Cleaning", route: "mixer/cleaning" },
    ],
  },
  {
    id: "sand-builds-under-shoot-head",
    title: "Sand builds under shoot head",
    priority: "medium",
    triggers: [
      "sand builds under shoot head",
      "sand under shoot head",
      "build up under shoot head",
      "shoot head buildup",
      "sand buildup under head",
    ],
    symptom:
      "Sand or binder mixture builds up under the shoot head instead of clearing normally.",
    firstChecks: [
      "Check whether the buildup happens every cycle or only sometimes.",
      "Check whether the shoot delay timing was recently changed.",
      "Check whether scoring or wear is visible in the affected area if safe.",
      "Check whether the buildup is tied to one specific box or job.",
    ],
    nextSteps: [
      "Document how quickly the buildup returns after cleaning.",
      "Check whether the issue started after a setting or hardware change.",
      "Escalate if the buildup is repeatable and affecting production quality.",
    ],
    likelyCauses: [
      "Shoot delay time too short",
      "Scored or worn area",
      "Slow-closing or sticking valve condition",
    ],
    whenCallMaint:
      "Call maintenance if buildup returns quickly, if wear or scoring is suspected, or if the condition keeps affecting the shooting process.",
    safetyNotes: [
      "Use the correct safe condition before cleaning around the shoot area.",
    ],
    pending: [],
    relatedPages: [
      { label: "Corebox Setup", route: "loadbox" },
      { label: "Troubleshooting", route: "troubleshooting" },
    ],
  },  {
    id: "core-not-shot-out",
    title: "Core is not shot out",
    priority: "medium",
    triggers: [
      "core not shot out",
      "wont shoot out",
      "won't shoot out",
      "did not shoot out",
      "shooting fault core",
      "core didnt come out",
      "core didn't come out",
    ],
    symptom:
      "The shooting step does not complete correctly and the core does not discharge or shoot out the way it should.",
    firstChecks: [
      "Check whether the machine completed the shooting step correctly.",
      "Check for sand bind or restriction in the shooting area.",
      "Check whether the issue is repeatable on the next cycle.",
      "Check whether the problem is a full discharge problem rather than just a weak fill.",
    ],
    nextSteps: [
      "If the main symptom is incomplete fill, use Shot not full as the main troubleshooting path.",
      "Check the shoot area for buildup if safe.",
      "Confirm the machine made the required shooting condition.",
      "Record whether the fault happens the same way each cycle.",
    ],
    likelyCauses: [
      "Shooting step not completing correctly",
      "Restriction or buildup in the shooting area",
      "Low or unstable shooting force",
      "Material movement problem",
    ],
    whenCallMaint:
      "Call maintenance if the core still does not shoot out correctly after checks, if repeated shooting failures continue, or if you suspect a blockage or machine-side failure.",
    safetyNotes: [],
    pending: [],
    relatedPages: [
      { label: "Core Reference", route: "loadbox/core-reference" },
      {
        label: "Shot not full",
        route: "troubleshooting/shot-not-full",
      },
      { label: "Corebox Setup", route: "loadbox" },
    ],
  },  {
    id: "operating-substance-escaping",
    title: "Operating substance escaping at blank",
    priority: "high",
    triggers: [
      "operating substance escaping",
      "substance escaping at blank",
      "leak at blank",
      "operating substance leak",
      "process substance leak",
    ],
    symptom:
      "Operating substance appears to be escaping from the process area instead of staying contained.",
    firstChecks: [
      "Confirm the area is safe before investigating further.",
      "Check whether the issue is visible every cycle or only occasionally.",
      "Check whether extraction or exhaust seems to be functioning normally.",
      "Document exactly where the escaping substance is seen or smelled.",
    ],
    nextSteps: [
      "Stop and escalate if the leak or escape condition appears active.",
      "Do not keep running if exposure or leak risk is not understood.",
      "Capture whether the condition is tied to one station or one phase of the cycle.",
    ],
    likelyCauses: [
      "Extraction system not working",
      "Gassing hose defect",
      "Leak in process-side piping or fittings",
    ],
    whenCallMaint:
      "Call maintenance immediately if operating substance is escaping, if extraction seems not to function, or if exposure risk is present.",
    safetyNotes: [
      "Treat escaping operating substance as a safety issue first.",
      "Follow site PPE, ventilation, and exposure procedures.",
    ],
    pending: [],
    relatedPages: [
      { label: "Emergency & Safety", route: "safety" },
      { label: "Gassing parameters", route: "screens/gassing" },
      { label: "Troubleshooting", route: "troubleshooting" },
    ],
  },  {
    id: "dosing-pump-not-running",
    entryType: "v2",
    category: "Gassing / Hardening",
    title: "Dosing pump not running",
    priority: "high",
    allMaintenance: true,
    triggers: [
      "dosing pump not running",
      "pump not running hardening",
      "dosing pump fault",
      "hardening pump fault",
      "dosing fault pump",
      "catalyst pump not running",
      "dosing pump stopped",
    ],
    symptom: "The dosing pump isn't running.",
    checks: [
      {
        cause: "Shut-off valve closed",
        tag: "maintenance",
        forMaintenance: {
          system: "Catalyst dosing — supply shut-off valve",
          check: "Check whether the shut-off valve on the dosing pump's supply line is closed. Open it if so — simplest possible cause, check this first.",
          likelyPart: "None (just open the valve), unless the valve itself is faulty",
          note: "Easiest cause first: a closed supply shut-off valve starves the pump. Check this before anything else.",
        },
      },
      {
        cause: "Dosing pump defective",
        tag: "maintenance",
        forMaintenance: {
          system: "Catalyst dosing pump",
          check: "If the supply valve is open and there's still no dosing, test the pump for power and function. Check pneumatic supply to the pump (if air-driven) and that it's getting its run signal.",
          likelyPart: "Dosing pump (repair or replace)",
          note: "With supply confirmed open, the pump itself isn't running — check its air/power supply and run signal before condemning it.",
        },
      },
      {
        cause: "Leakage in pneumatic lines",
        tag: "maintenance",
        forMaintenance: {
          system: "Pneumatic lines feeding the dosing pump",
          check: "If the pump is air-driven and weak/not running, check the pneumatic lines to it for leaks and loose fittings.",
          likelyPart: "Pneumatic line / fitting",
          note: "An air-driven dosing pump won't run right if its air lines are leaking. Check fittings along the run.",
        },
      },
    ],
  },  {
    id: "temperature-limiter-tripped",
    title: "Temperature limiter tripped",
    priority: "high",
    triggers: [
      "temperature limiter tripped",
      "temp limiter tripped",
      "overtemp limiter",
      "temperature limiter fault",
      "flow heater limiter tripped",
    ],
    symptom:
      "The machine shows a temperature limiter or overtemperature protection condition.",
    firstChecks: [
      "Check the exact message on the screen.",
      "Check whether the issue is tied to the flow heater or heater function.",
      "Check whether overheating symptoms were present before the trip.",
      "Document whether the trip happened once or repeats on restart.",
    ],
    nextSteps: [
      "Do not keep restarting the machine if the limiter trips again immediately.",
      "Record the exact message and the part of the cycle where it happened.",
      "Escalate if overtemperature protection remains active.",
    ],
    likelyCauses: [
      "Temperature limiter tripped",
      "Overtemperature condition",
      "Heater-related fault condition",
    ],
    whenCallMaint:
      "Call maintenance if the temperature limiter trips, if the message stays active, or if heater-related faults repeat.",
    safetyNotes: [
      "Hot surfaces and heater areas can be hazardous.",
      "Do not bypass overtemperature protection.",
    ],
    pending: [],
    relatedPages: [
      { label: "Emergency & Safety", route: "safety" },
      { label: "Troubleshooting", route: "troubleshooting" },
    ],
  },  {
    id: "electrical-fault",
    title: "Electrical fault / control power issue",
    priority: "high",
    triggers: [
      "electrical fault",
      "control power issue",
      "cpu fault",
      "24v fault",
      "motor protection fault",
      "limit switch fault",
      "electrical issue machine",
    ],
    symptom:
      "The machine shows an electrical or control fault, or a control power-related function will not run.",
    firstChecks: [
      "Check the exact fault text on the screen.",
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
      "Electrical or control fault is active",
      "Control supply issue",
      "Motor protection or limit-switch-related issue",
      "CPU or control-side fault",
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
  },  {
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
      "motion not smooth",
    ],
    symptom:
      "One machine motion is not smooth and appears jerky, unstable, or oscillating.",
    firstChecks: [
      "Check which motion is affected and whether it happens every cycle.",
      "Check whether the issue started after a restart, setup, or recovery action.",
      "Check whether another fault message is active at the same time.",
      "Check whether the motion improves, stays the same, or gets worse on the next safe attempt.",
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
      "oil foaming",
      "hydraulic oil foam",
      "foam in oil",
      "oil condition issue",
      "oil looks bad",
      "foaming hydraulic oil",
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
  },  {
    id: "return-flow-filter-soiled",
    title: "Return flow filter soiled",
    priority: "medium",
    triggers: [
      "return flow filter soiled",
      "return filter dirty",
      "hydraulic return filter",
      "return flow filter dirty",
      "hydraulic filter dirty",
    ],
    symptom:
      "The machine shows a return-flow filter condition or hydraulic filter contamination issue.",
    firstChecks: [
      "Check the exact message on the screen if one is shown.",
      "Check whether another hydraulic warning is active.",
      "Check whether machine performance also changed along with the filter message.",
      "Document when the message appears during the shift.",
    ],
    nextSteps: [
      "Do not ignore a repeating hydraulic filter message.",
      "Record the exact message and whether the condition is constant or intermittent.",
      "Escalate before hydraulic performance gets worse.",
    ],
    likelyCauses: [
      "Return flow filter soiled",
      "Hydraulic contamination condition",
      "Related hydraulic maintenance condition",
    ],
    whenCallMaint:
      "Call maintenance if the return-flow filter message is active, repeats, or is paired with other hydraulic symptoms.",
    safetyNotes: [
      "Do not open or service hydraulic components unless authorized.",
    ],
    pending: [],
    relatedPages: [
      { label: "Troubleshooting", route: "troubleshooting" },
      { label: "Control Screens", route: "screens" },
    ],
  },
  {
    id: "oil-air-heat-exchanger-dirty",
    title: "Oil-air heat exchanger dirty",
    priority: "medium",
    triggers: [
      "oil air heat exchanger dirty",
      "heat exchanger dirty",
      "hydraulic cooler dirty",
      "oil cooler dirty",
      "cooler clogged hydraulic",
    ],
    symptom:
      "The machine shows overheating or oil temperature problems tied to poor cooling.",
    firstChecks: [
      "Check whether the machine is also showing high oil temperature.",
      "Check whether the issue gets worse as runtime increases.",
      "Check whether airflow or cooling condition appears abnormal if visible.",
      "Document whether the machine recently started running hotter than normal.",
    ],
    nextSteps: [
      "Treat repeating overheating as a real machine condition, not a nuisance message.",
      "Record the exact message and related temperature behavior.",
      "Escalate if the issue repeats or temperature keeps climbing.",
    ],
    likelyCauses: [
      "Oil-air heat exchanger dirty",
      "Restricted cooling airflow",
      "Hydraulic cooling condition degraded",
    ],
    whenCallMaint:
      "Call maintenance if overheating repeats, if oil temperature remains high, or if cooling-related faults stay active.",
    safetyNotes: [
      "Do not continue pushing production if the hydraulic system is overheating.",
    ],
    pending: [],
    relatedPages: [
      { label: "Troubleshooting", route: "troubleshooting" },
      { label: "Control Screens", route: "screens" },
    ],
  },
  {
    id: "mixer-wont-start",
    title: "Mixer won’t start",
    priority: "high",
    triggers: [
      "mixer wont start",
      "mixer won't start",
      "sand mixer wont start",
      "sand mixer won't start",
      "mixer not starting",
      "mixer wont run",
      "mixer won't run",
      "mixer not running",
    ],
    symptom:
      "The mixer will not start or will not go into normal running when the operator tries to run it.",
    firstChecks: [
      "Confirm the mixer has power and the start screen is up.",
      "Confirm CONTROL ON is selected.",
      "Confirm any required ACKNOWLEDGE EMERGENCY STOP or ACKNOWLEDGE CABIN DOORS step was completed.",
      "Check whether the mixer is in Auto or Manual as required for the action you are trying to take.",
      "Check whether an active message or fault is blocking the mixer from starting.",
    ],
    nextSteps: [
      "Check the overview screen to see whether the mixer is in the correct ready condition.",
      "If the mixer is not in start position, use the Mixer Checks page to return it to ready state.",
      "If a message is active, capture the exact message before retrying.",
      "Retry only if the mixer condition is understood and safe.",
    ],
    likelyCauses: [
      "Mixer not fully powered or not acknowledged ready",
      "Active message or fault blocking startup",
      "Mixer not in the required ready or start position",
      "Wrong mode selected for the action being attempted",
    ],
    whenCallMaint:
      "Call maintenance if the mixer still will not start after basic checks, if a fault remains active, or if the mixer will not return to the required ready state.",
    safetyNotes: [
      "Do not bypass safety conditions or guess through repeated retries.",
    ],
    pending: [],
    relatedPages: [
      { label: "Mixer Settings", route: "mixer/settings" },
      { label: "Mixer Checks", route: "mixer/checks" },
      { label: "Mixer Overview", route: "mixer/overview" },
    ],
  },
  {
    id: "mixer-not-in-start-position",
    title: "Mixer not in start position",
    priority: "high",
    triggers: [
      "mixer not in start position",
      "start position not made mixer",
      "mixer wont go ready",
      "mixer won't go ready",
      "mixer not ready",
      "start position wont make mixer",
      "start position won't make mixer",
    ],
    symptom:
      "The mixer will not return to the required ready condition or the start-position state does not make.",
    firstChecks: [
      "Put the mixer in Manual if the procedure requires manual return to start position.",
      "Open the Manual screen and confirm the correct function is selected.",
      "Check whether the sand gate / emptying slider is fully closed.",
      "Check whether required binder level is made.",
      "Check the overview screen to see which required condition is still not made.",
    ],
    nextSteps: [
      "Use the normal start-position steps from the Mixer Checks page.",
      "Return the mixer to Auto only after the required conditions are confirmed.",
      "If one condition stays unmade, document exactly which one is not going green.",
      "Do not guess the ready condition from memory.",
    ],
    likelyCauses: [
      "Emptying slider not fully closed",
      "Required binder level not reached",
      "One required condition still not made",
      "A component did not complete its move back to ready position",
    ],
    whenCallMaint:
      "Call maintenance if the mixer will not return to start position, if the same condition stays unmade, or if the ready state cannot be confirmed.",
    safetyNotes: [
      "Do not treat blinking as complete. Use confirmed ready status before moving on.",
    ],
    pending: [],
    relatedPages: [
      { label: "Mixer Checks", route: "mixer/checks" },
      { label: "Mixer Settings", route: "mixer/settings" },
    ],
  },
  {
    id: "sand-chute-wont-move",
    title: "Sand chute won’t move",
    priority: "medium",
    triggers: [
      "sand chute wont move",
      "sand chute won't move",
      "chute wont move",
      "chute won't move",
      "sand slide wont move",
      "sand slide won't move",
      "test drop wont move",
      "machine position wont move chute",
    ],
    symptom:
      "The sand chute / sand slide does not move when commanded between Machine and Test Drop or other required positions.",
    firstChecks: [
      "Confirm the mixer is in the correct mode for manual movement if manual control is being used.",
      "Confirm the correct function is selected on the Manual screen.",
      "Hold the command long enough to see whether the move is still blinking or never starts.",
      "Check whether another required condition is blocking the move.",
      "Check for an active message or fault on the mixer screen.",
    ],
    nextSteps: [
      "Retry only after confirming the correct function and mode are selected.",
      "Watch whether the indicator blinks but never turns green, or never responds at all.",
      "Document whether the chute is stuck in Machine, Test Drop, or another position.",
      "Escalate if the chute will not complete the move after the correct manual attempt.",
    ],
    likelyCauses: [
      "Wrong mode or wrong function selected",
      "Required condition not made before the move",
      "Movement starts but does not complete position",
      "Mechanical or pneumatic problem affecting chute movement",
    ],
    whenCallMaint:
      "Call maintenance if the sand chute still will not move after the correct checks, if the same move keeps failing, or if the chute will not confirm position.",
    safetyNotes: ["Keep clear of moving areas and do not force the chute path."],
    pending: [],
    relatedPages: [
      { label: "Mixer Settings", route: "mixer/settings" },
      { label: "Mixer Cleaning", route: "mixer/cleaning" },
      { label: "Mixer Checks", route: "mixer/checks" },
    ],
  },
  {
    id: "sand-gate-wont-close",
    title: "Sand gate won’t close",
    priority: "high",
    triggers: [
      "sand gate wont close",
      "sand gate won't close",
      "gate wont close mixer",
      "gate won't close mixer",
      "emptying slider wont close",
      "emptying slider won't close",
      "slider wont close mixer",
      "slider won't close mixer",
    ],
    symptom:
      "The sand gate / emptying slider will not close correctly when returning the mixer to start position.",
    firstChecks: [
      "Put the mixer in Manual if required.",
      "Open the Manual screen and select Sand Gate.",
      "Hold START POSITION and watch whether the move starts, blinks, or confirms.",
      "Check whether the gate appears partly open or fully blocked from making position.",
      "Check whether an active message or fault is present.",
    ],
    nextSteps: [
      "Use the normal start-position return steps from the Mixer Checks page.",
      "Confirm whether the gate will move at all or moves without confirming closed position.",
      "Document whether the issue happens only on return to ready state or every time.",
      "Do not treat the mixer as ready until the gate is confirmed closed.",
    ],
    likelyCauses: [
      "Gate / emptying slider not completing travel",
      "Required ready condition not being made",
      "Movement issue in the sand gate function",
      "Mechanical or pneumatic problem affecting closure",
    ],
    whenCallMaint:
      "Call maintenance if the sand gate will not close, if start position cannot be made, or if the same closure problem repeats.",
    safetyNotes: [
      "Do not continue production if the mixer cannot return to the correct ready state.",
    ],
    pending: [],
    relatedPages: [
      { label: "Mixer Checks", route: "mixer/checks" },
      { label: "Mixer Settings", route: "mixer/settings" },
    ],
  },
  {
    id: "mixer-motor-wont-turn-on",
    title: "Mixer motor won’t turn on",
    priority: "high",
    triggers: [
      "mixer motor wont turn on",
      "mixer motor won't turn on",
      "mixer motor not running",
      "mixer motor wont start",
      "mixer motor won't start",
      "motor wont run mixer",
      "motor won't run mixer",
      "mixer not mixing",
    ],
    symptom:
      "The mixer motor does not start when commanded and the mixer does not begin the expected mixing action.",
    firstChecks: [
      "Confirm the mixer is powered and in the correct mode for the action being attempted.",
      "If using Manual, confirm Mixer Motor is the selected function.",
      "Hold the command and check whether the move never starts, blinks, or faults out.",
      "Check the mixer screen for an active message tied to motor or running condition.",
      "Check whether another required condition is not made first.",
    ],
    nextSteps: [
      "Retry only after confirming the correct mode and function selection.",
      "Document whether the issue happens in Auto, Manual, or both.",
      "Capture the exact message if the motor command is blocked by a fault.",
      "Stop repeated retries if the motor still does not respond.",
    ],
    likelyCauses: [
      "Wrong mode or function selected",
      "Motor command blocked by another condition",
      "Active fault preventing motor run",
      "Motor or control-side issue affecting mixer run",
    ],
    whenCallMaint:
      "Call maintenance if the mixer motor will not turn on after basic checks, if the same message repeats, or if the mixer cannot run normally.",
    safetyNotes: [
      "Do not keep commanding the motor repeatedly if the condition is not understood.",
    ],
    pending: [],
    relatedPages: [
      { label: "Mixer Settings", route: "mixer/settings" },
      { label: "Mixer Checks", route: "mixer/checks" },
      { label: "Mixer Overview", route: "mixer/overview" },
    ],
  },
  {
    id: "binder-level-not-ready",
    title: "Binder level not ready",
    priority: "medium",
    triggers: [
      "binder level not ready",
      "binder not ready mixer",
      "binder level low mixer",
      "binder not made mixer",
      "binder wont make mixer",
      "binder won't make mixer",
      "binder issue mixer",
    ],
    symptom:
      "The mixer does not show the required binder-ready condition or binder level does not make when returning to ready state.",
    firstChecks: [
      "Check whether the required binder level is shown as made on the mixer screen.",
      "Check whether the issue is affecting one binder side or the whole mixer ready state.",
      "Check whether the binder function responds in Manual if procedure allows.",
      "Check for an active message tied to binder function or ready status.",
    ],
    nextSteps: [
      "Use the normal start-position / ready-state checks from the Mixer Checks page.",
      "Document which binder-ready condition is not making.",
      "If the condition repeats, capture the exact message or screen state.",
      "Do not treat the mixer as ready until the binder condition is confirmed.",
    ],
    likelyCauses: [
      "Required binder-ready condition not made",
      "Binder function not completing as expected",
      "Ready-state check blocked by binder condition",
      "Control-side or process-side binder issue",
    ],
    whenCallMaint:
      "Call maintenance if the binder-ready condition still will not make after basic checks, or if the mixer cannot return to ready state because of the binder condition.",
    safetyNotes: [
      "Do not continue production if the mixer ready state is not confirmed.",
    ],
    pending: [],
    relatedPages: [
      { label: "Mixer Checks", route: "mixer/checks" },
      { label: "Mixer Settings", route: "mixer/settings" },
    ],
  },
  {
    id: "binder-not-pulling-into-system",
    title: "Binder not pulling into system",
    priority: "high",
    triggers: [
      "binder not pulling",
      "binder not pulling into system",
      "binder not coming in",
      "binder not sucking in",
      "binder wont pull",
      "binder won't pull",
      "binder line not filling",
      "no binder to mixer",
      "binder not feeding",
    ],
    symptom:
      "The mixer acts like binder is not coming into the system or the binder line does not fill the way it should.",
    firstChecks: [
      "Check whether binder supply is available at the source container.",
      "Check whether the binder level is low or empty.",
      "Check for a kinked binder line.",
      "Check for a leaking binder line or fitting.",
      "Check whether any visible shut-off valve is closed.",
    ],
    nextSteps: [
      "Trace the visible binder path and check for restriction or leakage.",
      "Check whether the binder seems too cold or too thick to move normally.",
      "If allowed, compare the current condition to the last known good binder feed condition.",
      "Document whether the issue affects one binder side or the full mixer function.",
    ],
    likelyCauses: [
      "Binder supply empty or too low",
      "Kinked or restricted binder line",
      "Leaking binder line or fitting",
      "Closed shut-off valve",
      "Binder too cold or too thick to flow normally",
      "Pump-side binder feed problem",
    ],
    whenCallMaint:
      "Call maintenance if binder still will not pull into the system after supply, line, and valve checks, or if a damaged line, leak, or repeated feed failure is found.",
    safetyNotes: [
      "Use proper PPE when checking binder-related areas.",
      "Do not disconnect lines under pressure.",
    ],
    pending: [],
    relatedPages: [
      { label: "Mixer Overview", route: "mixer/overview" },
      { label: "Mixer Checks", route: "mixer/checks" },
      { label: "Mixer Settings", route: "mixer/settings" },
    ],
  },
  {
    id: "binder-pump-runs-no-supply",
    title: "Binder pump runs but no binder supply",
    priority: "high",
    triggers: [
      "binder pump runs no supply",
      "pump runs no binder",
      "binder pump runs but no supply",
      "binder pump on but not feeding",
      "pump working no binder",
      "binder not supplying",
      "binder pump no flow",
    ],
    symptom:
      "The binder pump appears to run, but binder still does not supply where it needs to go.",
    firstChecks: [
      "Check whether binder is actually available upstream.",
      "Check whether a shut-off valve is closed.",
      "Check for visible leaks in the binder line.",
      "Check for a blocked, pinched, or restricted binder line.",
      "Check whether the binder appears too cold or thick to move normally.",
    ],
    nextSteps: [
      "Verify actual binder movement, not just pump sound.",
      "Compare current binder feed behavior to a known normal condition.",
      "Document whether the problem happens every time or only sometimes.",
      "Stop repeated retries if the pump keeps running without delivery.",
    ],
    likelyCauses: [
      "Closed shut-off valve",
      "Blocked or pinched binder line",
      "Leaking binder line",
      "Pump output problem",
      "Binder too cold or too thick to flow",
    ],
    whenCallMaint:
      "Call maintenance if the pump runs but binder still does not supply after line, valve, and source checks, or if the same condition repeats.",
    safetyNotes: [
      "Do not crack lines loose to test flow.",
      "Treat binder leaks as both slip and process hazards.",
    ],
    pending: [],
    relatedPages: [
      { label: "Mixer Overview", route: "mixer/overview" },
      { label: "Mixer Checks", route: "mixer/checks" },
      { label: "Mixer Settings", route: "mixer/settings" },
    ],
  },
  {
    id: "streaks-in-mixing-chamber",
    title: "Streaks in mixing chamber",
    priority: "medium",
    triggers: [
      "streaks in mixing chamber",
      "mix streaks",
      "streaking in mixer",
      "binder streaks",
      "uneven mix in chamber",
      "mix not even",
      "streaks in sand mix",
    ],
    symptom:
      "The sand mix looks uneven and streaks are visible in the mixing chamber.",
    firstChecks: [
      "Check whether the streaking happens every batch or only sometimes.",
      "Check for visible dripping or uneven binder entry.",
      "Check whether the issue started after a pressure or setup change.",
      "Compare the current mix pattern to a known normal batch.",
    ],
    nextSteps: [
      "Document whether the streaking is light, heavy, or tied to one side.",
      "Check whether binder appears to be entering too fast.",
      "Report whether the condition started after maintenance, setup, or line work.",
      "Escalate if the chamber keeps showing uneven mix pattern.",
    ],
    likelyCauses: [
      "Binder dosing too fast",
      "Injection pressure too high",
      "Injection line laid incorrectly",
      "Uneven binder entry into the chamber",
    ],
    whenCallMaint:
      "Call maintenance or setup if streaking continues, if binder entry looks uneven, or if pressure or line arrangement may need correction.",
    safetyNotes: [
      "Keep clear of moving mixer areas while observing chamber behavior.",
    ],
    pending: [],
    relatedPages: [
      { label: "Mixer Overview", route: "mixer/overview" },
      { label: "Mixer Settings", route: "mixer/settings" },
    ],
  },
  {
    id: "mixing-sand-too-cold",
    title: "Mixing sand too cold",
    priority: "medium",
    triggers: [
      "sand too cold",
      "mixing sand too cold",
      "cold sand in mixer",
      "mixer sand cold",
      "cold sand issue",
      "sand temperature low",
    ],
    symptom:
      "Sand condition appears too cold and mix behavior changes from normal.",
    firstChecks: [
      "Check whether the issue started during colder conditions or after a source change.",
      "Check where the sand is feeding from.",
      "Check whether heating-related function appears normal if visible to the operator.",
      "Compare current sand condition to the last known good condition.",
    ],
    nextSteps: [
      "Document when the condition appears during the shift.",
      "Report whether quality problems also increased at the same time.",
      "Check whether the issue stays constant or improves as the system runs.",
      "Escalate if cold-sand symptoms continue affecting production.",
    ],
    likelyCauses: [
      "Sand coming from a colder source than normal",
      "Heating-related issue",
      "Material temperature out of normal range",
    ],
    whenCallMaint:
      "Call maintenance if sand temperature-related problems persist, if heating appears not to function, or if the issue keeps affecting quality.",
    safetyNotes: [],
    pending: [],
    relatedPages: [
      { label: "Mixer Overview", route: "mixer/overview" },
      { label: "Mixer Checks", route: "mixer/checks" },
    ],
  },
  {
    id: "additive-not-mixing-correctly",
    title: "Additive not mixing correctly",
    priority: "medium",
    triggers: [
      "additive not mixing",
      "additive not mixed",
      "additive mixing issue",
      "additive blend problem",
      "mix time too short",
      "uneven additive",
    ],
    symptom: "The additive does not seem evenly mixed into the sand blend.",
    firstChecks: [
      "Check whether the issue happens every batch or only sometimes.",
      "Check whether the correct recipe or job condition is active.",
      "Compare current cycle behavior to a known normal cycle.",
      "Check whether the mix appears to stop too soon.",
    ],
    nextSteps: [
      "Document whether the problem started after a change or restart.",
      "Report whether the issue affects quality consistently or only occasionally.",
      "Check whether the same job previously ran normally.",
      "Escalate if additive blend quality continues to be inconsistent.",
    ],
    likelyCauses: [
      "Mixing time too short",
      "Recipe or setup mismatch",
      "Process timing issue",
      "Uneven additive blending condition",
    ],
    whenCallMaint:
      "Call maintenance or setup if additive still does not mix correctly after recipe and cycle checks, or if the same quality problem repeats.",
    safetyNotes: [
      "Do not change protected process settings unless that is part of your role.",
    ],
    pending: [],
    relatedPages: [
      { label: "Mixer Settings", route: "mixer/settings" },
      { label: "Mixer Overview", route: "mixer/overview" },
    ],
  },
  {
    id: "mixer-motor-stops-during-cycle",
    title: "Mixer motor stops during cycle",
    priority: "high",
    triggers: [
      "mixer motor stops during cycle",
      "mixer stops during cycle",
      "motor stops mid cycle",
      "mixer faults during mix",
      "mixer stops partway",
      "motor cuts out during mixing",
    ],
    symptom:
      "The mixer motor starts but stops during the cycle before the mixing step should be complete.",
    firstChecks: [
      "Check whether the stop happens at the same point every time.",
      "Check for an active message or fault on the mixer screen.",
      "Check for signs of blockage or buildup affecting material movement.",
      "Check whether the issue started after a change in material or cleanup condition.",
    ],
    nextSteps: [
      "Document the exact point in the cycle where the motor stops.",
      "Check whether the outlet or flow path appears blocked if safe to observe.",
      "Stop repeated retries if the same stop keeps happening.",
      "Escalate with the message shown and the cycle point where the stop occurs.",
    ],
    likelyCauses: [
      "Blocked outlet or material path",
      "Material buildup affecting the cycle",
      "Probe or condition not clearing correctly",
      "Motor or control-side stop condition",
    ],
    whenCallMaint:
      "Call maintenance if the mixer motor keeps stopping during the cycle, if blockage cannot be safely cleared, or if the same stop repeats.",
    safetyNotes: [
      "Do not reach into hazard areas unless the machine is in the correct safe condition.",
    ],
    pending: [],
    relatedPages: [
      { label: "Mixer Checks", route: "mixer/checks" },
      { label: "Mixer Cleaning", route: "mixer/cleaning" },
      { label: "Mixer Overview", route: "mixer/overview" },
    ],
  },
  {
    id: "mixer-motor-safety-switch-tripped",
    title: "Mixer motor safety switch tripped",
    priority: "high",
    triggers: [
      "mixer motor safety switch",
      "motor safety switch tripped",
      "motor protection tripped mixer",
      "mixer overload",
      "mixer motor trip",
      "motor protection mixer",
    ],
    symptom:
      "The mixer motor safety or protection condition trips and the mixer will not continue normally.",
    firstChecks: [
      "Check whether hardened material is left in the mixer.",
      "Check whether the problem started after a material change.",
      "Check whether the same trip happens immediately on retry.",
      "Check for an active message tied to motor protection or overload.",
    ],
    nextSteps: [
      "Document whether the trip happened during startup or during active mixing.",
      "Report whether the issue followed a sand, binder, or media change.",
      "Stop repeated retries if the same trip returns immediately.",
      "Escalate with the exact message and what was in the mixer at the time.",
    ],
    likelyCauses: [
      "Mixer started in hardened material",
      "Material resistance too high in the mixer",
      "Sand or media change affecting load condition",
      "Motor protection or overload condition",
    ],
    whenCallMaint:
      "Call maintenance if the safety switch trips again, if hardened material is suspected in the mixer, or if the mixer cannot return to normal operation.",
    safetyNotes: [
      "Do not keep resetting motor protection without finding the cause.",
    ],
    pending: [],
    relatedPages: [
      { label: "Mixer Cleaning", route: "mixer/cleaning" },
      { label: "Mixer Overview", route: "mixer/overview" },
      { label: "Mixer Checks", route: "mixer/checks" },
    ],
  },
  {
    id: "mixer-keeps-blinking-not-green",
    title: "Mixer keeps blinking / won’t turn green",
    priority: "high",
    triggers: [
      "mixer keeps blinking",
      "wont turn green mixer",
      "won't turn green mixer",
      "not going green mixer",
      "blinking not green mixer",
      "mixer light blinking",
      "position not making mixer",
    ],
    symptom:
      "A mixer function starts or appears active, but the confirmation never turns green and the move does not fully make.",
    firstChecks: [
      "Check which exact function is still blinking.",
      "Confirm the correct function was selected before the move.",
      "Check whether the movement is partly complete or not moving at all.",
      "Check whether another required condition is blocking the final confirmation.",
      "Check the mixer screen for an active message or fault.",
    ],
    nextSteps: [
      "Do not treat blinking as complete.",
      "Document which function is blinking and what step you were trying to complete.",
      "Use the related Mixer Checks or Mixer Settings page if this is tied to ready state or manual movement.",
      "Escalate if the function never confirms position after the correct steps.",
    ],
    likelyCauses: [
      "Move started but did not complete travel",
      "Required condition not made for final confirmation",
      "Wrong function, wrong mode, or blocked sequence condition",
      "Mechanical or control-side issue affecting position confirmation",
    ],
    whenCallMaint:
      "Call maintenance if the same function keeps blinking and never confirms, if position cannot be made, or if the mixer cannot return to ready condition.",
    safetyNotes: [
      "Use confirmed green status before moving on. Do not guess through repeated retries.",
    ],
    pending: [],
    relatedPages: [
      { label: "Mixer Checks", route: "mixer/checks" },
      { label: "Mixer Settings", route: "mixer/settings" },
      { label: "Mixer Cleaning", route: "mixer/cleaning" },
    ],
  },
  {
    id: "mixer-fault-message-blocking-run",
    title: "Mixer fault / message blocking run",
    priority: "high",
    triggers: [
      "mixer fault",
      "mixer message blocking run",
      "mixer screen fault",
      "mixer error message",
      "mixer won't run fault",
      "mixer wont run fault",
      "fault on mixer screen",
    ],
    symptom:
      "A mixer message or fault stays active and prevents normal running or return to ready state.",
    firstChecks: [
      "Capture the exact mixer message or fault text.",
      "Check whether the message is tied to one function, ready state, or startup condition.",
      "Check whether the issue appeared during Auto, Manual, or return to start position.",
      "Check whether another mixer condition is clearly not made on the overview screen.",
      "Retry only if the condition is understood and safe.",
    ],
    nextSteps: [
      "Use the Mixer Settings and Mixer Checks pages to confirm mode and ready-state conditions.",
      "Document the exact fault text and what step you were trying to complete.",
      "If the same message returns immediately, stop repeated retries.",
      "Escalate with the fault text and screen condition.",
    ],
    likelyCauses: [
      "Active mixer fault blocking normal run",
      "Required ready-state condition not made",
      "Function-specific condition preventing startup or run",
      "Control-side issue or repeated mixer fault condition",
    ],
    whenCallMaint:
      "Call maintenance if the message remains active, returns immediately, or blocks normal running after basic checks.",
    safetyNotes: [
      "Do not guess through repeated restarts when an active mixer fault is present.",
    ],
    pending: [],
    relatedPages: [
      { label: "Mixer Settings", route: "mixer/settings" },
      { label: "Mixer Checks", route: "mixer/checks" },
      { label: "Mixer Overview", route: "mixer/overview" },
    ],
  },

  {
    id: "clamp-wont-turn-green-search",
    entryType: "recovery-bridge",
    title: "Clamp won’t turn green",
    priority: "high",
    triggers: [
      "clamp wont turn green",
      "clamp won't turn green",
      "clamp not green",
      "wont clamp",
      "won't clamp",
      "clamp not making",
      "clamp issue load",
    ],
    symptom:
      "The clamp step does not complete and the required green confirmation does not make.",
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
      "Debris or buildup affecting clamp or seating",
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
    entryType: "recovery-bridge",
    title: "Carriage won’t move",
    priority: "high",
    triggers: [
      "carriage wont move",
      "carriage won't move",
      "gas carriage wont move",
      "gas carriage won't move",
      "carriage stuck",
      "carriage issue load",
    ],
    symptom: "The carriage does not move when it should during load or recovery.",
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
    safetyNotes: ["Keep clear of moving areas and do not force the carriage path."],
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
    entryType: "recovery-bridge",
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
    entryType: "recovery-bridge",
    title: "Corebox won’t lock in / lock out",
    priority: "high",
    triggers: [
      "corebox wont lock in",
      "corebox won't lock in",
      "corebox wont lock out",
      "corebox won't lock out",
      "lock in issue corebox",
      "lock out issue corebox",
      "box wont lock",
      "box won't lock",
    ],
    symptom:
      "The corebox will not complete the lock-in or lock-out step correctly.",
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
      { label: "Auto Load Recovery (Manual)", route: "loadbox/auto-recovery" },
      { label: "Corebox Setup", route: "loadbox" },
      { label: "Corebox Removal Safety", route: "safety/corebox-removal-safety" },
    ],
  },
  {
    id: "robot-not-removing-core",
    title: "Robot removal problem",
    priority: "low",
    triggers: [
      "robot not removing core",
      "robot wont remove core",
      "robot won't remove core",
      "robot not picking core",
      "core not removed by robot",
      "robot removal problem",
      "robot pickoff issue",
    ],
    symptom:
      "The robot does not remove the core correctly or the removal step does not complete the way it should.",
    firstChecks: [
      "Check whether the robot problem happens every cycle or only once.",
      "Check whether the machine completed the related cycle step before the robot move.",
      "Check whether the core is positioned normally for pickup or removal.",
      "Check for an active message tied to robot or cycle interruption.",
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
      "Related robot, camera, or pickoff issue",
    ],
    whenCallMaint:
      "Call maintenance or setup if the robot repeatedly fails to remove the core, or if the machine cannot continue normal production.",
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
      "Check whether the machine and core position look normal before the camera or pickoff step.",
      "Check for an active message tied to robot, pickoff, or camera operation.",
      "Check whether the issue started after a restart, setup, or changeover.",
    ],
    nextSteps: [
      "Record the exact cycle point where the pickoff or camera problem happens.",
      "Do not keep retrying if the same function fails the same way each cycle.",
      "Escalate with the message shown and what the robot or camera did or did not do.",
    ],
    likelyCauses: [
      "Camera or pickoff condition not being made correctly",
      "Robot-related process interruption",
      "Cycle state not normal before pickoff or camera action",
    ],
    whenCallMaint:
      "Call maintenance or setup if the camera or pickoff issue repeats or stops normal production.",
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
    id: "vacuum-system-soiled-or-leaking",
    title: "Vacuum system soiled or leaking",
    priority: "high",
    triggers: [
      "vacuum system soiled",
      "vacuum system leaking",
      "vacuum system dirty",
      "leak in vacuum system",
      "vacuum leak machine side",
    ],
    symptom:
      "The machine shows a vacuum system problem tied to contamination or leakage rather than just a general low-vacuum symptom.",
    firstChecks: [
      "Check whether vacuum loss is steady, sudden, or tied to one step.",
      "Check for visible contamination in accessible vacuum-related areas.",
      "Check for obvious hose, fitting, or seal leakage if safe.",
      "Check whether the issue repeats at the same machine step.",
    ],
    nextSteps: [
      "If the main symptom is low or falling vacuum, use the vacuum troubleshooting path first.",
      "Document whether the issue looks like a leak problem, contamination problem, or both.",
      "Escalate if the machine-side vacuum condition keeps returning.",
    ],
    likelyCauses: [
      "Leak in vacuum system",
      "Vacuum system contamination",
      "Dirty vacuum-side components",
      "Seal or fitting issue",
    ],
    whenCallMaint:
      "Call maintenance if the vacuum system appears contaminated, if leakage is suspected, or if vacuum problems keep returning after basic checks.",
    safetyNotes: [
      "Do not bypass vacuum-related interlocks or safety conditions.",
    ],
    pending: [],
    relatedPages: [
      {
        label: "Troubleshooting — Vacuum drops",
        route: "troubleshooting/vacuum-drops",
      },
      { label: "Control Screens", route: "screens" },
    ],
  },
  // ── v2 entries — Laempe LFB25 manual fault tables (sections 10.6–10.9) ──

  {
    id: "shoot-not-shot-out",
    entryType: "v2",
    category: "Shooting",
    title: "Core box empty or partially filled after shot",
    priority: "high",
    triggers: [
      "core not shot out",
      "core box empty after shot",
      "core not filled",
      "shot not filling core",
      "incomplete fill",
      "shooting filter dirty",
      "vent nozzles dirty",
    ],
    symptom: "The core box is empty or only partially filled after the shot.",
    checks: [
      { cause: "Shooting pressure too low", action: "Increase the shooting pressure", tag: "operator" },
      { cause: "Shooting time too short", action: "Increase the shooting time", tag: "operator" },
      { cause: "Too little sand-binder mix in the shoot tube", action: "Increase the filled sand-binder quantity", tag: "operator" },
      { cause: "Shooting filter dirty", action: "Clean the shooting filter", tag: "operator" },
      { cause: "Poor core box ventilation", action: "Clean the vent nozzles", tag: "operator" },
      { cause: "Shoot plate holes/nozzles dirty", action: "Clean the shoot plate, including the holes and extended nozzles", tag: "operator" },
    ],
  },

  {
    id: "shoot-mix-escapes",
    entryType: "v2",
    category: "Shooting",
    title: "Sand binder mixture escapes between shoot head and shoot tube",
    priority: "high",
    triggers: [
      "mix escaping shoot head",
      "sand leaking shoot head",
      "binder leaking shoot tube",
      "mix leak shoot head tube",
      "sand escaping shoot",
      "sealing ring shoot head",
    ],
    symptom: "Sand-binder mix leaks out where the shoot head meets the shoot tube during the shot.",
    checks: [
      {
        cause: "Sealing surface dirty",
        action: "Clean the sealing surface; check the hydraulic oil fill level and refill if needed",
        tag: "operator",
      },
      {
        cause: "Sealing ring defective",
        tag: "maintenance",
        forMaintenance: {
          system: "Shoot head / shoot tube interface (shooting unit)",
          check: "Inspect the sealing ring between the shoot head and shoot tube for wear, cracking, or flattening. Also check the press-on ratio and clamping force — if the clamp isn't pressing the head down hard enough, a good seal will still leak.",
          likelyPart: "Shoot head/tube sealing ring (consumable wear part); possibly a clamping cylinder adjustment",
          note: "Most likely a worn-out seal. If the seal looks fine, the clamping force holding the shoot head against the tube is too low.",
        },
      },
    ],
  },

  {
    id: "shoot-reduced-pressure",
    entryType: "v2",
    category: "Shooting",
    title: "Reduced shooting pressure",
    priority: "medium",
    triggers: [
      "reduced shooting pressure",
      "low shooting pressure",
      "shooting pressure low",
      "shoot pressure low",
      "shoot exhaust valve dirty",
      "exhaust valve not closing shoot",
    ],
    symptom: "Shooting pressure is lower than it should be.",
    checks: [
      { cause: "Shoot exhaust valve does not close", action: "Clean the shoot exhaust valve", tag: "operator" },
      {
        cause: "Shoot exhaust valve seal worn",
        tag: "maintenance",
        forMaintenance: {
          system: "Shooting unit — shoot exhaust valve",
          check: "If cleaning the exhaust valve didn't fix it, the valve seal/membrane is leaking and letting shot pressure bleed off. Inspect the exhaust valve seal/membrane for wear or tears.",
          likelyPart: "Shoot exhaust valve seal / membrane (wear part)",
          note: "Pressure is escaping through a valve that won't seal. Cleaning is the operator step; if that fails, the seal is shot.",
        },
      },
      {
        cause: "Pressure regulator defective",
        tag: "maintenance",
        forMaintenance: {
          system: "Pneumatic supply — shooting pressure regulator",
          check: "Verify set pressure vs. actual delivered pressure at the shooting regulator. If actual is below setpoint and the supply is good, the regulator isn't holding pressure.",
          likelyPart: "Pressure regulator for shooting air",
          note: "The regulator that sets shot pressure isn't delivering. Check supply pressure first to rule out an upstream cause before condemning the regulator.",
        },
      },
    ],
  },

  {
    id: "shoot-mix-emerges-after-shot",
    entryType: "v2",
    category: "Shooting",
    title: "Sand binder mixture emerges from the shoot head after the shot",
    priority: "medium",
    triggers: [
      "mix comes out after shot",
      "sand after shot",
      "mix dripping after shot",
      "binder drip after shot",
      "mix emerges shoot head",
      "silencer soiled",
      "shot bleeding time short",
    ],
    symptom: "Mix comes out of the shoot head after the shot is finished.",
    checks: [
      { cause: "Shot bleeding time too short", action: "Increase the shot bleeding time", tag: "operator" },
      { cause: "Silencer soiled", action: "Clean the silencer", tag: "operator" },
      {
        cause: "Shooting valve does not close quickly enough",
        tag: "maintenance",
        forMaintenance: {
          system: "Shooting unit — main shooting valve",
          check: "The shooting valve is closing too slowly, so mix keeps coming after the shot should be done. Inspect the shooting valve sealing ring for wear and check the valve return spring for fatigue/breakage.",
          likelyPart: "Shooting valve sealing ring and/or return spring",
          note: "A slow-closing shot valve is usually a tired return spring or a worn seal. Replace the seal, check the spring.",
        },
      },
    ],
  },

  {
    id: "shoot-no-shot-or-delay",
    entryType: "v2",
    category: "Shooting",
    title: "No shot, or shot is delayed",
    priority: "high",
    triggers: [
      "no shot",
      "shot delayed",
      "delayed shot",
      "machine won't shoot",
      "machine wont shoot",
      "no shooting",
      "shot not happening",
      "shot parameters faulty",
    ],
    symptom: "The machine doesn't shoot, or there's a noticeable delay before the shot.",
    checks: [
      {
        cause: "Core box data or shot parameters faulty",
        action: "Check the programming/shot settings and change if required",
        tag: "operator",
      },
      {
        cause: "Loss of pressure in hoses, valves, cylinders or seals",
        tag: "maintenance",
        forMaintenance: {
          system: "Pneumatic / shooting pressure circuit",
          check: "After ruling out settings, there's a pressure leak somewhere in the shot circuit. Walk the line from the shooting air reservoir through the hoses, valves, and shot cylinder seals listening/feeling for leaks; check fittings.",
          likelyPart: "Depends on where the leak is — hose, valve seal, or cylinder seal",
          note: "Operator already confirmed settings are fine, so this is a physical pressure loss. Start at the reservoir and work toward the shot head.",
        },
      },
    ],
  },

  {
    id: "harden-too-little-purge",
    entryType: "v2",
    category: "Gassing / Hardening",
    title: "Too little purge pressure",
    priority: "medium",
    triggers: [
      "purge pressure low",
      "too little purge",
      "purge pressure too low",
      "low purge pressure",
      "purge insufficient",
    ],
    symptom: "Purge pressure is lower than required.",
    checks: [
      { cause: "System pressure too low", action: "Check the system pressure on the gauge", tag: "operator" },
      {
        cause: "Pressure regulator defective",
        tag: "maintenance",
        forMaintenance: {
          system: "Gassing/purge pneumatic circuit — purge pressure regulator",
          check: "Operator confirmed system pressure is OK but purge pressure is still low, so the purge regulator isn't holding setpoint. Compare set vs. actual purge pressure at the regulator.",
          likelyPart: "Purge pressure regulator",
          note: "The regulator controlling purge pressure isn't delivering. Supply is already confirmed good by the operator.",
        },
      },
    ],
  },

  {
    id: "harden-shooting-area-damp",
    entryType: "v2",
    category: "Gassing / Hardening",
    title: "Shooting area on core is damp",
    priority: "medium",
    triggers: [
      "shooting area damp",
      "core comes out damp",
      "damp core shooting area",
      "ex flow heater temperature low",
      "partial pressure ex flow heater",
      "dosing quantity adjust damp",
    ],
    symptom: "The shooting area of the core comes out damp.",
    checks: [
      {
        cause: "Purge pressure too low",
        action: "Increase the purge pressure",
        tag: "operator",
      },
      {
        cause: "Ex-flow heater not at operating temperature",
        action: "Check the ex-flow heater temperature setting and adjust if required",
        tag: "operator",
      },
      {
        cause: "Partial pressure at ex-flow heater too great; medium is liquid again",
        action: "Check the dosing quantity and adjust; check the ex-flow heater temperature setting",
        tag: "operator",
      },
    ],
  },

  {
    id: "harden-area-flushed-out",
    entryType: "v2",
    category: "Gassing / Hardening",
    title: "Shooting area is flushed out",
    priority: "medium",
    triggers: [
      "shooting area flushed out",
      "core washed out",
      "shooting area eroded",
      "time to final pressure too short",
      "purge pressure too high",
      "proportional valve defective",
    ],
    symptom: "The shooting area on the core looks washed out / eroded.",
    checks: [
      { cause: "Time to final pressure too short", action: "Increase the time to final pressure", tag: "operator" },
      { cause: "Purge pressure too high", action: "Reduce the purge pressure", tag: "operator" },
      {
        cause: "Proportional valve defective",
        tag: "maintenance",
        forMaintenance: {
          system: "Gassing pressure control — proportional valve",
          check: "If settings are correct and it still flushes out, the proportional valve that ramps gassing pressure isn't controlling smoothly. Test the proportional valve's response against its control signal.",
          likelyPart: "Proportional (pressure ramp) valve for gassing",
          note: "The valve that should ramp pressure gently is dumping it too fast/uneven, eroding the core. Operator already adjusted the timing/pressure settings.",
        },
      },
    ],
  },

  {
    id: "harden-whistling",
    entryType: "v2",
    category: "Gassing / Hardening",
    title: "Whistling noises during gassing",
    priority: "medium",
    triggers: [
      "whistling gassing",
      "whistle noise gassing",
      "whistling during gassing",
      "gas whistle noise",
      "sand between seals gassing",
      "gassing plate not airtight",
    ],
    symptom: "A whistling noise is heard while gassing.",
    checks: [
      {
        cause: "Sand between the seals",
        action: "Remove sand from between the gassing intermediate plate / core box seals",
        tag: "operator",
      },
      {
        cause: "Gassing intermediate plate or core box not airtight (after cleaning)",
        tag: "maintenance",
        forMaintenance: {
          system: "Gassing carriage — intermediate plate / core box sealing",
          check: "Operator already removed sand from between the seals. If it still whistles, the seal itself is worn or the intermediate plate isn't seating flat. Inspect seals and plate flatness.",
          likelyPart: "Gassing intermediate plate seal(s)",
          note: "Whistling = gas escaping a bad seal. Operator cleared sand already, so the seal needs replacing or the plate needs reseating.",
        },
      },
    ],
  },

  {
    id: "harden-core-not-gassed",
    entryType: "v2",
    category: "Gassing / Hardening",
    title: "Core is not gassed",
    priority: "high",
    triggers: [
      "core not gassed",
      "core not gassing",
      "gassing not happening",
      "gassing unit fault",
      "carriage not reaching end position",
      "end position gassing carriage",
    ],
    symptom: "The core doesn't get gassed at all.",
    checks: [
      {
        cause: "Gassing unit does not have approval to run the process",
        action: "Check error notifications on the HMI and clear faults if required",
        tag: "operator",
      },
      {
        cause: "End position of the gassing carriage not reached",
        action: "Check the core box setup is correct",
        tag: "operator",
      },
      {
        cause: "Gassing carriage still won't reach end position after setup check",
        tag: "maintenance",
        forMaintenance: {
          system: "Gassing carriage drive (pneumatic) + position sensing",
          check: "Operator confirmed core box setup is right but the carriage still won't reach its end position, so it's not getting an end-position signal. Check the carriage's pneumatic drive for full travel and the end-position sensor/proximity switch.",
          likelyPart: "Carriage end-position sensor / proximity switch, or pneumatic drive component",
          note: "Without an end-position signal the machine won't allow gassing. Either the carriage isn't physically traveling all the way, or the sensor that confirms it isn't reading.",
        },
      },
    ],
  },

  {
    id: "harden-core-not-harden",
    entryType: "v2",
    category: "Gassing / Hardening",
    title: "Core does not harden",
    priority: "high",
    triggers: [
      "core not hardening",
      "core does not harden",
      "soft core after gassing",
      "core crumbly",
      "core weak after gassing",
      "gassing time too short",
      "dosing quantity low",
      "catalyst empty canister",
      "catalyst feed line defective",
    ],
    symptom: "The core comes out soft, weak, or crumbly.",
    checks: [
      { cause: "Gassing time too short", action: "Increase the gassing time", tag: "operator" },
      { cause: "Dosing quantity too low", action: "Increase the dosing quantity", tag: "operator" },
      { cause: "Purge pressure too low", action: "Increase the purge pressure", tag: "operator" },
      { cause: "Time to final pressure too long", action: "Reduce the time to final pressure", tag: "operator" },
      { cause: "Poor core box ventilation", action: "Clean the vent nozzles", tag: "operator" },
      {
        cause: "Too little or no catalyst",
        action: "Check the catalyst fill level; replace the empty canister if needed",
        tag: "operator",
      },
      {
        cause: "Catalyst feed line defective",
        tag: "maintenance",
        forMaintenance: {
          system: "Catalyst (amine) dosing — feed line",
          check: "Operator confirmed there's catalyst in the canister, but it's not reaching the process. Inspect the catalyst feed line from the canister to the gassing carriage for kinks, blockage, cracks, or disconnection.",
          likelyPart: "Catalyst feed line / tubing",
          note: "Catalyst is present but not getting through. The line between canister and carriage is blocked or leaking.",
        },
      },
      {
        cause: "Leakage in the pipe/gas line to the gassing carriage",
        tag: "maintenance",
        forMaintenance: {
          system: "Gassing gas line to the carriage",
          check: "Gas isn't reaching the core in full. Pressure-check / leak-check the gas piping run to the gassing carriage; check fittings and connections along the line.",
          likelyPart: "Gas line fitting, hose, or connection",
          note: "A leak in the gas delivery line means the core never gets enough gas to cure. Walk the line to the carriage.",
        },
      },
      {
        cause: "Heat insulation defective",
        tag: "maintenance",
        forMaintenance: {
          system: "Ex-flow heater / heated gas path — insulation",
          check: "If the gas is cooling before it reaches the core, the heat insulation on the heated path is damaged. Inspect insulation around the ex-flow heater and heated lines for damage or gaps.",
          likelyPart: "Heat insulation (heated gas path)",
          note: "Damaged insulation lets the heated medium cool down, so it won't cure properly. Repair the insulation.",
        },
      },
      {
        cause: "Valves do not work",
        tag: "maintenance",
        forMaintenance: {
          system: "Gassing circuit valves",
          check: "Run a functional test on the gassing circuit valves — confirm each opens/closes on command. A stuck valve can block gas flow.",
          likelyPart: "Whichever gassing valve fails the functional test",
          note: "One of the gassing valves may not be actuating. Functional-test them to find the stuck one.",
        },
      },
    ],
  },

  {
    id: "harden-odor",
    entryType: "v2",
    category: "Gassing / Hardening",
    title: "Odor of operating substance",
    priority: "high",
    triggers: [
      "gas smell",
      "odor operating substance",
      "amine smell",
      "gas odor",
      "smell gassing",
      "operating substance smell",
      "extraction not working",
      "gassing hose defective",
      "screw fitting leak gassing",
    ],
    symptom: "You can smell the operating substance / gassing medium.",
    checks: [
      {
        cause: "Extraction system not working",
        action: "Check the extraction (exhaust) function is switched on and running",
        tag: "operator",
      },
      {
        cause: "Gas Exhaust Time too short",
        action: "Increase the Gas Exhaust Time slightly — only if the process procedure allows adjustment",
        tag: "operator",
      },
      {
        cause: "Operating substance escaping at screw fittings",
        tag: "maintenance",
        forMaintenance: {
          system: "Gassing/medium piping — screw fittings",
          check: "Operator confirmed extraction is running but you can still smell it, so there's a leak. Leak-check the screw fittings along the medium and gas lines.",
          likelyPart: "Fitting seal / re-torque fittings",
          note: "Smell with extraction running = an actual leak at a fitting. Tighten/reseal the leaking connection.",
        },
      },
      {
        cause: "Gassing hose defective",
        tag: "maintenance",
        forMaintenance: {
          system: "Gassing hose",
          check: "Inspect the gassing hose for cracks, splits, or perishing, and confirm it can move freely without chafing. Replace if damaged.",
          likelyPart: "Gassing hose",
          note: "A cracked or chafed gassing hose leaks medium. Replace it and make sure the new one isn't rubbing on anything.",
        },
      },
    ],
  },

  {
    id: "harden-no-heat-exflow",
    entryType: "v2",
    category: "Gassing / Hardening",
    title: "No heat at the ex-flow heater",
    priority: "high",
    triggers: [
      "no heat ex flow heater",
      "ex-flow heater not heating",
      "heater not heating",
      "ex flow heater cold",
      "temperature limiter triggered heater",
      "heater no voltage",
    ],
    symptom: "The ex-flow heater isn't heating.",
    checks: [
      {
        cause: "Temperature limiter triggered",
        action: "Check the ex-flow heater temperature setting, adjust if needed, and acknowledge the overtemperature on the HMI",
        tag: "operator",
      },
      {
        cause: "No voltage",
        tag: "maintenance",
        forMaintenance: {
          system: "Ex-flow heater — electrical supply",
          check: "Operator already tried acknowledging the overtemperature. If still no heat, the heater isn't getting power. Check electrical connections to the ex-flow heater, its supply fuse/breaker, and the temperature limiter/cutout that may have latched off.",
          likelyPart: "Fuse/breaker, heater connection, or temperature limiter",
          note: "No heat after the operator acknowledged the fault = an electrical supply problem to the heater. Start at the supply and the temperature limiter.",
        },
      },
    ],
  },

  {
    id: "harden-no-medium",
    entryType: "v2",
    category: "Gassing / Hardening",
    title: "No medium",
    priority: "high",
    allMaintenance: true,
    triggers: [
      "no medium",
      "no gassing medium",
      "medium not reaching process",
      "no operating medium",
      "medium supply fault",
      "shut-off valves closed medium",
    ],
    symptom: "No gassing medium is reaching the process. If another ex-flow heater fault is active at the same time, check and resolve that first — it may be the root cause.",
    checks: [
      {
        cause: "Shut-off valves closed",
        tag: "maintenance",
        forMaintenance: {
          system: "Medium supply — shut-off valves",
          check: "Check whether the shut-off valves in the medium supply line are closed, and open them. Check this first — it's the simplest cause.",
          likelyPart: "None (open the valves), unless a valve is faulty",
          note: "Easiest cause first: closed supply valves mean no medium can flow. Verify these before going deeper.",
        },
      },
      {
        cause: "Dosing pump not functioning",
        tag: "maintenance",
        forMaintenance: {
          system: "Medium dosing pump",
          check: "If the supply valves are open and there's still no medium, check the dosing pump — power/air supply, run signal, and function. (See also the 'Dosing pump not running' scenario.)",
          likelyPart: "Dosing pump (repair or replace)",
          note: "With valves open and still no medium, the pump isn't moving it. Check its supply and run signal first.",
        },
      },
    ],
  },

  {
    id: "machine-wont-start",
    entryType: "v2",
    category: "Machine",
    title: "Main switch on, but the system does not start up",
    priority: "high",
    allMaintenance: true,
    triggers: [
      "main switch on nothing starts",
      "machine completely dead",
      "machine dead after main switch",
      "system does not start up",
      "machine not powering on",
      "voltage supply missing startup",
    ],
    symptom: "You turned the main switch on but nothing powers up.",
    checks: [
      {
        cause: "Voltage supply missing",
        tag: "maintenance",
        forMaintenance: {
          system: "Main electrical supply / control cabinet",
          check: "Nothing powers up at all, so the machine isn't getting supply voltage. Check the incoming supply to the control cabinet, the main disconnect, and the main fuses/breakers in the cabinet.",
          likelyPart: "Main fuse/breaker or supply connection",
          note: "Dead machine on main-switch-on = no incoming power reaching the controls. Check the supply and cabinet main fuses before anything else.",
        },
      },
    ],
  },

  {
    id: "machine-cannot-switch-on",
    entryType: "v2",
    category: "Machine",
    title: "Machine cannot be switched on",
    priority: "high",
    triggers: [
      "machine cannot switch on",
      "machine won't switch on",
      "machine wont switch on",
      "emergency stop actuated",
      "maintenance door open machine",
      "compressed air too low machine",
      "cpu error machine startup",
      "compressed air switch defective",
    ],
    symptom: "The machine won't switch on (but has power).",
    checks: [
      { cause: "Emergency stop button actuated", action: "Unlock the emergency stop button", tag: "operator" },
      { cause: "Maintenance door open", action: "Close the maintenance door", tag: "operator" },
      {
        cause: "Compressed air too low",
        action: "Check compressed air; adjust at the pressure regulator if required",
        tag: "operator",
      },
      {
        cause: "Evaluation module on maintenance door defective",
        tag: "maintenance",
        forMaintenance: {
          system: "Safety circuit — maintenance door evaluation module",
          check: "Operator confirmed the door is actually closed but the machine still thinks it's open. Test/initialize the safety evaluation module for the maintenance door, and check the door switch wiring.",
          likelyPart: "Door safety evaluation module or door switch",
          note: "Door is closed but the safety module isn't registering it. Test the module and the door switch.",
        },
      },
      {
        cause: "CPU error",
        tag: "maintenance",
        forMaintenance: {
          system: "Control cabinet — PLC/CPU",
          check: "Check the fuses in the control cabinet feeding the CPU/PLC, and look for a CPU fault indication. Refer to the control documentation for the specific error.",
          likelyPart: "Control cabinet fuse, or CPU fault needing control docs",
          note: "A CPU error usually traces to a blown control fuse or a PLC fault. Check cabinet fuses first, then the control documentation.",
        },
      },
      {
        cause: "Compressed air switch defective",
        tag: "maintenance",
        forMaintenance: {
          system: "Pneumatic supply — compressed air pressure switch",
          check: "Operator confirmed compressed air is actually present, but the machine won't enable. Test the compressed-air pressure switch — it may not be closing even though pressure is good.",
          likelyPart: "Compressed air pressure switch",
          note: "Air is present but the switch that confirms it isn't signaling. Test/replace the pressure switch.",
        },
      },
      {
        cause: "Signal for compressed air not available (wiring)",
        tag: "maintenance",
        forMaintenance: {
          system: "Wiring from compressed-air switch to control",
          check: "If the air switch tests good but its signal isn't reaching the controller, check the wiring/terminals between the pressure switch and the control input.",
          likelyPart: "Wiring / terminal connection",
          note: "Switch is fine but its signal isn't getting to the PLC. Check the wire run and terminals.",
        },
      },
    ],
  },

  {
    id: "machine-vacuum-low",
    entryType: "v2",
    category: "Machine",
    title: "Vacuum pressure too low",
    priority: "medium",
    triggers: [
      "vacuum pressure too low",
      "vacuum low machine",
      "suction too low",
      "vacuum insufficient",
      "suction surfaces dirty",
      "vacuum system leak machine",
    ],
    symptom: "Vacuum pressure is below where it should be.",
    checks: [
      { cause: "Related positions not fully made before the vacuum step", action: "Confirm the machine positions that should be made before the vacuum step are all showing correctly on the HMI screen", tag: "operator" },
      { cause: "Active fault or message tied to the vacuum condition", action: "Check the HMI for any active fault or message tied to the vacuum condition — resolve that before proceeding", tag: "operator" },
      { cause: "Suction surfaces dirty", action: "Clean the suction surfaces", tag: "operator" },
      {
        cause: "Leakage in vacuum system",
        tag: "maintenance",
        forMaintenance: {
          system: "Vacuum system",
          check: "Operator already cleaned the suction surfaces. If vacuum is still low, there's a leak in the vacuum system. Check vacuum hoses, fittings, and the vacuum pump/filter.",
          likelyPart: "Vacuum hose/fitting, or vacuum filter/pump component",
          note: "Surfaces are clean but vacuum is still weak = an air leak in the vacuum circuit. Walk the hoses and check the filter.",
        },
      },
    ],
  },

  {
    id: "machine-light-curtain",
    entryType: "v2",
    category: "Machine",
    title: "Light curtain interrupted",
    priority: "high",
    triggers: [
      "light curtain interrupted",
      "light curtain blocked",
      "safety curtain fault",
      "light curtain fault",
      "deflecting mirror soiled",
      "sender receiver dirty curtain",
    ],
    symptom: "The machine stops with a light curtain fault.",
    checks: [
      {
        cause: "Object or person within the light curtain area",
        action: "Clear the area, then acknowledge the light curtain on the HMI",
        tag: "operator",
      },
      {
        cause: "Sender, receiver, or deflecting mirror soiled",
        action: "Clean the sender, receiver, and deflecting mirror",
        tag: "operator",
      },
      {
        cause: "Light curtain status not shown correctly on screen after clearing",
        action: "Check that the machine's safety curtain condition shows correctly on the HMI after the zone is clear and the components are clean — if it still shows interrupted, report for sensor or alignment check",
        tag: "operator",
      },
    ],
  },

  {
    id: "machine-excessive-heating",
    entryType: "v2",
    category: "Machine",
    title: "Excessive heating development",
    priority: "high",
    triggers: [
      "excessive heating development",
      "motor hot",
      "component overheating",
      "motor running hot",
      "machine heating up",
      "grease shortage guide",
      "bearing dirty corroded",
      "linear guide damaged",
    ],
    symptom: "A motor or component is running hot.",
    checks: [
      {
        cause: "Restricted flow of air to the motor",
        action: "Clear obstructions and make sure airflow to the motor isn't blocked",
        tag: "operator",
      },
      {
        cause: "Shortage of grease or wear on the machine guide",
        tag: "maintenance",
        forMaintenance: {
          system: "Machine guide (linear guide / ways)",
          check: "Check the machine guide for adequate lubrication and inspect for wear. A dry or worn guide creates friction and heat.",
          likelyPart: "Grease/lubricant; guide may need replacing if worn",
          note: "Operator confirmed airflow is clear, so heat is mechanical. A dry or worn guide is the usual cause — lubricate, check for wear.",
        },
      },
      {
        cause: "Bearings dirty, corroded, or damaged",
        tag: "maintenance",
        forMaintenance: {
          system: "Bearings on the affected component",
          check: "Inspect the relevant bearings for dirt, corrosion, or mechanical damage. A failing bearing runs hot.",
          likelyPart: "Bearing(s)",
          note: "Localized heat at a rotating part usually means a bad bearing. Clean/replace as found.",
        },
      },
      {
        cause: "Linear guide damaged",
        tag: "maintenance",
        forMaintenance: {
          system: "Linear guide",
          check: "If the linear guide is mechanically damaged it binds and heats. Inspect for damage; replace if needed.",
          likelyPart: "Linear guide",
          note: "A damaged linear guide binds and generates heat. Replace it.",
        },
      },
    ],
  },

  {
    id: "machine-excessive-noise",
    entryType: "v2",
    category: "Machine",
    title: "Excessive noise generation",
    priority: "high",
    triggers: [
      "excessive noise machine",
      "machine loud",
      "abnormal noise machine",
      "noise generation machine",
      "banging machine",
      "bearing noise",
      "guide noise machine",
      "collision noise machine",
    ],
    symptom: "The machine is making more noise than normal.",
    checks: [
      {
        cause: "Noise starts at the same cycle step, or started after a setup or box change",
        action: "Note which cycle step the noise starts at and whether it began after a setup, box change, or restart — report this to maintenance to help narrow the cause",
        tag: "operator",
      },
      {
        cause: "Loose components",
        action: "Check accessible components for dirt and clean; fasten any loose components you can safely reach",
        tag: "operator",
      },
      {
        cause: "Dirty or worn bearing",
        tag: "maintenance",
        forMaintenance: {
          system: "Bearings",
          check: "Inspect bearings for dirt and wear; clean and lubricate, replace if worn. A dry/worn bearing is a common noise source.",
          likelyPart: "Bearing(s); grease",
          note: "Grinding or whining noise usually traces to a dirty or worn bearing.",
        },
      },
      {
        cause: "Wear or grease shortage on machine guide",
        tag: "maintenance",
        forMaintenance: {
          system: "Machine guide",
          check: "Check the machine guide for lubrication and wear — a dry guide squeals/grinds.",
          likelyPart: "Lubricant; guide if worn",
          note: "A dry or worn guide makes noise. Lubricate and check for wear.",
        },
      },
      {
        cause: "Collision impacts from powered components",
        tag: "maintenance",
        forMaintenance: {
          system: "Moving component stroke / damping / limit stops",
          check: "Something is banging at end of travel. Check stroke settings and damping elements, verify position of brake initiators and limit stops, and check the hydraulic/electrical/electronic switching components — correct/adjust as needed.",
          likelyPart: "Damping element, limit stop adjustment, or switching component",
          note: "Banging/knocking = a component slamming at the end of its stroke. Check damping, limit stops, and the switches that should slow it down.",
        },
      },
    ],
  },

  {
    id: "machine-excessive-vibration",
    entryType: "v2",
    category: "Machine",
    title: "Excessive levels of vibration",
    priority: "high",
    triggers: [
      "excessive vibration machine",
      "machine vibrating excessively",
      "vibration levels high",
      "machine shaking",
      "motor fan imbalance",
      "bearing imbalance",
      "foundation mounting loose",
    ],
    symptom: "The machine is vibrating more than usual.",
    checks: [
      {
        cause: "Vibration starts at the same cycle step, or started after a setup or box change",
        action: "Note which cycle step the vibration starts at and whether it began after a setup, box change, or restart — report this to maintenance to help narrow the cause",
        tag: "operator",
      },
      {
        cause: "Loose machine components",
        action: "Check accessible machine components for firm seating where you can safely reach",
        tag: "operator",
      },
      {
        cause: "Imbalance in motor fan or bearings",
        tag: "maintenance",
        forMaintenance: {
          system: "Motor / fan / bearings",
          check: "Check the motor fan and bearings for imbalance and wear; replace components as needed. An unbalanced fan or failing bearing vibrates.",
          likelyPart: "Motor fan or bearing(s)",
          note: "Operator confirmed nothing's loose, so it's rotating-mass imbalance — usually fan or bearing.",
        },
      },
      {
        cause: "Resonance from foundation mounting",
        tag: "maintenance",
        forMaintenance: {
          system: "Machine foundation mounting",
          check: "Check that the machine is properly mounted and bolted to its foundation; tighten the mounting if loose. Loose mounting lets the machine resonate.",
          likelyPart: "Foundation bolts / anchors",
          note: "If the machine isn't firmly anchored it resonates. Check and tighten the foundation mounting.",
        },
      },
    ],
  },

  {
    id: "hydraulic-general",
    entryType: "v2",
    category: "Hydraulic",
    title: "Hydraulic system fault",
    priority: "high",
    triggers: [
      "hydraulic fault",
      "hydraulic noise",
      "hydraulic pressure low",
      "hydraulic oscillation",
      "hydraulic jerky movement",
      "foaming hydraulic oil",
      "hydraulic overheating",
      "hydraulic problem",
      "jerky actuator hydraulic",
      "hydraulic feed rate low",
    ],
    symptom:
      "Any hydraulic problem: excessive noise, low or fluctuating pressure, poor feed rates, oscillations, jerky actuator movement, foaming oil, or oil running too hot.",
    checks: [
      {
        cause: "Low oil level (operator can read the sight glass)",
        action: "Check the hydraulic oil level on the sight glass. If it's low, report it — but topping up hydraulic oil is a maintenance task unless you're specifically trained and authorized.",
        tag: "operator",
      },
      {
        cause: "Any internal hydraulic fault — pump, valves, seals, cylinders, filters, cooler, pressure settings",
        tag: "maintenance",
        forMaintenance: {
          system: "Hydraulic power unit and circuit",
          check: "Identify which symptom it is and work from there: NOISE → check oil level, suction-side leaks, air in oil, pump/bearings. LOW/FLUCTUATING PRESSURE → check pump wear, relief/pressure valve settings, internal leakage. POOR FEED RATE → check pump output, throttle/flow valves, internal leakage. JERKY/OSCILLATING → check for air in the system, valve sticking, damping. FOAMING → check oil level, suction-side air leak, wrong/contaminated oil. OVERHEATING → check cooler/heat exchanger, oil level, relief valve set too high.",
          likelyPart: "Depends on symptom — commonly: hydraulic oil, return/pressure filter, valve seals, or cooler cleaning",
          note: "The operator can only confirm oil level. Everything else in the hydraulic system is maintenance. Use the symptom to narrow it: noise and foaming usually start with oil level and suction-side air; overheating usually starts with the cooler and oil level.",
        },
      },
    ],
  },

  {
    id: "hydraulic-oil-temp-high",
    entryType: "v2",
    category: "Hydraulic",
    title: "Hydraulic oil temperature too high (machine switch-off)",
    priority: "high",
    allMaintenance: true,
    triggers: [
      "hydraulic oil temperature high shutoff",
      "oil temp too high machine shutoff",
      "hydraulic overtemp shutoff",
      "machine shutdown oil temperature",
      "hydraulic oil hot shutoff",
      "heat exchanger dirty hydraulic",
      "cooling circuit fault hydraulic",
    ],
    symptom: "The machine shuts off with a high hydraulic oil temperature fault.",
    checks: [
      {
        cause: "Oil-air / oil-water heat exchanger dirty, or coolant circuit issue",
        tag: "maintenance",
        forMaintenance: {
          system: "Hydraulic cooling — heat exchanger and coolant circuit",
          check: "Check the oil-air or oil-water heat exchanger for dirt/blockage and clean it. Check the coolant circuit for flow, leaks, and faults. A blocked or starved cooler is the #1 cause of overheating shutdown.",
          likelyPart: "Clean heat exchanger; check coolant supply",
          note: "Overheat shutdown almost always starts at the cooler. Clean the heat exchanger and confirm coolant is actually flowing.",
        },
      },
      {
        cause: "Filter element for water cooling dirty",
        tag: "maintenance",
        forMaintenance: {
          system: "Water cooling circuit — filter element",
          check: "If the cooler is clean but oil still overheats, the water-cooling filter element may be clogged, starving the cooler of coolant flow. Clean/replace the filter element.",
          likelyPart: "Water cooling filter element",
          note: "A clogged cooling-water filter starves the cooler. Clean it if cleaning the exchanger didn't fix the overheat.",
        },
      },
    ],
  },

  {
    id: "hydraulic-oil-low-shutoff",
    entryType: "v2",
    category: "Hydraulic",
    title: "Hydraulic oil fill level too low (machine switch-off)",
    priority: "high",
    allMaintenance: true,
    triggers: [
      "hydraulic oil level too low shutoff",
      "low hydraulic oil shutoff",
      "hydraulic oil low warning shutoff",
      "oil level low machine shutdown",
      "hydraulic oil fill level low",
      "hydraulic leak oil level",
    ],
    symptom: "The machine shuts off, or gives an advance warning, for low hydraulic oil level. Before calling maintenance: note whether the level is constantly low or only drops during operation, and whether this started after recent maintenance or suspected leakage.",
    checks: [
      {
        cause: "Leakage in the hydraulic circuit",
        tag: "maintenance",
        forMaintenance: {
          system: "Hydraulic circuit",
          check: "Oil level dropped below the warning threshold, which means it's leaking out somewhere. Inspect the hydraulic circuit for leaks — hoses, fittings, cylinder seals, the power unit — find and fix the leak, then refill to the correct level.",
          likelyPart: "Depends on leak location — hose, fitting, or cylinder seal; plus hydraulic oil to refill",
          note: "Note whether the level is constant or only drops during operation, and whether it appeared after recent maintenance. Find and fix the leak before refilling — don't just top up or it'll come back. Then refill to spec.",
        },
      },
    ],
  },

  {
    id: "pneumatic-general",
    entryType: "v2",
    category: "Pneumatic",
    title: "Pneumatic system fault",
    priority: "medium",
    triggers: [
      "pneumatic system fault",
      "air system problem",
      "pneumatic noise",
      "air pressure low pneumatic",
      "pneumatic oscillation",
      "jerky pneumatic actuator",
      "air cylinder jerky",
      "valve seal pneumatic",
    ],
    symptom:
      "Any pneumatic problem: excessive noise, insufficient or fluctuating pressure, poor feed rates, oscillations, or jerky actuator movement.",
    checks: [
      {
        cause: "Latched pneumatic stop that Reset Air can clear",
        action: "Perform Reset Air once if it is appropriate and allowed for the stopped condition — stop if the same fault returns immediately",
        tag: "operator",
      },
      {
        cause: "Compressed air too low / pressure set too low",
        action: "Check compressed air and adjust at the pressure regulator if required",
        tag: "operator",
      },
      { cause: "Air filter clogged (accessible)", action: "Clean the accessible air filter, or report it", tag: "operator" },
      {
        cause: "Any internal pneumatic fault — valves, seals, cylinders, piping",
        tag: "maintenance",
        forMaintenance: {
          system: "Pneumatic system",
          check: "After confirming supply pressure and a clean filter: NOISE → loose cylinder fastening, leaking fittings, fluttering/dirty valves. LOW/FLUCTUATING PRESSURE → regulator, valve seating, leaks. JERKY/OSCILLATING → air in line, sticking valve, insufficient damping. Check valves, cylinder seals, and piping/fittings accordingly.",
          likelyPart: "Valve seal, cylinder seal, fitting, or regulator",
          note: "Operator already checked supply pressure and the filter. Remaining causes are valves, seals, cylinders, and piping — narrow it by symptom.",
        },
      },
    ],
  },

  {
    id: "pneumatic-shooting-reservoir-low",
    entryType: "v2",
    category: "Pneumatic",
    title: "Shooting air reservoir pressure too low",
    priority: "medium",
    triggers: [
      "shooting air reservoir low",
      "shooting reservoir pressure low",
      "shoot air reservoir",
      "air reservoir pressure low",
      "fill pressure too low reservoir",
      "air filter clogged shoot reservoir",
    ],
    symptom: "Fill pressure in the shooting air reservoir is too low.",
    checks: [
      { cause: "Fill pressure too low", action: "Check the air supply", tag: "operator" },
      { cause: "Air filter clogged", action: "Clean the air filter", tag: "operator" },
    ],
  },

  {
    id: "electrical-general",
    entryType: "v2",
    category: "Electrical",
    title: "Electrical fault",
    priority: "high",
    allMaintenance: true,
    triggers: [
      "electrical fault",
      "motor protection switch tripped",
      "cpu error electrical",
      "24v supply missing",
      "limit switch error",
      "electrical system fault",
      "motor protection tripped",
      "signal generator error",
    ],
    symptom:
      "Any electrical fault message: motor protection switch tripped, CPU error, 24V supply issue, or limit switch error.",
    checks: [
      {
        cause: "Motor protection switch tripped",
        tag: "maintenance",
        forMaintenance: {
          system: "Motor circuit — motor protection switch",
          check: "A tripped motor protection switch means motor overload or short-circuit. Check the motor and the pump it drives for binding/overload; check supply lines for a short. Don't just reset it without finding why it tripped.",
          likelyPart: "Investigate motor/pump; reset only after cause found",
          note: "The protection switch tripped for a reason — overload or short. Find the cause (binding motor/pump or a short) before resetting.",
        },
      },
      {
        cause: "CPU error",
        tag: "maintenance",
        forMaintenance: {
          system: "Control — PLC/CPU",
          check: "A CPU/system error — refer to the control documentation for the specific code. Check control-cabinet fuses feeding the CPU.",
          likelyPart: "Per control documentation; possibly a control fuse",
          note: "CPU errors need the control documentation to decode. Check cabinet control fuses as a first move.",
        },
      },
      {
        cause: "24V voltage supply missing",
        tag: "maintenance",
        forMaintenance: {
          system: "24V control supply",
          check: "Check the 24V supply: blown fuse, tripped supply, overload, or short-circuit on a 24V consumer. Check the fuse, then check consumers and supply lines for shorts/overload.",
          likelyPart: "24V fuse; investigate shorted/overloaded consumer",
          note: "No 24V usually means a blown control fuse, often caused by a shorted or overloaded device downstream. Check the fuse and what it feeds.",
        },
      },
      {
        cause: "Limit switch / signal generator error",
        tag: "maintenance",
        forMaintenance: {
          system: "Position sensing — limit switch / signal generator",
          check: "Check the limit switch / signal generator setting and position — it may be misadjusted, dirty, or failed so it's not giving the expected signal.",
          likelyPart: "Limit switch / proximity sensor",
          note: "A limit switch error is usually a misadjusted, dirty, or dead position sensor. Check its setting and signal.",
        },
      },
    ],
  },

  {
    id: "vacuum-wont-make-during-load-search",
    entryType: "recovery-bridge",
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
    symptom: "Auto load reaches the vacuum step, but vacuum does not make.",
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
    safetyNotes: ["Do not force the load sequence when vacuum will not make."],
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