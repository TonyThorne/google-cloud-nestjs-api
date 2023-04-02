import * as data from '../../data/rbac-active-activities.json'

export type Activity = {
    "Activity Group Name": string,
    "Activity Group Code": string,
    "Activity Sub Group Name": string,
    "Activity Sub Group Code": string,
    "Activity Name": string,
    "Activity Code": string,
    "Includes": string,
    "Activity Description": string,
    "Restricted": string,
    "Rationalisation Status": string
};
// 
// function searchActivities(keyword: string): Activity[] {
//     return data.filter((activity) => {
//         return Object.values(activity).some((value) => value.toLowerCase().includes(keyword.toLowerCase()));
//     });
// }

export function searchActivitiesByCode(activityCode: string): Activity[] {
    return data.filter((activity) => activity["Activity Code"].toLowerCase() === activityCode.toLowerCase());
}

// search by any key
export function searchActivitiesByKey(key: keyof Activity, value: string): Activity[] {
    return data.filter((activity) => activity[key].toLowerCase() === value.toLowerCase());
}

// limit which fields are returned
export function filterFields<T>(items: T[], fields: (keyof T)[]): Partial<T>[] {
    return items.map((item) => {
        const filteredItem: Partial<T> = {};
        fields.forEach((field) => {
            filteredItem[field] = item[field];
        });
        return filteredItem;
    });
}

// const objectKey: keyof Activity = 'Activity Code'
// const searchValue = 'B0428'
// const fieldsToInclude: (keyof Activity)[] = ['Activity Name', 'Activity Code']
// const searchResults = searchActivitiesByKey(objectKey, searchValue)
// const filteredResults = filterFields(searchResults, fieldsToInclude)
