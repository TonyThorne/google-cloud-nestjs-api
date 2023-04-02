import { Injectable, Logger } from '@nestjs/common';
import { searchActivitiesByKey, filterFields } from '../utils/rbac/activity-search'
import type { Activity } from '../utils/rbac/activity-search'
import * as rbacActivities from '../../src/data/rbac-active-activities.json'
import type { SearchKey, ResultWithActivities } from '../utils/rbac/job-roles-consolidate'
import { consolidateActivities, searchRolesByKey, findAssociatedActivities } from '../utils/rbac/job-roles-consolidate'


@Injectable()
export class RbacSearchService {
  search(sg?: string, ssg?: string, r?: string, a?: string): string {
    const queryParams = []

    if (sg) {
      queryParams.push(this.searchBy('sg', sg))
    }
    if (ssg) {
      queryParams.push(this.searchBy('ssg', ssg))
    }
    if (r) {
      queryParams.push(this.searchBy('r', r))
    }
    if (a) {
      queryParams.push(this.searchBy('a', a))
    }
    return queryParams.length > 0 ? queryParams.join(', ') : null
  }

  searchBy(key: string, value: string): any {
    if (!value) {
      throw new Error('No value provided')
    } else {
      value = value.trim().toLocaleLowerCase()
    }
    if (!key) {
      throw new Error('No key provided')
    } else {
      key = key.trim()
    }

    function search(key: SearchKey, value: string): any {
      const res = searchRolesByKey(key, value).map(consolidateActivities);
      const associatedActivitiesArray: ResultWithActivities[] = res.map((consolidatedObj) => findAssociatedActivities(consolidatedObj, rbacActivities));
      return JSON.stringify(associatedActivitiesArray)

    }
    switch (key) {
      case 'sg':
        try {
          return search('Staff Group Code', value)
        } catch (error) {
          return JSON.stringify(error)
        }
      case 'ssg':
        try {
          return search('Staff Sub Group Code', value)
        } catch (error) {
          return JSON.stringify(error)
        }
      case 'r':
        try {
          return search('Job Role Code', value)
        } catch (error) {
          return JSON.stringify(error)
        }
      case 'a':
        // Which fields to include in the search results
        const fieldsToInclude: (keyof Activity)[] = ['Activity Name', 'Activity Code', "Activity Description"]
        const objectKey = 'Activity Code'
        try {
          const searchResults = searchActivitiesByKey(objectKey, value)
          const filteredResults = filterFields(searchResults, fieldsToInclude)
          return JSON.stringify(filteredResults)
        } catch (error) { error }
      default:
        return null
    }
  }
}
