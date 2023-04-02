import { ActivityObject, consolidateActivities, findAssociatedActivities, InputObject, ResultObject, ResultWithActivities, searchRolesByKey } from './job-roles-consolidate';
import { Activity, filterFields, searchActivitiesByCode, searchActivitiesByKey } from './activity-search';

describe('Job Roles Consolidate Utils', () => {
  const sampleInput: InputObject[] = [
    {
      "Job Role Name": "Sample Job Role",
      "Job Role Code": "JR0001",
      "Staff Group Name": "Sample Staff Group",
      "Staff Group Code": "SG0001",
      "Staff Sub Group Name": "Sample Staff Sub Group",
      "Staff Sub Group Code": "SSG0001",
      "D0001": "A0001",
      "D0002": "A0002",
      "D0003": "A0003 A0004",
      "D0010": "A0005",
      "D8001": "A0006",
      "T0850": "A0007",
      "T6090": "",
      "T6092": null
    },
    {
      "Job Role Name": "Another Job Role",
      "Job Role Code": "JR0002",
      "Staff Group Name": "Another Staff Group",
      "Staff Group Code": "SG0002",
      "Staff Sub Group Name": "Another Staff Sub Group",
      "Staff Sub Group Code": "SSG0002",
      "D0002": "A0001",
      "D0013": "",
      "D0006": "A0003 A0005",
      "D8002": "A0006",
      "T0850": "A0007 A0008",
      "T6080": null
    }
  ];

  const sampleActivities: ActivityObject[] = [
    {
      "Activity Group Name": "Sample Activity Group",
      "Activity Group Code": "D0001",
      "Activity Sub Group Name": "Sample Activity Sub Group",
      "Activity Sub Group Code": "D0002",
      "Activity Name": "Sample Activity 1",
      "Activity Code": "A0001",
      "Includes": "Sample 1",
      "Activity Description": "Sample Activity 1 Description",
      "Restricted": "",
      "Rationalisation Status": ""
    },
    {
      "Activity Group Name": "Another Activity Group",
      "Activity Group Code": "D0002",
      "Activity Sub Group Name": "Another Activity Sub Group",
      "Activity Sub Group Code": "D0003",
      "Activity Name": "Another Activity 1",
      "Activity Code": "A0002",
      "Includes": "Another 1",
      "Activity Description": "Another Activity 1 Description",
      "Restricted": "",
      "Rationalisation Status": ""
    },
    {
      "Activity Group Name": "Another Activity Group",
      "Activity Group Code": "D0002",
      "Activity Sub Group Name": "Another Activity Sub Group",
      "Activity Sub Group Code": "D0003",
      "Activity Name": "Another Activity 2",
      "Activity Code": "A0003",
      "Includes": "Another 2",
      "Activity Description": "Another Activity 2 Description",
      "Restricted": "",
      "Rationalisation Status": ""
    },
  ]
  it('should return an array of ResultObject', () => {
    const expectedOutput: any[] = [
      {
        "Job Role Name": "Sample Job Role",
        "Job Role Code": "JR0001",
        "Staff Group Name": "Sample Staff Group",
        "Staff Group Code": "SG0001",
        "Staff Sub Group Name": "Sample Staff Sub Group",
        "Staff Sub Group Code": "SSG0001",
        "activities": [

        ]
      }]


  });

  // describe('consolidateActivities', () => {
  //   it('should consolidate the activities into a single array and remove any unused columns', () => {
  //     const inputObject = {
  //       "Activity Group Name": "AG1",
  //       "Activity Group Code": "AG1",
  //       "Activity Sub Group Name": "ASG1",
  //       "Activity Sub Group Code": "ASG1",
  //       "Activity Name": "AN1",
  //       "Activity Code": "AC1",
  //       "Includes": "D0002 D0003 D0004 D0006",
  //       "Activity Description": "AD1",
  //       "Restricted": "Yes",
  //       "Rationalisation Status": "Complete"
  //     };
  //     const expectedOutput = {
  //       "Activity Group Name": "AG1",
  //       "Activity Group Code": "AG1",
  //       "Activity Sub Group Name": "ASG1",
  //       "Activity Sub Group Code": "ASG1",
  //       "Activity Name": "AN1",
  //       "Activity Code": "AC1",
  //       "activities": [
  //         "D0002",
  //         "D0003",
  //         "D0004",
  //         "D0006"
  //       ],
  //       "Restricted": "Yes",
  //       "Rationalisation Status": "Complete"
  //     };
  //     expect(consolidateActivities(inputObject)).toEqual(expectedOutput);
  //   });
  // });

  // describe('searchRolesByKey', () => {
  //   it('should return an array of InputObject with matching key and value', () => {
  //     const searchKey = 'Job Role Code';
  //     const searchValue = 'R5105';
  //     const expectedOutput = [
  //       {
  //         "Job Role Name": "Caldicott Guardian",
  //         "Job Role Code": "R5105",
  //         "Staff Group Name": "Admin & Clerical",
  //         "Staff Group Code": "S0080",
  //         "Staff Sub Group Name": "Management - A & C",
  //         "Staff Sub Group Code": "G0450",
  //         "Job Role Description": "To oversee the implementation and governance of the Caldicott Guardian function within the organisation, ensuring that the NHS organisation and its data processors comply with the Caldicott Guardian function requirements, and the Caldicott Principles, and ensuring that the organisation has appropriate arrangements in place for the sharing of patient identifiable data."
  //       }
  //     ];
  //     expect(searchRolesByKey(searchKey, searchValue)).toEqual(expectedOutput);
  //   });

  // });

});

