import { TestBed } from '@angular/core/testing';

import { ServiceEnseingnatService } from './service-enseingnat.service';

describe('ServiceEnseingnatService', () => {
  let service: ServiceEnseingnatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEnseingnatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
