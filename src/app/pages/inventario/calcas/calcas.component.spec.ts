import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcasComponent } from './calcas.component';

describe('CalcasComponent', () => {
  let component: CalcasComponent;
  let fixture: ComponentFixture<CalcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalcasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
