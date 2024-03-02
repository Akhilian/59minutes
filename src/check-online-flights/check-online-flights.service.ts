import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PlaneService } from '../plane.service';

@Injectable()
export class CheckOnlineFlightsService {
  private readonly logger = new Logger(CheckOnlineFlightsService.name);

  constructor(private readonly appService: PlaneService) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  handleCron() {
    const planes = this.appService.getAllPlanes();
    this.logger.warn(
      `Checking online flights... ${planes.length} planes found`,
    );
  }
}
