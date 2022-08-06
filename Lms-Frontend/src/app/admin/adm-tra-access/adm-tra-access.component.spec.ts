import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmTraAccessComponent } from './adm-tra-access.component';

describe('AdmTraAccessComponent', () => {
  let component: AdmTraAccessComponent;
  let fixture: ComponentFixture<AdmTraAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmTraAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmTraAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
