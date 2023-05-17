import { Controller, Get, Query, Header } from '@nestjs/common'
import { RbacSearchService } from './rbac-search.service'

@Controller('rbac-search')
export class RbacSearchController {
  constructor(private readonly rbacSearchService: RbacSearchService) { }

  @Get()
  @Header('Content-Type', 'application/json')
  search(
    @Query('sg') sg?: string,
    @Query('ssg') ssg?: string,
    @Query('r') r?: string,
    @Query('a') a?: string,
  ): string {
    const result = this.rbacSearchService.search(sg, ssg, r, a)

    return result || `Hello from RBAC search!
    Possible query parameters:
    sg | "Staff Group": "Admin & Clerical",
    sg | "Staff Group Code": "S0080",
    e.g. http://localhost:3000/rbac-search?sg=S0080
    ssg | "Staff Sub Group": "Management - A & C",
    ssg | "Staff Sub Group Code": "G0450",
    e.g http://localhost:3000/rbac-search?ssg=G0450
    r | "Job Role": "Caldicott Guardian",
    r | "Job Role Code": "R5105",
    e.g http://localhost:3000/rbac-search?r=R5105 
    `
  }
}
