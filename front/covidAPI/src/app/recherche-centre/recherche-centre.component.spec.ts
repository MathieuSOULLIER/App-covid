import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheCentreComponent } from './recherche-centre.component';

describe('RechercheCentreComponent', () => {
  let component: RechercheCentreComponent;
  let fixture: ComponentFixture<RechercheCentreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheCentreComponent]
    });
    fixture = TestBed.createComponent(RechercheCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
