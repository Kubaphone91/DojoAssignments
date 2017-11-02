import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ProductServiceService } from './product-service.service';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { EditproductComponent } from './components/editproduct/editproduct.component';
import { Routing } from './routes';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateProductComponent,
    ProductListComponent,
    EditproductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
