import { environment } from 'src/environments/environment';
import { IAdapter } from '../core/api/adapters/i-adapter';
import { ApiService } from '../core/api/api.service';
import { GetListAPICommand } from '../core/api/commands';
import { Product } from '../products/shared/product.model';

export class GetProductsCommand extends GetListAPICommand<Product> {
  constructor(apiService: ApiService, adapter: IAdapter<Product>) {
    super(apiService, adapter, `${environment.productServiceUrl}/products`);
  }
}
