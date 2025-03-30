import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClotheComponent } from './new-clothe.component';

describe('NewClotheComponent', () => {
  let component: NewClotheComponent;
  let fixture: ComponentFixture<NewClotheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewClotheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewClotheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
