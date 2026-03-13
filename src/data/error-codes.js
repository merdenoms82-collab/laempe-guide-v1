export const ERROR_CODES = [
  {
    id: "mct0326",
    code: "MCT0326",
    area: "Carriage / Gas carriage",
    message:
      'Gas carriage: No release for "Move out (Shot)". Not all conditions for running the movement have been fulfilled.',
    operatorMeaning:
      "The gas carriage is not being allowed to move out for the shot step because the machine is missing one or more required conditions.",
    status: "pending confirmation",
    firstChecks: [
      "Verify machine is in the expected mode/state.",
      "Check whether carriage movement conditions are fully made.",
      "Check related carriage, table, or top-part movement messages.",
      "Check for blocked movement or incomplete sequence.",
    ],
    whenCallMaint:
      "Call maintenance if movement conditions appear correct but release is still not granted.",
  },
  {
    id: "mct0230",
    code: "MCT0230",
    area: "Carriage / Gas carriage",
    message:
      'Carriage: No release for "move out". Not all conditions for running the movement have been fulfilled.',
    operatorMeaning:
      "The carriage is not being allowed to move out because the machine is missing a required release condition.",
    status: "pending confirmation",
    firstChecks: [
      "Verify carriage path is clear.",
      "Check whether required machine states are made.",
      "Check if another movement fault is blocking carriage release.",
    ],
    whenCallMaint:
      "Call maintenance if carriage will not move out after condition checks.",
  },
  {
    id: "mct0327",
    code: "MCT0327",
    area: "Carriage / Gas carriage",
    message:
      'Gas carriage: No release for "Move in (Gassing)". Not all conditions for running the movement have been fulfilled.',
    operatorMeaning:
      "The gas carriage is not being allowed to move into gassing position because the machine is not fully ready for that step.",
    status: "pending confirmation",
    firstChecks: [
      "Verify machine is ready for the gassing step.",
      "Check if carriage in/out sequence was completed properly.",
      "Check for related top part or table position faults.",
    ],
    whenCallMaint:
      "Call maintenance if the gas carriage still cannot move in after sequence checks.",
  },
  {
    id: "mct0231",
    code: "MCT0231",
    area: "Carriage / Gas carriage",
    message:
      'Carriage: No release for "move in". Not all conditions for running the movement have been fulfilled.',
    operatorMeaning:
      "The carriage is not being allowed to move in because the machine is missing one or more required conditions.",
    status: "pending confirmation",
    firstChecks: [
      "Verify carriage path is clear.",
      "Check if carriage move-out or other steps completed first.",
      "Check for blocking faults elsewhere in the cycle.",
    ],
    whenCallMaint:
      "Call maintenance if carriage move-in is still blocked after checks.",
  },
  {
    id: "mct0309",
    code: "MCT0309",
    area: "Table",
    message: 'Table: Position 6 — "Gassing" not reached!',
    operatorMeaning:
      "The table did not make it to the gassing position when the machine expected it to.",
    status: "pending confirmation",
    firstChecks: [
      "Verify the table actually reached the expected gassing position.",
      "Check for blocked movement or incomplete travel.",
      "Check related table raise/lower messages.",
    ],
    whenCallMaint:
      "Call maintenance if the table cannot reach or hold the gassing position.",
  },
  {
    id: "mct0294",
    code: "MCT0294",
    area: "Table",
    message:
      'Table: No release for "lower". Not all conditions for running the movement have been fulfilled.',
    operatorMeaning:
      "The table is not being allowed to lower because the machine is missing a required release condition.",
    status: "pending confirmation",
    firstChecks: [
      "Verify machine state allows table lowering.",
      "Check if another movement is still active or incomplete.",
      "Check for interlock or sequence conditions not met.",
    ],
    whenCallMaint:
      "Call maintenance if table lowering remains blocked after checks.",
  },
  {
    id: "mct0295",
    code: "MCT0295",
    area: "Table",
    message:
      'Table: No release for "raise". Not all conditions for running the movement have been fulfilled.',
    operatorMeaning:
      "The table is not being allowed to raise because the machine is missing a required release condition.",
    status: "pending confirmation",
    firstChecks: [
      "Verify machine state allows table raising.",
      "Check if any interlock is blocking the raise command.",
      "Check related carriage/top-part sequence faults.",
    ],
    whenCallMaint:
      "Call maintenance if table raising remains blocked after checks.",
  },
  {
    id: "mct0390",
    code: "MCT0390",
    area: "Top part",
    message:
      'Top part: No release for "raise". Not all conditions for running the movement have been fulfilled.',
    operatorMeaning:
      "The top part is not being allowed to raise because the machine is missing one or more required conditions.",
    status: "pending confirmation",
    firstChecks: [
      "Verify the machine is in the expected mode/state.",
      "Check for sequence faults blocking top-part release.",
      "Check whether clamp or carriage conditions are complete.",
    ],
    whenCallMaint:
      "Call maintenance if top-part raise remains blocked after checks.",
  },
  {
    id: "mct0402",
    code: "MCT0402",
    area: "Top part",
    message:
      'Top part: Position 3 — "Move gassing carriage in/out" not reached!',
    operatorMeaning:
      "The top part did not get to the position needed for the gas carriage movement.",
    status: "pending confirmation",
    firstChecks: [
      "Verify top part reached the required position.",
      "Check whether gas carriage movement is being blocked by position mismatch.",
      "Check related top-part raise/lower messages.",
    ],
    whenCallMaint:
      "Call maintenance if the required position cannot be reached consistently.",
  },
  {
    id: "mct0391",
    code: "MCT0391",
    area: "Top part",
    message:
      'Top part: No release for "lower". Not all conditions for running the movement have been fulfilled.',
    operatorMeaning:
      "The top part is not being allowed to lower because the machine is missing a required release condition.",
    status: "pending confirmation",
    firstChecks: [
      "Verify machine state allows top-part lowering.",
      "Check if another movement step is incomplete.",
      "Check for blocking interlocks or sequence faults.",
    ],
    whenCallMaint:
      "Call maintenance if top-part lower remains blocked after checks.",
  },
  {
    id: "mct0138",
    code: "MCT0138",
    area: "Machine / Safety",
    message: "Machine: Light curtain at front (removal) triggered.",
    operatorMeaning:
      "Something is in the front light curtain area, or the light curtain is being triggered when it should be clear.",
    status: "confirmed from screen text",
    firstChecks: [
      "Verify no one or nothing is breaking the light curtain.",
      "Clear the front removal area.",
      "Check for misalignment or repeated nuisance triggering.",
    ],
    whenCallMaint:
      "Call maintenance if the light curtain appears clear but the fault remains.",
  },
  {
    id: "mct0137",
    code: "MCT0137",
    area: "Machine / Safety",
    message: "Machine: There are cores on the bottom part.",
    operatorMeaning:
      "The machine still thinks cores or material are present on the bottom part.",
    status: "confirmed from screen text",
    firstChecks: [
      "Check whether cores or debris are still on the bottom part.",
      "Verify removal sequence completed properly.",
      "Clear leftover cores only using safe approved practice.",
    ],
    whenCallMaint:
      "Call maintenance if the machine still reports cores present after safe verification.",
  },
  {
    id: "pct1318",
    code: "PCT1318",
    area: "Periphery / Communication",
    message:
      'Periphery defining station: Drive is not referenced. Start "reference movement" in manual mode.',
    operatorMeaning:
      "The drive has lost its reference position and needs to be re-referenced in manual mode.",
    status: "confirmed from screen text",
    firstChecks: [
      "Switch to manual mode if required by procedure.",
      "Run the approved reference movement.",
      "Verify the drive completes the reference successfully.",
    ],
    whenCallMaint:
      "Call maintenance if the drive will not reference or immediately faults again.",
  },
  {
    id: "pct1315",
    code: "PCT1315",
    area: "Periphery / Communication",
    message:
      "Periphery defining station message captured, full text pending confirmation.",
    operatorMeaning:
      "This code was captured, but the full machine message still needs to be confirmed.",
    status: "pending confirmation",
    firstChecks: [
      "Capture the full screen text next time it appears.",
      "Check whether the defining station is in its expected state.",
    ],
    whenCallMaint:
      "Call maintenance if the code repeats and blocks production.",
  },
  {
    id: "mct1155",
    code: "MCT1155",
    area: "Periphery / Communication",
    message:
      "Pickoff vertical message captured, full text pending confirmation.",
    operatorMeaning:
      "This code appears tied to the pickoff vertical movement/state, but the full message still needs to be confirmed.",
    status: "pending confirmation",
    firstChecks: [
      "Capture the full screen text next time it appears.",
      "Check whether the pickoff vertical movement/state is normal.",
    ],
    whenCallMaint:
      "Call maintenance if the code repeats and blocks production.",
  },
  {
    id: "mct1624",
    code: "MCT1624",
    area: "Hydraulics",
    message:
      "Hydraulics machine: Warning, tank level triggered. Check as soon as possible and eliminate error. Acknowledgment at OP on the hydraulics side.",
    operatorMeaning:
      "The hydraulic tank level warning has been triggered and needs attention soon.",
    status: "confirmed from screen text",
    firstChecks: [
      "Check hydraulic tank level per approved practice.",
      "Acknowledge at the hydraulics side if required.",
      "Do not ignore repeated low-level warnings.",
    ],
    whenCallMaint:
      "Call maintenance immediately if hydraulic level is low or the warning returns.",
  },
  {
    id: "act2979",
    code: "ACT2979",
    area: "Periphery / Communication",
    message:
      "Supply: CM module ANC20 +130-KF06 Port 1 communication fault.",
    operatorMeaning:
      "A communication fault is being reported on the listed module and port.",
    status: "confirmed from screen text",
    firstChecks: [
      "Check whether the module fault clears after normal reset/recovery steps.",
      "Look for repeated communication loss pattern.",
      "Document exact module and port shown on the message.",
    ],
    whenCallMaint:
      "Call maintenance for repeated or persistent communication faults.",
  },
];