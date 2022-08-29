import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductFacadeService } from '../shared/product.service';
import { Product } from '../shared/product.model';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: Observable<Product[]>;
  constructor(private ps: ProductFacadeService) {}

  ngOnInit() {
    this.products = this.ps.getProducts();
    // const helper = new Helper();
    // this.products = helper.getProducts(10);
  }

  deleteProduct(productId: string) {
    const obs = this.ps.deleteProduct(productId);
    obs.subscribe({
      next: (productFromFirebase) => {
        window.alert(
          'product with id: ' + productFromFirebase.id + ' is Deleted'
        );
      },
      error: (error1) => {
        window.alert('product not found id: ' + productId);
      },
    });
  }
}

class Helper {
  products: Product[] = [];
  getProducts(amount: number): Observable<Product[]> {
    for (let i = 0; i < amount; i++) {
      this.products.push({
        id: 'abc' + i,
        name: 'item' + i,
        pictureId: 'abc' + i,
      });
    }
    return of(this.products);
  }
}
