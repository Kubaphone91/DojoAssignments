import { IndexComponent } from './components/index/index.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { EditproductComponent } from './components/editproduct/editproduct.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
  { path: '', component: IndexComponent, pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'products/create', component: CreateProductComponent },
  { path: 'products/edit/:id', component: EditproductComponent }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);

