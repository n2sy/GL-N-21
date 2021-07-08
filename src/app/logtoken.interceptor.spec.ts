import { TestBed } from '@angular/core/testing';

import { LogtokenInterceptor } from './logtoken.interceptor';

describe('LogtokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LogtokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LogtokenInterceptor = TestBed.inject(LogtokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
