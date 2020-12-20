import { TestBed } from '@angular/core/testing';

import { RomanNumerals } from './romanNumerals.service';

describe('romanNumerals', () => {
  let service: RomanNumerals;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanNumerals);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
