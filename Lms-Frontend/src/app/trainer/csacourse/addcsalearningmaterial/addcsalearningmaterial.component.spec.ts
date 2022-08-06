import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcsalearningmaterialComponent } from './addcsalearningmaterial.component';

describe('AddcsalearningmaterialComponent', () => {
  let component: AddcsalearningmaterialComponent;
  let fixture: ComponentFixture<AddcsalearningmaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcsalearningmaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcsalearningmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
