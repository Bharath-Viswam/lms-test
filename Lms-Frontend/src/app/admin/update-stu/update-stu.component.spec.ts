import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStuComponent } from './update-stu.component';

describe('UpdateStuComponent', () => {
  let component: UpdateStuComponent;
  let fixture: ComponentFixture<UpdateStuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
