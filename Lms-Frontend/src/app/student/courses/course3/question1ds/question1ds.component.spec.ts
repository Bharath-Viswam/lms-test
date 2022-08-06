import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question1dsComponent } from './question1ds.component';

describe('Question1dsComponent', () => {
  let component: Question1dsComponent;
  let fixture: ComponentFixture<Question1dsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question1dsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Question1dsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
