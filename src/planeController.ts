import { Controller, Get } from '@nestjs/common';
import { PlaneService, Plane } from "./plane.service";

@Controller()
export class PlaneController {
  constructor(private readonly appService: PlaneService) {}

  @Get()
  getHello(): Plane[] {
    return this.appService.getAllPlanes();
  }
}
