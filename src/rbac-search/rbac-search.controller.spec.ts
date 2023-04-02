import { Test, TestingModule } from '@nestjs/testing';
import { RbacSearchController } from './rbac-search.controller';
import { RbacSearchService } from './rbac-search.service';

describe('RbacSearchController', () => {
  let controller: RbacSearchController;
  let service: RbacSearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RbacSearchController],
      providers: [RbacSearchService],
    }).compile();

    controller = module.get<RbacSearchController>(RbacSearchController);
    service = module.get<RbacSearchService>(RbacSearchService);
  });

  describe('search', () => {
    it('should return search results when given query parameters', () => {
      // Arrange
      const searchSpy = jest.spyOn(service, 'search');
      searchSpy.mockReturnValue('search results');

      // Act
      const result = controller.search('sgValue', 'ssgValue', 'rValue', 'aValue');

      // Assert
      expect(searchSpy).toHaveBeenCalledWith('sgValue', 'ssgValue', 'rValue', 'aValue');
      expect(result).toBe('search results');
    });

    it('should return default message when not given query parameters', () => {
      // Arrange

      // Act
      const result = controller.search();

      // Assert
      expect(result).toMatch(/Hello from RBAC search/);
    });
  });
});
