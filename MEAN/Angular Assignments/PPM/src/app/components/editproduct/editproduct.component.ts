import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../product-service.service';
import { Product } from '../../product';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  products: Array<Product>;
  product: Product;

  constructor(
    private _productService: ProductServiceService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this._productService.productsObservable.subscribe( (products) => {
      this.products = products;
    });

    this._route.params.subscribe( param => {
      for(let idx = 0; idx < this.products.length; idx++){
        if(this.products[idx].id == param.id){
          this.product = this.products[idx];
          break;
        }
      }
    })
   }

  ngOnInit() { }

  update(){
    this._productService.updateProducts(this.products);
    this._router.navigate(['/products']);
  }
}
