import { TestBed } from '@angular/core/testing';

import { LiveMockService } from './live-mock.service';

describe('LiveMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiveMockService = TestBed.get(LiveMockService);
    expect(service).toBeTruthy();
  });
});
