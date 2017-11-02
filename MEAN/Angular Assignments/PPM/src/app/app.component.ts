import { Component } from '@angular/core';
import { Product } from './product';
import { ProductServiceService } from './product-service.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products = [
    new Product(1,'Asus Laptop', 1299.99, '../../assets/laptop.png'),
    new Product(2, 'Xbox One', 499.99, '../../assets/xboxone.jpg')
  ];

  constructor(private _productService: ProductServiceService){
    this._productService.updateProducts(this.products);
    this._productService.productsObservable.subscribe( (products) => {
      this.products = products;
    });
  }
}
