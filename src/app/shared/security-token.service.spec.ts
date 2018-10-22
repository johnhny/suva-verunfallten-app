import { TestBed } from '@angular/core/testing';

import { SecurityTokenService } from './security-token.service';

describe('SecurityTokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecurityTokenService = TestBed.get(SecurityTokenService);
    expect(service).toBeTruthy();
  });
});
