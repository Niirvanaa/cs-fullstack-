import { TestBed } from '@angular/core/testing';

import { TripDataService } from './models/trip-data.service';

describe('TripData', () => {
  let service: TripDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
