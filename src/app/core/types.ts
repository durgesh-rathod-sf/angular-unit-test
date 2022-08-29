import { Observable } from 'rxjs';

export declare type HttpObserve = 'body' | 'events' | 'response';
export declare type ResponseType = 'arraybuffer' | 'blob' | 'json' | 'text';

export interface IApi {
  post(url: string, payload: any | null, options?: object): Observable<any>;
  get(url: string, options?: object): Observable<any>;
  patch(url: string, payload: any | null, options?: object): Observable<any>;
  put(url: string, payload: any | null, options?: object): Observable<any>;
  delete(url: string, options?: object): Observable<any>;
}
