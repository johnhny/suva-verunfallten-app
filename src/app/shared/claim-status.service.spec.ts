import { TestBed } from '@angular/core/testing';

import { ClaimStatusService } from './claim-status.service';

describe('ClaimStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClaimStatusService = TestBed.get(ClaimStatusService);
    expect(service).toBeTruthy();
  });
});
