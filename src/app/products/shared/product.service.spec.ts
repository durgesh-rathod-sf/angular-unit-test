import { TestBed } from '@angular/core/testing';

import { ProductFacadeService } from './product.service';

import { ApiService } from 'src/app/core/api/api.service';
import { ApiModule } from 'src/app/core/api/api.module';
import { of } from 'rxjs';

describe('ProductService', () => {
  let productFacadeService: ProductFacadeService;
  let apiServiceMockSpy = jasmine.createSpyObj('ApiServiceMockSpy', [
    'get',
    'post',
    'put',
    'delete',
    'patch',
  ]);
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApiModule],
      providers: [
        ProductFacadeService,
        { provide: ApiService, useValue: apiServiceMockSpy },
      ],
    });
    productFacadeService = TestBed.inject(ProductFacadeService);
  });

  it('should be created', () => {
    expect(productFacadeService).toBeTruthy();
  });

  xit('should call apiServiceMockSpys GET method once', () => {
    apiServiceMockSpy.get.and.returnValue(of([]));
    const url = 'http://localhost:3000/products';
    const options = { observe: 'body' };
    // apiServiceMockSpy.returnData = [];
    // const m = spyOn(apiServiceMockSpy, 'get');
    // console.log('spied', m);
    const obs = productFacadeService.getProducts();
  });
  // });
});
