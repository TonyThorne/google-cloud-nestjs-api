import { searchActivitiesByCode, searchActivitiesByKey, filterFields } from './activity-search'
import * as data from '../../data/rbac-active-activities.json'
import { Activity } from './activity-search'

describe('Activity Search', () => {
  describe('searchActivitiesByCode', () => {
    it('should return empty array if no activities are found for the given code', () => {
      const code = 'some-random-code'
      const activities = searchActivitiesByCode(code)
      expect(activities).toHaveLength(0)
    })

    it('should return activities that match the given code', () => {
      const code = 'B0428'
      const expectedActivity = data.filter((activity: Activity) => activity['Activity Code'].toLowerCase() === code.toLowerCase())[0]
      const activities = searchActivitiesByCode(code)
      expect(activities).toHaveLength(1)
      expect(activities[0]).toEqual(expectedActivity)
    })
  })

  describe('searchActivitiesByKey', () => {
    it('should return empty array if no activities are found for the given key and value', () => {
      const key = 'Activity Name'
      const value = 'some-random-value'
      const activities = searchActivitiesByKey(key, value)
      expect(activities).toHaveLength(0)
    })

    it('should return activities that match the given key and value', () => {
      const key = 'Activity Sub Group Name'
      const value = 'Nursing Services'
      const expectedActivities = data.filter((activity: Activity) => activity[key].toLowerCase() === value.toLowerCase())
      const activities = searchActivitiesByKey(key, value)
      expect(activities).toHaveLength(expectedActivities.length)
      expect(activities).toEqual(expectedActivities)
    })
  })

  describe('filterFields', () => {
    it('should return an empty array if given an empty array of items', () => {
      const items: Activity[] = []
      const fields: (keyof Activity)[] = ['Activity Name', 'Activity Code']
      const filteredItems = filterFields(items, fields)
      expect(filteredItems).toHaveLength(0)
    })

    it('should return an array of objects with only the specified fields', () => {
      const items = data.slice(0, 3) // get first 3 activities
      const fields: (keyof Activity)[] = ['Activity Name', 'Activity Code']
      const expectedFilteredItems = items.map((item) => {
        const filteredItem: Partial<Activity> = {}
        fields.forEach((field) => {
          filteredItem[field] = item[field]
        })
        return filteredItem
      })
      const filteredItems = filterFields(items, fields)
      expect(filteredItems).toEqual(expectedFilteredItems)
    })
  })
})
