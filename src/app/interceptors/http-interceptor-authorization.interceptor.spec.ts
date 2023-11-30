import { TestBed } from '@angular/core/testing';

import { HttpInterceptorAuthorizationInterceptor } from './http-interceptor-authorization.interceptor';

describe('HttpInterceptorAuthorizationInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpInterceptorAuthorizationInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpInterceptorAuthorizationInterceptor = TestBed.inject(HttpInterceptorAuthorizationInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
