import { TestBed } from '@angular/core/testing';

import { ClaimStatusService } from './claim-status.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ClaimStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ClaimStatusService = TestBed.get(ClaimStatusService);
    expect(service).toBeTruthy();
  });
});
