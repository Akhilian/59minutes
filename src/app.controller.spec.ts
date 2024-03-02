import { Test, TestingModule } from '@nestjs/testing';
import { PlaneController } from './planeController';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: PlaneController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PlaneController],
      providers: [AppService],
    }).compile();

    appController = app.get<PlaneController>(PlaneController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
