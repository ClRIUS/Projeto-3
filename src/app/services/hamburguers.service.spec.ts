import { TestBed } from '@angular/core/testing';

import { HamburguersService } from './hamburguers.service';

describe('HamburguersService', () => {
  let service: HamburguersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HamburguersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
