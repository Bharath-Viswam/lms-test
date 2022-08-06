import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStuNavComponent } from './admin-stu-nav.component';

describe('AdminStuNavComponent', () => {
  let component: AdminStuNavComponent;
  let fixture: ComponentFixture<AdminStuNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStuNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStuNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
