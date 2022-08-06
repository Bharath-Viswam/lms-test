import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmTarainerComponent } from './adm-tarainer.component';

describe('AdmTarainerComponent', () => {
  let component: AdmTarainerComponent;
  let fixture: ComponentFixture<AdmTarainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmTarainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmTarainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
