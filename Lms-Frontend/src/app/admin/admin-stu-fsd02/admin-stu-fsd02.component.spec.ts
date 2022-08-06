import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStuFsd02Component } from './admin-stu-fsd02.component';

describe('AdminStuFsd02Component', () => {
  let component: AdminStuFsd02Component;
  let fixture: ComponentFixture<AdminStuFsd02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStuFsd02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStuFsd02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
