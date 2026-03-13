export const CHECKLISTS = [
  {
    key: "startShift",
    title: "Start of Shift Checklist",
    sections: [
      {
        label: "Job / Plan",
        items: [
          "Verify today’s job and priority on the production board.",
          "Verify the quantity needed for the shift.",
        ],
      },
      {
        label: "Corebox / Cores",
        items: [
          "Verify the correct corebox for the job.",
          "Verify cores are acceptable quality and match the corebox being run.",
        ],
      },
      {
        label: "Machine / Materials",
        items: [
          "Verify sand supply is adequate for the run.",
          "Verify machine is ready to run.",
        ],
      },
      {
        label: "Paperwork & Labels",
        items: [
          "Complete the production log / scrap & downtime sheet.",
          "Print labels with parts, date, shift, and quantity.",
        ],
      },
      {
        label: "Escalation",
        items: [
          "If anything is missing or abnormal, notify supervisor/lead before starting production.",
        ],
      },
    ],
  },
  {
    key: "endShift",
    title: "End of Shift Checklist",
    sections: [
      {
        label: "Production Closeout",
        items: [
          "Verify final quantity produced for the shift.",
          "Move completed parts to the correct designated area.",
        ],
      },
      {
        label: "Scrap / Documentation",
        items: [
          "Record all scrap and downtime on the production log / scrap & downtime sheet.",
          "Verify paperwork is complete and accurate before leaving.",
        ],
      },
      {
        label: "Machine Condition",
        items: [
          "Return machine to start position.",
          "Clean machine as required.",
          "Clean the mixer and return it to start position.",
          "Empty trash and clear work area around the machine.",
        ],
      },
      {
        label: "Machine State",
        items: [
          "Leave the carriage out.",
          "Leave the machine in Manual mode.",
        ],
      },
    ],
  },
];