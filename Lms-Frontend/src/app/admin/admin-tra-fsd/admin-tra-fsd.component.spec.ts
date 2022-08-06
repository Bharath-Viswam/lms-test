import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTraFsdComponent } from './admin-tra-fsd.component';

describe('AdminTraFsdComponent', () => {
  let component: AdminTraFsdComponent;
  let fixture: ComponentFixture<AdminTraFsdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTraFsdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTraFsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
