import { TestBed } from '@angular/core/testing';

import { KeyProviderService } from './key-provider.service';

describe('KeyProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeyProviderService = TestBed.get(KeyProviderService);
    expect(service).toBeTruthy();
  });
});
