import { TestBed } from '@angular/core/testing';

import { DapurService } from './dapur.service';

describe('DapurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DapurService = TestBed.get(DapurService);
    expect(service).toBeTruthy();
  });
});
