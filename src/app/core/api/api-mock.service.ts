import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IApi } from '../types';
// sonarignore:start
/**
 * Used for unit testing and API mocking
 * You should override the actual ApiService with this ApiServiceMockSpy in the provder you your Testbed in you unit test files
 * You can Spy on the methods  and see if the method is being called with proper arguments (url, payload, and queryparams, headers)
 */
export class ApiServiceMockSpy implements IApi {
  returnData: any = true;
  post(
    url: string,
    payload: any,
    options?: object | undefined
  ): Observable<any> {
    console.log('inside post');
    return of(this.returnData);
  }
  get(url: string, options?: object | undefined): Observable<any> {
    console.log('inside get');
    return of(this.returnData);
  }

  patch(
    url: string,
    payload: any,
    options?: object | undefined
  ): Observable<any> {
    return of(this.returnData);
  }
  put(
    url: string,
    payload: any,
    options?: object | undefined
  ): Observable<any> {
    return of(this.returnData);
  }
  delete(url: string, options?: object | undefined): Observable<any> {
    return of(this.returnData);
  }
}
// sonarignore:end
