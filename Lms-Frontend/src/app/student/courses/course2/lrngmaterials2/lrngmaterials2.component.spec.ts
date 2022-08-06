import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lrngmaterials2Component } from './lrngmaterials2.component';

describe('Lrngmaterials2Component', () => {
  let component: Lrngmaterials2Component;
  let fixture: ComponentFixture<Lrngmaterials2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lrngmaterials2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lrngmaterials2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
