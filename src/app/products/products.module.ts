import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductAddComponent } from './product-add/product-add.component';

@NgModule({
  declarations: [ProductsListComponent, ProductAddComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ProductsModule {}
