import {HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {IAdapter} from '../adapters/i-adapter';
import {ApiService} from '../api.service';
import {ICommand} from './i-command';
import {HttpObserve, ResponseType} from '../../types';

export abstract class GetAPICommand<T, R = T> implements ICommand {
  constructor(
    protected readonly apiService: ApiService,
    protected readonly adapter: IAdapter<T, R>,
    protected readonly uri: string,
  ) {}

  parameters?: {
    query?: HttpParams;
    headers?: HttpHeaders;
    observe?: HttpObserve;
    responseType?: ResponseType;
  };

  execute(): Observable<T> {
    let options: any;
    if (this.parameters) {
      options = {};
      options.observe = this.parameters.observe || 'body';

      this.parameters.headers = this.parameters.headers || new HttpHeaders();
      options.headers = this.parameters.headers.append(
        'applicationType',
        'console',
      );

      if (this.parameters.query) {
        options.params = this.parameters.query;
      }

      if (this.parameters.responseType) {
        options.responseType = this.parameters.responseType;
      }
    }
    return this.apiService
      .get(this.uri, options)
      .pipe(map(resp => this.adapter.adaptToModel(resp)));
  }
}
