import {HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {map} from 'rxjs/operators';

import {HttpObserve} from '../../types';
import {IAdapter} from '../adapters/i-adapter';
import {ApiService} from '../api.service';
import {ICommand} from './i-command';

export class PostAPICommand<T, R = T> implements ICommand {
  constructor(
    protected readonly apiService: ApiService,
    protected readonly adapter: IAdapter<T, R>,
    protected readonly uri: string,
  ) {}

  parameters: {
    data: T;
    headers?: HttpHeaders;
    observe?: HttpObserve;
    query?: HttpParams;
    reportProgress?: boolean;
  };

  execute(): Observable<T> {
    if (!this.parameters) {
      throwError(`Parameters missing for POST ${this.uri}`);
    }
    const options: any = {};
    options.observe = this.parameters.observe || 'body';
    options.reportProgress = this.parameters.reportProgress;

    this.parameters.headers = this.parameters.headers || new HttpHeaders();
    options.headers = this.parameters.headers.append(
      'applicationType',
      'console',
    );

    if (this.parameters.query) {
      options.params = this.parameters.query;
    }

    return this.apiService
      .post(
        this.uri,
        this.adapter.adaptFromModel(this.parameters.data),
        options,
      )
      .pipe(
        map(resp => {
          if (!options.reportProgress) {
            return this.adapter.adaptToModel(resp);
          } else if (resp.type === HttpEventType.Response && resp.body) {
            return this.adapter.adaptToModel(resp.body);
          } else {
            return resp;
          }
        }),
      );
  }
}
