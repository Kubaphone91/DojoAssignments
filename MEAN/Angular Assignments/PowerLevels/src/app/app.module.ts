import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HumanComponent } from './power/human/human.component';
import { SaiyanComponent } from './power/saiyan/saiyan.component';
import { SuperSaiyanComponent } from './power/super-saiyan/super-saiyan.component';
import { SuperSaiyanTwoComponent } from './power/super-saiyan-two/super-saiyan-two.component';
import { SuperSaiyanTHreeComponent } from './power/super-saiyan-three/super-saiyan-three.component';
import { SuperSaiyanFourComponent } from './power/super-saiyan-four/super-saiyan-four.component';
import { PowerComponent } from './power/power.component';

@NgModule({
  declarations: [
    AppComponent,
    HumanComponent,
    SaiyanComponent,
    SuperSaiyanComponent,
    SuperSaiyanTwoComponent,
    SuperSaiyanTHreeComponent,
    SuperSaiyanFourComponent,
    PowerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
