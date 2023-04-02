import { Module } from '@nestjs/common';
import { RbacSearchController } from './rbac-search.controller';
import { RbacSearchService } from './rbac-search.service';

@Module({
  controllers: [RbacSearchController],
  providers: [RbacSearchService]
})
export class RbacSearchModule {}
