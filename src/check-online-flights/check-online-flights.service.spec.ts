import { Test, TestingModule } from '@nestjs/testing';
import { CheckOnlineFlightsService } from './check-online-flights.service';

describe('CheckOnlineFlightsService', () => {
  let service: CheckOnlineFlightsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckOnlineFlightsService],
    }).compile();

    service = module.get<CheckOnlineFlightsService>(CheckOnlineFlightsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
