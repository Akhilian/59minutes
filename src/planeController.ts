import { Controller, Get } from '@nestjs/common';
import { AppService, Plane } from "./app.service";

@Controller()
export class PlaneController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Plane[] {
    return this.appService.getAllPlanes();
  }
}
