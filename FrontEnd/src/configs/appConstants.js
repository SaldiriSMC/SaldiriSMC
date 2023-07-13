export const publicHeader = {
  headers: {
    'Accept': '*/*',
    'Content-Type': 'application/json',
    'X-Tenant': '432D4C80-240A-44FE-9D9D-64F002985C16'
  }
}

export const patchHeader = {
  headers: {
    'Accept': '*/*',
    'Content-Type': 'application/json-patch+json',
    'X-Tenant': '432D4C80-240A-44FE-9D9D-64F002985C16'
  }
}

export const patientActionDropdown = [
  {
    id: 1,
    label: "Open Patient Chart"
  },
  {
    id: 2,
    label: "Schedule Appointment"
  },
  {
    id: 3,
    label: "Submit Program Application"
  },
]
export const sponsorshipsActionDropdown = [
  {
    id: 1,
    label: "Resume"
  }
]
export const sponsorshipsAction = [
  {
    id: 2,
    label: "Discontinue"
  },
]
export const noteActionDropdown = {
  'TEMPLATES': {
    label: "Template",

    actions: [
      {
        id: 1,
        label: "Edit Form"
      },
      {
        id: 2,
        label: "Make a Copy"
      },
      {
        id: 3,
        label: "Delete"
      },
      {
        id: 4,
        label: "Edit Fields"
      },
      {
        id: 5,
        label: "Share Template"
      },
    ]
  },
  'TEMPLATESSHARE': {
    label: "Template",

    actions: [
      {
        id: 2,
        label: "Make a Copy"
      },
      {
        id: 4,
        label: "View Template"
      },
    ]
  },
  'MARKACTIVE': {
    label: 'Activate User',
    menu: 'Mark Active',
    actions: [
      {
        id: 1,
        label: "View Task"
      },
      {
        id: 3,
        label: "Mark Inactive"
      }
    ]
  },
  'APPROVE': {
    label: 'New User',
    menu: 'Approve',
    actions: [
      {
        id: 1,
        label: "Review"
      },
      // {
      //   id: 2,
      //   label: "View Profile"
      // },
      {
        id: 3,
        label: "Reject User"
      },
      {
        id: 4,
        label: "Edit"
      }
    ]
  },
  'PROFILE_REJECTED': {
    label: 'User Rejected',
    menu: 'Approve',
    actions: [
      {
        id: 1,
        label: "Review"
      },
      // {
      //   id: 2,
      //   label: "View Profile"
      // },
      {
        id: 3,
        label: "Reject User"
      },
      {
        id: 4,
        label: "Edit"
      }
    ]
  }
}
export const taskActionDropdown = {
  'TASK_GENERATION_USER_A': {
    menu: 'Mark Done',
    value: 'DONE',
    actions: [
      {
        value: "DONE",
        label: "Mark Done"
      },
      {
        value: "REVIEW",
        label: "Review"
      },
      {
        value: "DECLINE",
        label: "Decline"
      },
    ],
  },
  'TASK_GENERATION_USER_B': {
    menu: 'Mark Review',
    value: 'MARK_REVIEW',
    actions: [
      {
        value: "MARK_REVIEW",
        label: "Mark Reviewed"
      },
      {
        value: "REVIEW",
        label: "Review"
      },
      {
        value: "DECLINE",
        label: "Decline"
      },
    ],
  },
  'TASK_GENERATION_USER_C': {
    menu: 'Approve',
    value: 'APPROVE_USER',
    actions: [
      {
        value: "APPROVE_USER",
        label: "Approve"
      },
      {
        value: "VIEW_USER",
        label: "View User Profile"
      },
      {
        value: "REVIEW",
        label: "Review"
      },
      {
        value: "DECLINE",
        label: "Decline"
      },
    ],
  },
  'TASK_GENERATION_USER_D': {
    menu: 'Deactivate User',
    value: 'DEACTIVATE_USER',
    actions: [
      {
        value: "DEACTIVATE_USER",
        label: "Deactivate User"
      },
      {
        value: "VIEW_USER",
        label: "View User Profile"
      },
      {
        value: "REVIEW",
        label: "Review"
      },
      {
        value: "DECLINE",
        label: "Decline"
      },
    ],
  },
  'TASK_GENERATION_USER_E': {
    menu: 'Activate User',
    value: 'ACTIVATE_USER',
    actions: [
      {
        value: "ACTIVATE_USER",
        label: "Activate User"
      },
      {
        value: "VIEW_USER",
        label: "View User Profile"
      },
      {
        value: "REVIEW",
        label: "Review"
      },
      {
        value: "DECLINE",
        label: "Decline"
      },
    ],
  },
  'TASK_GENERATION_USER_F': {
    menu: 'Sign Document',
    value: 'REVIEW',
    actions: [
      // {
      //   value: "REVIEW_NOTES",
      //   label: "Review Notes"
      // },
      // {
      //   value: "REVIEW",
      //   label: "Review"
      // },
    ],
  },
  'TASK_GENERATION_USER_G': {
    menu: 'Review Application',
    value: 'REVIEW_APPLICATION',
    actions: [
      {
        value: "REVIEW_APPLICATION",
        label: "Review Application"
      },
      // {
      //   value: "REVIEW",
      //   label: "Review"
      // },
    ],
  },
  'TASK_GENERATION_USER_H': {
    menu: 'Issue Order',
    value: 'DONE',
    actions: [
      {
        value: "DONE",
        label: "Issue Order"
      },
      {
        value: "REVIEW",
        label: "Review"
      },
      {
        value: "DECLINE",
        label: "Decline"
      },
    ],
  },
  'TASK_GENERATION_USER_I': {
    menu: 'Prescribe',
    value: 'DONE',
    actions: [
      {
        value: "DONE",
        label: "Prescribe"
      },
      {
        value: "REVIEW",
        label: "Review"
      },
      {
        value: "DECLINE",
        label: "Decline"
      },
    ],
  },
  'TASK_GENERATION_USER_REFERAL': {
    menu: 'Book Visit',
    value: 'BOOK_VISIT',
    actions: [
      {
        value: "BOOK_VISIT",
        label: "Book Visit"
      },
      {
        value: "REVIEW",
        label: "Review"
      },
      {
        value: "DECLINE",
        label: "Decline"
      },
    ],
  },
  'TASK_GENERATION_SYSTEM': {
    menu: 'Activate',
    value: "DONE",
    actions: [
      {
        value: "DONE",
        label: "Mark Done"
      },
      {
        value: "REVIEW",
        label: "Review"
      },
      {
        value: "DECLINE",
        label: "Decline"
      },
    ],
  },
  'TASK_GENERATION_SYSTEM_A': {
    menu: 'Approve',
    value: 'DONE',
    actions: [
      {
        value: "DONE",
        label: "Approve"
      },
      {
        value: "DECLINE",
        label: "Decline"
      },
    ],
  },
}

export const heightMetricsConfig = [
  {
    id: 'ft',
    label: 'Imperial'
  },
  {
    id: 'cm',
    label: 'Metric'
  },
]

export const weightMetricsConfig = [
  {
    id: 'kg',
    label: 'Metric'
  },
  {
    id: 'lbs',
    label: 'Imperial'
  },
]

export const appointmentActionDropdown = [
  {
    id: 3,
    label: "Start Visit"
  },
  {
    id: 1,
    label: "View Booking"
  },
  {
    id: 2,
    label: "View Summary"
  },
  
]

export const patientAppointmentActionDropdown = [
  {
    id: 1,
    label: "Reschedule"
  },
  {
    id: 2,
    label: "Cancel"
  },
]
