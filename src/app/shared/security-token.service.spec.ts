import { TestBed } from '@angular/core/testing';

import { SecurityTokenService } from './security-token.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('SecurityTokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: SecurityTokenService = TestBed.get(SecurityTokenService);
    expect(service).toBeTruthy();
  });
});
