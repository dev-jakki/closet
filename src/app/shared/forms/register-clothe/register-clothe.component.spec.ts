import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterClotheComponent } from './register-clothe.component';

describe('RegisterClotheComponent', () => {
  let component: RegisterClotheComponent;
  let fixture: ComponentFixture<RegisterClotheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterClotheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterClotheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
