import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreReservationComponent } from './centre-reservation.component';

describe('CentreReservationComponent', () => {
  let component: CentreReservationComponent;
  let fixture: ComponentFixture<CentreReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentreReservationComponent]
    });
    fixture = TestBed.createComponent(CentreReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
