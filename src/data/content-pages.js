export const CONTENT_PAGES = {
  basics: {
    title: "Machine Operation",
    subtitle: "Start • Run • Shutdown",
    body: `REFERENCE ONLY

Always follow the approved work instruction, F.I.C. card, and plant procedure before operating the machine.

Summary
Purpose: Give operators a clear quick-reference for normal machine operation.

Before Starting
1. Read and understand the work instruction for the job.
2. Read and understand the F.I.C. card for the job.
3. Make sure all guarding is in place before starting the shift.
4. Make sure partial buggies are available if needed for the run.
5. Sign in on the MES terminal.
6. Make sure machine and gassing screens match the F.I.C. card.
7. If the machine fails to operate or is not acting right, stop and notify setup, supervisor, or maintenance.

Startup
1. Push in the control power switch to power up the machine.
2. Start the machine using the auto start button.
3. Dry cycle the machine without making sand for 2 to 5 cycles.
4. Use the dry cycle to make sure the machine starts correctly and is not wasting sand.
5. Push the sand mixer button to turn the mixer on.
6. Turn the sand demand switch on.
7. Make sure the required indicator lights come on for sand demand and mixer running.

Machine Ready Checks
1. Enter the cage only as allowed by procedure.
2. Make sure machine control power is on.
3. Put operation mode in Manual when needed for setup checks.
4. Highlight the required sand gate and function buttons as required by procedure.
5. Make sure the sand demand cycle responds correctly.
6. Make sure all machine functions show green on panel view.
7. Make sure clamps show green in the correct closed positions.
8. Make sure the light / camera pole is in the correct position above the core box if needed.
9. Put operation mode back in Auto when checks are complete.
10. Exit the cage, close it, and lock the cage door.

Running Production
1. Push entry request, complete required resets, and start the cycle as required by procedure.
2. Make sure machine and gassing screens still match the F.I.C. card.
3. Start the machine with the green auto start button.
4. Watch cycle operation and robot core removal.
5. If the robot or camera is not working correctly, notify setup and supervisor.
6. Remove cores only as required and keep the area clear for continued operation.

Core Inspection and Quality
1. Remove, inspect, and rework cores to F.I.C. card and Quality Alert requirements.
2. Use approved tools only for rework and cleanup.
3. If cores do not meet standard, make the required correction if allowed.
4. If you cannot make acceptable cores, notify setup or supervisor.
5. Report all downtime over 20 minutes to supervision.

End of Shift / Shutdown
1. Place acceptable cores on the correct buggy to F.I.C. card standard.
2. Make accurate tags and place them on the buggy with the cores.
3. About 45 minutes before end of shift, get ready to run the sand out.
4. Turn off the mixer sand demand switch.
5. Keep running until the machine runs out of sand.
6. Clean the machine if it will be down for an extended period.
7. Clean the work area, including the mixer area, binder pails, and floor, as required.

Documentation and Handoff
1. Fill in required production and downtime information.
2. Complete scrap and related paperwork as required.
3. Move buggies to the correct staging area for retrieval.
4. Follow safe buggy handling practices and use tugger equipment when possible.
5. Ask for help when hand-moving or positioning buggies.

Operating Limits
1. Gassing time: plus or minus 5 seconds
2. Exhaust time: plus or minus 2 seconds
3. Gassing stroke time: plus or minus 10 seconds
4. Blow time: plus or minus 2 seconds

IMPORTANT

This page is a quick operator reference only.

Always follow the approved work instruction, F.I.C. card, and plant procedure during machine operation.`,
  },

  feedback: {
    title: "Operator Feedback",
    subtitle: "Submit improvement input",
    body: `Operator feedback section placeholder.

This page can later hold the feedback form link and instructions.`,
  },

  "mixer/overview": {
    title: "Mixer Overview",
    subtitle: "Sand mixer reference",
    body: `Summary
Purpose: Mix sand and binder so the machine has usable mixed sand for production.
Main Use: Support normal machine operation
Main Control: Mixer panel and touch screen

What the Operator Is Using
1. Control cabinet
2. Touch screen / operator panel
3. Mixing chamber and door
4. Binder cabinet and lines
5. Sand dosing section
6. Air supply section

Basic Workflow
1. The mixer brings in sand.
2. Binder is added to the sand.
3. The material is mixed in the mixing chamber.
4. Mixed sand is delivered for production use.
5. The operator monitors the mixer from the panel and touch screen.

Main Modes
- Auto: Normal production mode
- Manual: Used when you need direct control of mixer functions
- Set-up: Used for controlled setup work, not normal production

Operator Notes
Use Auto for normal running.
Use Manual only when a procedure calls for it.
Use Set-up only when required for setup or controlled adjustment work.
If the mixer is not behaving normally, go to Troubleshooting or the confirmed mixer procedure pages first.`,
  },

  "mixer/settings": {
    title: "Mixer Settings",
    subtitle: "Mixer settings reference",
    body: `REFERENCE ONLY

Use this page as a quick operator guide to the mixer controls and screens.
Do not change recipe or setup values unless the job, procedure, or authorized setup process calls for it.

Summary
Purpose: Help operators understand the main mixer controls, screens, and normal setting-related actions.
Main Use: Check status, confirm mode, use manual functions when required, and return the mixer to a ready state.

Main Controls
1. CONTROL OFF / ON powers the mixer controls.
2. MANUAL / AUTO selects normal running mode or manual control mode.
3. ACKNOWLEDGE CABIN DOORS is used after the door condition is confirmed and ready.
4. WORKING POSITION runs the selected function in the working direction.
5. START POSITION runs the selected function back to its start or home direction.
6. Set-up mode is a keyed function and is not normal production mode.

Main Screens
1. Start screen: mixer home screen after power-up.
2. Recipe screen: shows the active mix recipe / recipe-related values.
3. Operating modes: used to select the main mixer operating mode.
4. Order screen: shows order / production-related status.
5. Overview screen: shows overall mixer status and whether components are in the correct position.
6. Manual screen: used to directly select mixer components and functions.
7. Messages screen: shows active messages or faults that need review or acknowledgment.

Normal Running
1. Power the mixer up and bring up the start screen.
2. Turn CONTROL ON.
3. Acknowledge cabin doors if required.
4. Put the mixer in AUTO for normal production.
5. On the overview screen, confirm the required system positions are made.
6. Use RELEASE / sand demand only when the machine and mixer are ready for production.

Using Manual Mode
1. Put MANUAL / AUTO in Manual.
2. Open the Manual screen.
3. Select the component or function you want to move.
4. Hold WORKING POSITION or START POSITION to move that function.
5. The lamp blinks while the movement is still happening.
6. When the end position is reached, the lamp turns on solid / green.
7. Releasing the button stops the movement right away.

Functions Operators May Use in Manual
1. Sand dosing container
   - Working position: dose sand
   - Start position: fill the sand dosing container
2. Binder tube 1
   - Working position: blow out binder tube 1
   - Start position: suck binder into binder tube 1
3. Binder tube 2
   - Working position: blow out binder tube 2
   - Start position: suck binder into binder tube 2
4. Sand gate
   - Working position: open emptying slider
   - Start position: close emptying slider
5. Sand chute
   - Working position: move chute to Test Drop
   - Start position: move chute to Machine
6. Mixer motor
   - Working position: switch mixer motor on
   - Start position: switch mixer motor off

Start Position Check
Use this when the mixer needs to be returned to a ready state.
1. Put MANUAL / AUTO in Manual.
2. Open the Manual screen.
3. Select Sand Gate.
4. Hold START POSITION to close the emptying slider.
5. Confirm the required binder levels are reached.
6. Put MANUAL / AUTO back in Auto.
7. On the overview screen, make sure the start-position status is made for all required components.

Mode Guide
1. Auto: normal production mode
2. Manual: used for direct operator control of mixer functions
3. Set-up: keyed setup mode for controlled adjustment work only, not normal production

Operator Notes
Use Auto for normal running.
Use Manual only when a procedure calls for direct control.
Do not use Set-up as a normal operating mode.
If the overview screen does not show the mixer in the correct ready position, do not guess.
If a function will not make position, keeps blinking, or the screen values do not match the job, stop and escalate.
Do not change recipe or setup values unless you are following the approved process.`,
  },

  "mixer/checks": {
    title: "Mixer Checks",
    subtitle: "Mixer inspection reference",
    body: `REFERENCE ONLY

Use this page as a quick operator check guide before running the mixer, while getting it ready, and when returning it to a ready state.

Summary
Purpose: Help operators verify the mixer is safe, ready, and in the correct condition for production.
Main Use: Pre-run checks, start-position checks, and normal ready-state checks.

Before Running
1. Make sure no people or materials are in the danger area.
2. Make sure the work area is clean and free of loose objects.
3. Make sure safety equipment is installed and working correctly.
4. Never bypass or disable safety equipment.
5. Make sure the mixer is set up correctly before trying to run it.
6. Make sure the system is switched on and has no active fault before starting Auto or Manual.

Switch-On Checks
1. Turn on the main switch so the mixer has power.
2. Confirm the start screen appears.
3. Set CONTROL ON.
4. Acknowledge the emergency stop if required.
5. Press ACKNOWLEDGE CABIN DOORS if required.
6. Confirm the mixer is powered and ready for the next step.

Auto Mode Ready Checks
1. Make sure the system is set up.
2. Make sure the mixer is switched on.
3. Make sure the mixer is in the start position.
4. Make sure there is no active fault.
5. Put MANUAL / AUTO in Auto.
6. On the mixer overview screen, make sure all required system positions show green.
7. Start production only when the mixer is confirmed ready.

Manual Mode Checks
1. Use Manual only when a procedure calls for direct control.
2. Make sure the system is switched on.
3. Make sure there is no active fault.
4. Open the Manual screen.
5. Select only the function you need.
6. Hold WORKING POSITION or START POSITION until the move is complete.
7. Watch for blinking while the movement is still happening.
8. Confirm the position light turns solid / green before treating the move as complete.

Start Position Checks
Use this when returning the mixer to a ready state.
1. Put MANUAL / AUTO in Manual.
2. Open the Manual screen.
3. Select Sand Gate.
4. Hold START POSITION to close the emptying slider.
5. Make sure the emptying slider is closed.
6. Check that the required binder levels have been reached.
7. Put MANUAL / AUTO back in Auto.
8. On the overview screen, make sure the start-position status is green for all required components.

Functions to Confirm in Manual
1. Sand gate closes correctly.
2. Sand chute returns to Machine position when required.
3. Mixer motor turns on and off correctly when commanded.
4. Binder tube functions respond correctly when used by procedure.
5. Sand dosing functions respond correctly when used by procedure.

While Running
1. Watch for faults before and during operation.
2. Make sure the mixer overview still shows the system in the correct condition.
3. If the mixer does not make position, keeps blinking, or does not return ready, do not guess.
4. Stop and escalate if the mixer will not reach the required ready condition.

Stop and Escalate
1. Safety equipment is missing, damaged, or not working.
2. The work area is not clear.
3. The mixer has an active fault.
4. A component will not make position.
5. A light keeps blinking and never confirms the move.
6. Start position will not make.
7. Binder level is not where it needs to be.
8. The mixer screen does not show the expected ready condition.

Operator Notes
Use Auto for normal production.
Use Manual only for controlled operator actions.
Do not treat blinking as complete.
Use green / confirmed status before moving on.
If the mixer is not in the correct ready state, stop and get help before production continues.`,
  },

  "mixer/cleaning": {
    title: "Mixer Cleaning",
    subtitle: "Mixer cleaning reference",
    body: `Summary
Purpose: Clean sand out of the mixer and clear binder holes before material hardens.
When: End of shift or during a box change
Machine State: Laempe powered on
Mixer Mode Used: Manual

Steps
1. Leave the Laempe powered on.
2. Go upstairs to the mixer.
3. Put the mixer in Manual mode.
4. On the mixer screen, highlight Sand Slide.
5. Move the sand slide from Machine to Test Drop.
6. Important: when moving the sand slide, hold the button until it stops blinking and turns green before releasing the button.
7. Turn the power button to the left. This stops the mixer and the vacuum on the door.
8. Once it is safe, open the mixer door.
9. Use the air wand to blow all sand out of the mixer.
10. Make sure all loose sand is removed.
11. Clean the seal on the mixer door.
12. Use a long tool, such as a long Allen wrench, to clear the binder holes so material does not harden in them.
13. Close the mixer door.
14. Latch the door securely.
15. Turn the power button to the right.
16. Make sure Sand Slide is still highlighted.
17. Use the + and - buttons to move the sand slide back to Machine.
18. Put the mixer back in Auto mode.

Operator Notes
Do not open the mixer door until the mixer and door vacuum are stopped.
Make sure all sand is cleared out before closing the door.
Make sure the door seal is clean before latching.
Make sure the sand slide fully changes position before releasing the button.`,
  },

  "safety/box-changes-and-cleaning": {
    title: "Box Changes and Cleaning",
    subtitle: "LOTO reference",
    body: `Summary
Purpose: Place the machine in a safe state for box changes and cleaning.
LOTO ID: L-25 (2)
Facility: Lawrenceville
Area: Core Room
Lockout Points: 1
Electrical: 480V / 3 phase
Air: N/A
Water: N/A

Steps
1. Notify affected personnel.
2. Identify the correct machine and verify you are following the correct procedure.
3. Shut down / isolate the machine using the identified disconnect point.
4. Apply personal lock and tag.
5. Verify isolation before starting work.
6. Attempt restart / test for zero energy according to procedure.
7. Perform box change or cleaning work only after verification is complete.

Return to Service
1. Verify tools, material, and personnel are clear.
2. Remove lock and tag according to procedure.
3. Restore energy.
4. Verify machine is ready for normal operation.
5. Notify affected personnel that the machine is back in service.

Warning
This page is a training/reference version.
Operators must still follow the approved plant LOTO procedure.`,
  },

  "safety/laempe-cleaning-safety": {
    title: "Laempe Cleaning Safety",
    subtitle: "Detailed safety reference",
    body: `REFERENCE ONLY

Always follow the official plant JSA and the approved safety procedure before performing this task.

Summary
Purpose: Provide operators with a detailed quick-reference for Laempe cleaning.

Before Cleaning
1. Verify the machine is out of operation.
2. Verify the safety pin is installed.
3. Verify required lockout / isolation is complete before cleaning.
4. Place cardboard under the chute before cleaning begins.
5. Make sure the area is clear of loose sand and trip hazards.
6. Confirm the task is understood before starting.
7. Do not begin cleaning if the machine condition or sequence is unclear.

Required PPE
1. Safety glasses
2. Hearing protection
3. Safety toe shoes
4. Hard hat
5. Gloves
6. Face shield
7. Tyvek suit if required for the task or area

Main Hazards
1. Slip and trip hazards from sand and debris
2. Pinch points around shell, eject, and moving areas
3. Falling core or shell
4. Strain from lifting or handling material
5. Dust and debris exposure during blowdown and cleaning
6. Hand and finger injury during handling
7. Injury risk if cleaning starts before the machine is properly prepared

Safe Work Requirements
1. Use a proper grip before lifting.
2. Lift carefully and use two hands when needed.
3. Keep hands and fingers clear when lowering shells or working near pinch points.
4. Lower parts slowly and under control.
5. Maintain safe footing while moving around sand and debris.
6. Do not clean unless the machine is in a safe state and approved for cleaning.
7. Stop immediately if the task becomes unsafe or conditions change.

Cleaning Task Reminders
1. Blow down and clean approved areas only.
2. Remove sand buildup before it hardens.
3. Clean carefully around the chute and other buildup points as required by procedure.
4. Use approved tools for cleaning and buildup removal.
5. Recheck the area before returning the machine to normal condition.

Stop and Escalate
1. The safety pin is missing or cannot be confirmed.
2. Required lockout / isolation has not been confirmed.
3. Machine condition is unclear.
4. Buildup makes the task unsafe.
5. A part, shell, or core appears unstable.
6. The cleaning area cannot be reached safely.
7. You are unsure which approved procedure applies.

IMPORTANT

This page is a quick operator reference only.

Always check and follow the official plant JSA / approved safety document before performing Laempe cleaning.`,
  },

  "safety/corebox-loading-safety": {
    title: "Corebox Loading Safety",
    subtitle: "Detailed safety reference",
    body: `REFERENCE ONLY

Always follow the official plant JSA and the approved safety procedure before performing this task.

Summary
Purpose: Provide operators with a detailed quick-reference for corebox loading and installation on the Laempe.

Before Loading
1. Verify the correct core box is being moved for the job.
2. Verify the hoist is the required lifting device for the task.
3. Confirm the hoist and lifting components are in safe working condition.
4. Bring the core box into position on the cart so it can be hooked safely.
5. Make sure the travel path and work area are clear before lifting.
6. Confirm all required personnel are clear of the lift area.
7. Do not begin if the load is unstable or the setup is unclear.

Required PPE
1. Safety glasses
2. Hearing protection
3. Safety toe shoes
4. Gloves
5. Hard hat
6. Fire-retardant clothing if required for the task or area

Main Hazards
1. Struck-by hazard from hoist movement or shifting load
2. Falling part or dropped core box
3. Hand and finger pinch points during hook-up, alignment, and loading
4. Strain from handling equipment or guiding the load
5. Burns or skin contact from hot core box surfaces
6. Contact with moving core box during positioning
7. Injury risk from standing under or too close to a suspended load

Safe Work Requirements
1. Use the hoist for all required core box lifting.
2. Attach hoist hooks correctly at all four corners as required by procedure.
3. Maintain control of the hoist pendant and load movement at all times.
4. Keep lifting device legs, chains, and hooks from twisting or tangling.
5. Never stand under a suspended load.
6. Keep hands and fingers clear of latch points, clamps, and pinch areas.
7. Keep all extremities clear while the core box is being moved or aligned.
8. Avoid skin contact if the core box is hot.
9. Stop immediately if the load shifts, binds, or becomes unstable.

Loading Task Reminders
1. Move the core box into position so it can be hooked safely to the hoist.
2. Hook the hoist to the core box at all required points.
3. Lift slowly and under control.
4. Stop movement immediately if the box begins moving unsafely toward a person or machine surface.
5. Align the box carefully before separating or positioning the required sections.
6. Use the control panel to place ejectors in the required position.
7. Use the control panel to lock the top part and move the core box into position as required by procedure.
8. With the access area open and safe, use the hoist to place the remaining section into the machine.
9. Verify alignment and positioning before continuing.

Stop and Escalate
1. The hoist or lifting hardware is damaged or not operating correctly.
2. The load cannot be controlled safely.
3. The core box shifts, twists, or becomes unstable.
4. A hook, chain, or lifting leg is not seated correctly.
5. The box is too hot to handle safely.
6. Alignment cannot be made safely.
7. You are unsure which approved procedure applies.

IMPORTANT

This page is a quick operator reference only.

Always check and follow the official plant JSA / approved safety document before performing corebox loading.`,
  },

  "safety/corebox-removal-safety": {
    title: "Corebox Removal Safety",
    subtitle: "Detailed safety reference",
    body: `REFERENCE ONLY

Always follow the official plant JSA and the approved safety procedure before performing this task.

Summary
Purpose: Provide operators with a detailed quick-reference for corebox removal on the Laempe.

Before Removal
1. Verify the correct core box is being removed.
2. Verify the hoist is the required lifting device for the task.
3. Confirm the hoist and lifting components are in safe working condition.
4. Make sure the work area and travel path are clear before removal begins.
5. Confirm the receiving cart is available and positioned safely.
6. Confirm all required personnel are clear of the lift area.
7. Do not begin if the load is unstable or the removal sequence is unclear.

Required PPE
1. Safety glasses
2. Hearing protection
3. Safety toe shoes
4. Gloves
5. Hard hat
6. Fire-retardant uniform if required for the task or area

Main Hazards
1. Pinch points during movement, alignment, and hook-up
2. Strain to wrist, elbow, shoulder, and back
3. Eye or face hazard from air nozzle use
4. Struck-by hazard from falling part or tool
5. Hand and finger pinch points during handling
6. Struck-by hazard from hoist movement or suspended load
7. Burns or skin contact from hot core box surfaces
8. Contact with moving core box during removal

Safe Work Requirements
1. Use the hoist for all required core box lifting.
2. Maintain control of the hoist hook and pendant at all times.
3. Keep lifting device legs, chains, and hooks from twisting or tangling.
4. Never stand under a suspended load.
5. Keep hands and fingers clear of clamps, pinch points, and moving areas.
6. Keep all extremities clear while the core box is being moved or aligned.
7. Do not use the air nozzle unless it has a clear intended target.
8. Avoid skin contact if the core box is hot.
9. Stop immediately if the load shifts, binds, or becomes unstable.

Removal Task Reminders
1. Open the access door as required by procedure.
2. Use the control panel to move the core box down out of the top of the machine.
3. Once accessible, blow away sand buildup and loose material only as required by procedure.
4. Use the control panel to slide the core box out from under the drag clamp.
5. Install box stops as required before continuing.
6. Bring the hoist into the removal area in a controlled manner.
7. Position the receiving cart safely to accept the core box.
8. Attach hoist hooks correctly at all required corners.
9. Lift the core box slowly and move it to the receiving cart under control.
10. Once clear, remove hooks and return the hoist to the proper area.

Stop and Escalate
1. The hoist or lifting hardware is damaged or not operating correctly.
2. The load cannot be controlled safely.
3. The core box shifts, twists, or becomes unstable.
4. A hook, chain, or lifting leg is not seated correctly.
5. The box is too hot to handle safely.
6. The receiving cart cannot be positioned safely.
7. You are unsure which approved procedure applies.

IMPORTANT

This page is a quick operator reference only.

Always check and follow the official plant JSA / approved safety document before performing corebox removal.`,
  },

  "safety/repairs-and-preventive-maintenance": {
    title: "Repairs and Preventive Maintenance",
    subtitle: "LOTO reference",
    body: `Summary
Purpose: Place the machine in a safe state for repairs and preventive maintenance.
LOTO ID: L-25
Facility: Lawrenceville
Area: Core Room
Lockout Points: 1
Electrical: 480V / 3 phase
Air: N/A
Water: N/A

Steps
1. Notify affected personnel.
2. Identify the correct machine and verify you are following the correct procedure.
3. Shut down / isolate the machine using the identified disconnect point.
4. Apply personal lock and tag.
5. Verify isolation before starting work.
6. Attempt restart / test for zero energy according to procedure.
7. Perform repairs or preventive maintenance only after verification is complete.

Return to Service
1. Verify tools, material, and personnel are clear.
2. Remove lock and tag according to procedure.
3. Restore energy.
4. Verify machine is ready for normal operation.
5. Notify affected personnel that the machine is back in service.

Warning
This page is a training/reference version.
Operators must still follow the approved plant LOTO procedure.`,
  },

  "loadbox/load-unload/automatic": {
    title: "Auto Load",
    subtitle: "Corebox setup reference",
    body: `AUTOMATIC COREBOX LOADING (CRANE + HMI)

1. Inspect crane for wear; ensure hooks/chains are working and safe.
2. Lower crane and attach bottom hooks/chains to the corebox.
3. CRITICAL: Confirm all 4 transport hooks connecting the two halves are engaged so the whole box lifts together.
4. Lift slowly. Stay arm’s length away and never stand under a suspended load.
5. Place on carriage with label "FRONT" facing you.
6. Ensure box is seated level.
7. Confirm pins are seated in front and rear.
8. CRITICAL: After seating box, remove all 4 transport hooks. Leaving them installed can break something during load/clamp.
9. Remove chains and move hoist out of the way.
10. On HMI: Database → dropdown select box → Load Corebox button.
11. Verify top-left display shows correct box loaded.
12. Mode screen: ensure Clamp highlighted.
13. Put machine in Auto and press green Start; machine loads box automatically.
14. Critical note: corebox halves are connected by 4 transport hooks; after seating box, remove them so it can load without breaking.

HIGH-RISK MISTAKES (DAMAGE RISK)

15. Transport hooks left installed (damage risk).
16. Box facing wrong direction ("FRONT" not facing you).
17. Pins not seated front/rear.
18. Wrong corebox selected in Database.
19. Standing too close during lift / under suspended load.`,
  },

  "loadbox/common-issues": {
    title: "Common Corebox Issues",
    subtitle: "Corebox setup reference",
    body: `Common Corebox Issues placeholder.

We will build this section after the core reference and auto recovery flow are locked.`,
  },

  "loadbox/auto-recovery/table-lifted-auto-stopped": {
    title: "Table lifted but auto stopped",
    subtitle: "Auto Load Recovery (Manual)",
    body: `Summary
Use this when auto load stops after the table lifts close to the gas carriage position, but does not fully make the required position.

What it means
The table is close, but not far enough to make the exact position. The correct position is confirmed when the required button turns green.

Recover this state
1. Put the machine in Manual.
2. Highlight Table.
3. Move the table until the required button turns green.
4. Green confirms the table is now in the correct position.

Finish the load manually from here
5. Highlight Cope Eject and place it in the bottom position.
6. Highlight Gas Carriage.
7. Hold the key and move the gas carriage in.
8. Once the gas carriage is all the way in, highlight Table again.
9. Hold the key and move the table up until the gas carriage makes contact with the table.
10. Go to the Main Movements page.
11. Highlight Cope Eject.
12. Hold the key and press and hold the + button until it turns green.
13. This step creates the vacuum.
14. Go back to the Manual page.
15. Highlight Cope Eject and move it to the top position.
16. Highlight Table and move it down until it is all the way down.
17. Highlight Gas Carriage and move it back until it is all the way back.
18. Highlight Table and move it up until it is about 3 inches from the top.
19. Highlight Top Part and move it down until it touches the box.
20. Go to the Main Movements page.
21. Highlight Top Part.
22. Turn and hold the key and press and hold the + button until it turns green.
23. Go back to the Manual page.
24. Lower the Table.
25. Raise the Top Part.
26. Load recovery is complete.

Operator Notes
Do not guess the position.
Use the green confirmation to know you are in the right spot.
Once auto is interrupted, finish the rest manually.`,
  },

  "loadbox/auto-recovery/vacuum-wont-make": {
    title: "Vacuum won't make",
    subtitle: "Auto Load Recovery (Manual)",
    body: `Summary
Use this when auto load reaches the vacuum step but vacuum does not make.

What it means
This usually happens during the cope eject / vacuum part of the load.

Recover this state
1. Lower the Table.
2. Move Cope Eject to the top position.
3. Move Cope Eject back to the bottom position.
4. Raise the Table back up.
5. Try again to make vacuum.
6. If vacuum makes and the cope eject turns green, continue the rest manually from there.

Finish the load manually from here
7. Go back to the Manual page.
8. Highlight Cope Eject and move it to the top position.
9. Highlight Table and move it down until it is all the way down.
10. Highlight Gas Carriage and move it back until it is all the way back.
11. Highlight Table and move it up until it is about 3 inches from the top.
12. Highlight Top Part and move it down until it touches the box.
13. Go to the Main Movements page.
14. Highlight Top Part.
15. Turn and hold the key and press and hold the + button until it turns green.
16. Go back to the Manual page.
17. Lower the Table.
18. Raise the Top Part.
19. Load recovery is complete.

Operator Notes
Do not continue loading if vacuum still does not make after retrying.
If the problem repeats, stop and escalate.
Once auto is interrupted, finish the rest manually.`,
  },

  "loadbox/auto-recovery/carriage-wont-move": {
    title: "Carriage won't move",
    subtitle: "Auto Load Recovery (Manual)",
    body: `Summary
Use this when the carriage does not move during load recovery.

Status
Placeholder for now.

Operator Notes
We will add the exact recovery + remaining manual steps next.`,
  },

  "loadbox/auto-recovery/pneu-error-during-load": {
    title: "PNEU error during load",
    subtitle: "Auto Load Recovery (Manual)",
    body: `Summary
Use this when a PNEU error stops the load.

Status
Placeholder for now.

Operator Notes
We will add the exact recovery + remaining manual steps next.`,
  },

  "loadbox/auto-recovery/clamp-wont-turn-green": {
    title: "Clamp won't turn green",
    subtitle: "Auto Load Recovery (Manual)",
    body: `Summary
Use this when a clamp step does not complete and turn green.

Status
Placeholder for now.

Operator Notes
We will add the exact recovery + remaining manual steps next.`,
  },
};