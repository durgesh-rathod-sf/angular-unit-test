import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductFacadeService } from '../shared/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {
  productFormGroup: FormGroup;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private ps: ProductFacadeService
  ) {
    this.productFormGroup = new FormGroup({
      name: new FormControl(''),
    });
  }

  ngOnInit() {}

  addProduct() {
    const productData = this.productFormGroup.value;
    this.ps.addProduct(productData).subscribe({
      next: (product) => {
        this.router.navigate(['../'], { relativeTo: this.activatedRoute });
        // window.alert('product with id: ' + product.id + ' and name : ' + product.name + 'is added');
      },
      error: (error1) => {
        window.alert('Bad stuff happened: ' + error1);
      },
    });
  }
}
