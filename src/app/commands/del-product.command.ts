import { environment } from 'src/environments/environment';
import { IAdapter } from '../core/api/adapters/i-adapter';
import { ApiService } from '../core/api/api.service';
import { DelAPICommand } from '../core/api/commands';

export class DeleteProductCommand<T> extends DelAPICommand<T> {
  constructor(apiService: ApiService, adapter: IAdapter<T>, id: string) {
    super(
      apiService,
      adapter,
      `${environment.productServiceUrl}/products/${id}`
    );
  }
}
