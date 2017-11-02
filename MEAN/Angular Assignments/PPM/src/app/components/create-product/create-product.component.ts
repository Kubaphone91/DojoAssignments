import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { ProductServiceService } from '../../product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  new_product: Product = new Product();
  products: Array<Product>;

  constructor(
    private _productService: ProductServiceService,
    private _router: Router
  ) {
    this._productService.productsObservable.subscribe( (products) => {
      this.products = products;
    })
}

  ngOnInit() {
    this.new_product = new Product();
  }

  create(){
    if(this.new_product.imgUrl.length < 1 ||
        this.new_product.imgUrl === 'null' ||
        this.new_product.imgUrl === null){
          this.new_product.imgUrl = null;
        }
    this.products.push(this.new_product);
    this._productService.updateProducts(this.products);
    this.new_product = new Product();
    this._router.navigate(['/products']);
  }

}
