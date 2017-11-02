import { IndexComponent } from './Citys/index/index.component';
import { ChicagoComponent } from './Citys/chicago/chicago.component';
import { DCComponent } from './Citys/dc/dc.component';
import { DallasComponent } from './Citys/dallas/dallas.component';
import { BurbankComponent } from './Citys/burbank/burbank.component';
import { SanJoseComponent } from './Citys/san-jose/san-jose.component';
import { SeattleComponent } from './Citys/seattle/seattle.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
  { path: '', component: IndexComponent, pathMatch: 'full' },
  { path: 'seattle', component: SeattleComponent },
  { path: 'sanjose', component: SanJoseComponent },
  { path: 'burbank', component: BurbankComponent },
  { path: 'dallas', component: DallasComponent },
  { path: 'dc', component: DCComponent },
  { path: 'chicago', component: ChicagoComponent }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
