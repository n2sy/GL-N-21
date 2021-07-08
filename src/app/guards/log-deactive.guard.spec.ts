import { TestBed } from '@angular/core/testing';

import { LogDeactiveGuard } from './log-deactive.guard';

describe('LogDeactiveGuard', () => {
  let guard: LogDeactiveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogDeactiveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
