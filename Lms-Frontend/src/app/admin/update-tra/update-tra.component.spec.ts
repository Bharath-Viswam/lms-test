import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTraComponent } from './update-tra.component';

describe('UpdateTraComponent', () => {
  let component: UpdateTraComponent;
  let fixture: ComponentFixture<UpdateTraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
