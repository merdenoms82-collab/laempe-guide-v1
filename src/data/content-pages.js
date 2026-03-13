export const CONTENT_PAGES = {
  basics: {
    title: "Machine Operation",
    subtitle: "Start • Run • Shutdown",
    body: `Machine operation content placeholder.

This section will hold structured startup, run, and shutdown guidance.`,
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
    body: `Mixer overview placeholder.`,
  },

  "mixer/settings": {
    title: "Mixer Settings",
    subtitle: "Mixer settings reference",
    body: `Mixer settings placeholder.`,
  },

  "mixer/checks": {
    title: "Mixer Checks",
    subtitle: "Mixer inspection reference",
    body: `Mixer checks placeholder.`,
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