import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanderoleComponent } from './banderole.component';

describe('BanderoleComponent', () => {
  let component: BanderoleComponent;
  let fixture: ComponentFixture<BanderoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BanderoleComponent]
    });
    fixture = TestBed.createComponent(BanderoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
