import { TestBed } from '@angular/core/testing';

import { Rest } from './rest.service';

describe('RestServiceService', () => {
  let service: Rest;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Rest);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
