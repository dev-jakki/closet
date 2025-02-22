import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraiaComponent } from './praia.component';

describe('PraiaComponent', () => {
  let component: PraiaComponent;
  let fixture: ComponentFixture<PraiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PraiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PraiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
