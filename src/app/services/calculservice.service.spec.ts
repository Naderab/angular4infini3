import { TestBed } from '@angular/core/testing';

import { CalculserviceService } from './calculservice.service';

describe('CalculserviceService', () => {
  let service: CalculserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
