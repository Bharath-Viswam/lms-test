import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lrngmaterials4Component } from './lrngmaterials4.component';

describe('Lrngmaterials4Component', () => {
  let component: Lrngmaterials4Component;
  let fixture: ComponentFixture<Lrngmaterials4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lrngmaterials4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lrngmaterials4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
