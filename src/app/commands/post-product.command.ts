import { environment } from 'src/environments/environment';
import { IAdapter } from '../core/api/adapters/i-adapter';
import { ApiService } from '../core/api/api.service';
import { PostAPICommand } from '../core/api/commands';

export class PostProductCommand<T> extends PostAPICommand<T> {
  constructor(apiService: ApiService, adapter: IAdapter<T>) {
    super(apiService, adapter, `${environment.productServiceUrl}/products`);
  }
}
