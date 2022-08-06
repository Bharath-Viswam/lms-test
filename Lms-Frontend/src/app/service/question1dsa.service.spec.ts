import { TestBed } from '@angular/core/testing';

import { Question1dsaService } from './question1dsa.service';

describe('Question1dsaService', () => {
  let service: Question1dsaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Question1dsaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
