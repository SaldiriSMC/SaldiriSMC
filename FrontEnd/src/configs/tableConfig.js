
export const UserInviteConfig = [
  {
    id: 'check',
    name: 'check',
    renderer: "CheckboxItem",
    align: 'left',
  },
  {
    id: "name",
    name: "name",
    renderer: "UserStatus",
    align: "left",
    label: "Name",
  },
  {
    id: "department",
    name: "department",
    renderer: "Text",
    align: "left",
    label: "Department",
  },
  {
    id: "designation",
    name: "designation",
    renderer: "Text",
    align: "left",
    label: "Designation",
  },
  {
    id: "action",
    name: "action",
    renderer: "EditDeleteAction",
    align: "right",
    label: "Actions",
  },
];
export const UserStatusConfig = [
  {
    id: "name",
    name: "name",
    renderer: "UserStatus",
    align: "left",
    label: "Name",
  },
  {
    id: "department",
    name: "department",
    renderer: "Text",
    align: "left",
    label: "Department",
  },
  {
    id: "designation",
    name: "designation",
    renderer: "Text",
    align: "left",
    label: "Designation",
  }
];
export const UserAttendanceeConfig = [
  {
    id: "timeIn",
    name: "timeIn",
    renderer: "Text",
    align: "left",
    label: "Time In",
  },
  {
    id: "timeOut",
    name: "timeOut",
    renderer: "Text",
    align: "left",
    label: "Time Out",
  },
  {
    id: "hours",
    name: "hours",
    renderer: "Text",
    align: "left",
    label: "Hours",
  },
  {
    id: "action",
    name: "action",
    renderer: "EditDeleteAction",
    align: "right",
    label: "Actions",
  },
];
export const UserAttendanceeEmpolyeConfig = [
  {
    id: "timeIn",
    name: "timeIn",
    renderer: "Text",
    align: "left",
    label: "Time In",
  },
  {
    id: "timeOut",
    name: "timeOut",
    renderer: "Text",
    align: "left",
    label: "Time Out",
  },
  {
    id: "hours",
    name: "hours",
    renderer: "Text",
    align: "left",
    label: "Hours",
  }
];
export const EmailTemplateConfig = [
  {
    id: "created_date",
    name: "created_date",
    renderer: "Text",
    align: "left",
    label: "Date",
  },
  {
    id: "subject",
    name: "subject",
    renderer: "Text",
    align: "left",
    label: "Subject",
  },
  {
    id: "body",
    name: "body",
    renderer: "TextTemplate",
    align: "left",
    label: "Body",
  },
  {
    id: "action",
    name: "action",
    renderer: "EditDeleteAction",
    align: "right",
    label: "Actions",
  },
];
export const designationConfig = [
  {
    id: "name",
    name: "name",
    renderer: "Text",
    align: "left",
    label: "Designation Name",
  },
  {
    id: "action",
    name: "action",
    renderer: "EditDeleteAction",
    align: "right",
    label: "Actions",
  },
];
export const departmentConfig = [
  {
    id: "name",
    name: "name",
    renderer: "Text",
    align: "left",
    label: "Department Name",
  },
  {
    id: "action",
    name: "action",
    renderer: "EditDeleteAction",
    align: "right",
    label: "Actions",
  },
];
export const statusConfig = [
  {
    id: "name",
    name: "name",
    renderer: "Text",
    align: "left",
    label: "Status Name",
  },
  {
    id: "action",
    name: "action",
    renderer: "EditDeleteAction",
    align: "right",
    label: "Actions",
  },
];

export const processingQueuesConfig = [
  {
    id: "date",
    name: "date",
    renderer: "Text",
    align: "left",
    label: "Date",
  },
  {
    id: "id",
    name: "id",
    renderer: "Text",
    align: "left",
    label: "Id",
  },
  {
    id: "name",
    name: "name",
    renderer: "Text",
    align: "left",
    label: "User Name",
  },
  {
    id: "userId",
    name: "userId",
    renderer: "Text",
    align: "left",
    label: "userId",
  },
  {
    id: "processedOn",
    name: "processedOn",
    renderer: "Text",
    align: "left",
    label: "Processed On",
  },

];


