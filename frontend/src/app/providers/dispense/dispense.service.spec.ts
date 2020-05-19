import { TestBed } from '@angular/core/testing';

import { DispenseService } from './dispense.service';

describe('DispenseService', () => {
  let service: DispenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DispenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
