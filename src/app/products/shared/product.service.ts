import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { ApiService } from 'src/app/core/api/api.service';
import { GetProductsCommand } from 'src/app/commands/get-products.command';
import { AnyAdapter } from 'src/app/core/api/adapters/any-adapter.service';
import { DeleteProductCommand } from 'src/app/commands/del-product.command';
import { PostProductCommand } from 'src/app/commands/post-product.command';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductFacadeService {
  constructor(private apiService: ApiService, private anyAdapter: AnyAdapter) {}

  getProducts(): Observable<Product[]> {
    const command = new GetProductsCommand(this.apiService, this.anyAdapter);
    return command.execute();
  }

  deleteProduct(id: string): Observable<Product> {
    const command = new DeleteProductCommand(
      this.apiService,
      this.anyAdapter,
      id
    );
    return command.execute();
  }

  addProduct(product: Product): Observable<Product> {
    const command = new PostProductCommand(this.apiService, this.anyAdapter);
    command.parameters = {
      data: product,
    };
    return command.execute();
  }
}
