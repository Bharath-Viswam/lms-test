import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsvideosComponent } from './jsvideos.component';

describe('JsvideosComponent', () => {
  let component: JsvideosComponent;
  let fixture: ComponentFixture<JsvideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsvideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
