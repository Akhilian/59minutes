import { Module } from '@nestjs/common';
import { PlaneController } from './planeController';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [PlaneController],
  providers: [AppService],
})
export class RootModule {}
