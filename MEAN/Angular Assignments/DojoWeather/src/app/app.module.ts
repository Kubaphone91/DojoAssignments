import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WeatherService } from './weather.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BurbankComponent } from './Citys/burbank/burbank.component';
import { ChicagoComponent } from './Citys/chicago/chicago.component';
import { DallasComponent } from './Citys/dallas/dallas.component';
import { DCComponent } from './Citys/dc/dc.component';
import { SanJoseComponent } from './Citys/san-jose/san-jose.component';
import { SeattleComponent } from './Citys/seattle/seattle.component';
import { IndexComponent } from './Citys/index/index.component';
import { Routing } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    BurbankComponent,
    ChicagoComponent,
    DallasComponent,
    DCComponent,
    SanJoseComponent,
    SeattleComponent,
    IndexComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
