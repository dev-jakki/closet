import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaiasComponent } from './saias.component';

describe('SaiasComponent', () => {
  let component: SaiasComponent;
  let fixture: ComponentFixture<SaiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