export const processedQueuesConfig = [
  {
    id: "date",
    name: "date",
    renderer: "Text",
    align: "left",
    label: "Date",
  },
  {
    id: "id",
    name: "id",
    renderer: "Text",
    align: "left",
    label: "Id",
  },
  {
    id: "name",
    name: "name",
    renderer: "Text",
    align: "left",
    label: "User Name",
  },
  {
    id: "userId",
    name: "userId",
    renderer: "Text",
    align: "left",
    label: "userId",
  },
  {
    id: "processedOn",
    name: "processedOn",
    renderer: "Text",
    align: "left",
    label: "Processed On",
  },
  {
    id: "finishedOn",
    name: "finishedOn",
    renderer: "Text",
    align: "left",
    label: "Finished On",
  },
];
export const faildQueuesConfig = [
  {
    id: "reason",
    name: "reason",
    renderer: "Text",
    align: "left",
    label: "Reason",
  },
  {
    id: "date",
    name: "date",
    renderer: "Text",
    align: "left",
    label: "Date",
  },
  {
    id: "id",
    name: "id",
    renderer: "Text",
    align: "left",
    label: "Id",
  },
  {
    id: "name",
    name: "name",
    renderer: "Text",
    align: "left",
    label: "User Name",
  },
  {
    id: "userId",
    name: "userId",
    renderer: "Text",
    align: "left",
    label: "userId",
  },
  {
    id: "processedOn",
    name: "processedOn",
    renderer: "Text",
    align: "left",
    label: "Processed On",
  },
];


export const doctor = [
      
  {
    id: "test",
    name: "test",
    renderer: 'Text',
    align: "left",
    label: "test",
  },
  {
    id: "age",
    name: "age",
    renderer: 'Text',
    align: "left",
    label: "age",
  },
  {
    id: "desise",
    name: "desise",
    renderer: 'Text',
    align: "left",
    label: "desise",
  },
  {
    id: "action",
    name: "action",
    renderer: "EditDeleteAction",
    align: "right",
    label: "Actions",
  },
];
export const carList = [
      
  {
    id: "test",
    name: "test",
    renderer: 'Text',
    align: "left",
    label: "test",
  },
  {
    id: "car name",
    name: "car name",
    renderer: 'Text',
    align: "left",
    label: "car name",
  },
  {
    id: "color",
    name: "color",
    renderer: 'Text',
    align: "left",
    label: "color",
  },
  {
    id: "action",
    name: "action",
    renderer: "EditDeleteAction",
    align: "right",
    label: "Actions",
  },
];
  

export const tableConfig = [
  {
    id: "name",
    name: "name",
    renderer: "Text",
    align: "left",
    label: "Table Name",
  },
  {
    id: "columns",
    name: "columns",
    renderer: "Text",
    align: "left",
    label: "Columns No",
  },
  {
    id: "tableDate",
    name: "tableDate",
    renderer: "Text",
    align: "left",
    label: "Created Date",
  },
  {
    id: "action",
    name: "action",
    renderer: "DownloadAction",
    align: "right",
    label: "Actions",
  },

];
export const UserList = [
      
  {
    id: "User Name",
    name: "User Name",
    renderer: 'Text',
    align: "left",
    label: "User Name",
  },
  {
    id: "User Age",
    name: "User Age",
    renderer: 'Text',
    align: "left",
    label: "User Age",
  },
  {
    id: "User Type",
    name: "User Type",
    renderer: 'Text',
    align: "left",
    label: "User Type",
  },
  {
    id: "action",
    name: "action",
    renderer: "EditDeleteAction",
    align: "right",
    label: "Actions",
  },
];
  