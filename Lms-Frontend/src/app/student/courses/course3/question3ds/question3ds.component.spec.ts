import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question3dsComponent } from './question3ds.component';

describe('Question3dsComponent', () => {
  let component: Question3dsComponent;
  let fixture: ComponentFixture<Question3dsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question3dsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Question3dsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
