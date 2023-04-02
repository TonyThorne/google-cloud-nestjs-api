import { Test, TestingModule } from '@nestjs/testing';
import { RbacSearchService } from './rbac-search.service';
import { consolidateActivities, findAssociatedActivities, searchRolesByKey } from '../utils/rbac/job-roles-consolidate';
import { filterFields, searchActivitiesByKey } from '../utils/rbac/activity-search';
import * as rbacActivities from '../../src/data/rbac-active-activities.json';
import { Activity } from '../utils/rbac/activity-search';

describe('RbacSearchService', () => {
  let service: RbacSearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RbacSearchService],
    }).compile();

    service = module.get<RbacSearchService>(RbacSearchService);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('searchBy', () => {
    it('should return a JSON string when searching by Staff Group Code', () => {
      const key = 'sg';
      const value = 'S0080';
      const expected = '[{"Job Role Name":"Caldicott Guardian","Job Role Code":"R5105","Staff Group Name":"Admin & Clerical","Staff Group Code":"S0080","Staff Sub Group Name":"Management - A & C","Staff Sub Group Code":"G0450","Activities":[{"Activity Name":"Advice Line","Activity Code":"G0235","Activity Description":"Advice Line","Includes":"No","Restricted":"No","Rationalisation Status":"Active"},{"Activity Name":"Analytical","Activity Code":"H0075","Activity Description":"Analytical","Includes":"No","Restricted":"No","Rationalisation Status":"Active"}]}]';

      jest.spyOn(service, 'searchBy').mockImplementation(() => expected);

      const result = service.searchBy(key, value);

      expect(service.searchBy).toHaveBeenCalledWith(key, value);
      expect(result).toEqual(expected);
    });

    it('should return a JSON string when searching by Staff Sub Group Code', () => {
      const key = 'ssg';
      const value = 'G0450';
      const expected = '[{"Job Role Name":"Caldicott Guardian","Job Role Code":"R5105","Staff Group Name":"Admin & Clerical","Staff Group Code":"S0080","Staff Sub Group Name":"Management - A & C","Staff Sub Group Code":"G0450","Activities":[{"Activity Name":"Advice Line","Activity Code":"G0235","Activity Description":"Advice Line","Includes":"No","Restricted":"No","Rationalisation Status":"Active"},{"Activity Name":"Analytical","Activity Code":"H0075","Activity Description":"Analytical","Includes":"No","Restricted":"No","Rationalisation Status":"Active"}]}]';

      jest.spyOn(service, 'searchBy').mockImplementation(() => expected);

      const result = service.searchBy(key, value);

      expect(service.searchBy).toHaveBeenCalledWith(key, value);
      expect(result).toEqual(expected);
    });

    it('should return a JSON string when searching by Job Role Code', () => {
      const key = 'r'
      const value = 'R5105'
      const expected = '[{"Job Role Name":"Caldicott Guardian","Job Role Code":"R5105","Staff Group Name":"Admin & Clerical","Staff Group Code":"S0080","Staff Sub Group Name":"Management - A & C","Staff Sub Group Code":"G0450","Activities":[{"Activity Name":"Advice Line","Activity Code":"G0235","Activity Description":"Advice Line","Includes":"No","Restricted":"No","Rationalisation Status":"Active"},{"Activity Name":"Analytical","Activity Code":"H0075","Activity Description":"Analytical","Includes":"No","Restricted":"No","Rationalisation Status":"Active"}]}]';
      jest.spyOn(service, 'searchBy').mockImplementation(() => expected)

      const result = service.searchBy(key, value)

      expect(service.searchBy).toHaveBeenCalledWith(key, value)
      expect(result).toEqual(expected)
    })


  })
})