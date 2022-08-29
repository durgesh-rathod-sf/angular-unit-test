import {Injectable} from '@angular/core';
import {IAdapter} from './adapters/i-adapter';
import {Count} from './models/count.model';

@Injectable()
export class CountAdapter implements IAdapter<Count> {
  adaptToModel(resp: any): Count {
    return new Count(resp);
  }
  adaptFromModel(data: Count): any {
    return data;
  }
}
