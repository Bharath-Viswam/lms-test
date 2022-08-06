import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddsalearningmaterialComponent } from './adddsalearningmaterial.component';

describe('AdddsalearningmaterialComponent', () => {
  let component: AdddsalearningmaterialComponent;
  let fixture: ComponentFixture<AdddsalearningmaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddsalearningmaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddsalearningmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
