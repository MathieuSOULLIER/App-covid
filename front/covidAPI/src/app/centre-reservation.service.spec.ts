import { TestBed } from '@angular/core/testing';

import { CentreReservationService } from './centre-reservation.service';

describe('CentreReservationService', () => {
  let service: CentreReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentreReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
