import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question2dsComponent } from './question2ds.component';

describe('Question2dsComponent', () => {
  let component: Question2dsComponent;
  let fixture: ComponentFixture<Question2dsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question2dsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Question2dsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
