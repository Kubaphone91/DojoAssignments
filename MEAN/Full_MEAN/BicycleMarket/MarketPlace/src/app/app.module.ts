import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CookieModule } from 'ngx-cookie';

import { BicycleService } from './services/bicycle/bicycle.service';
import { AuthService } from './services/auth/auth.service';

import { AppComponent } from './app.component';
import { BikeOfDayComponent } from './bike-of-day/bike-of-day.component';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { LogoffComponent } from './logoff/logoff.component';
import { RegisterComponent } from './register/register.component';

import { Ng2FileInputModule } from 'ng2-file-input';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { TitilizePipe } from './titilize.pipe';

import { AppRoutingModule } from './app-routing.module';
import { BrowseComponent } from './dashboard/browse/browse.component';
import { ListingComponent } from './dashboard/listing/listing.component';



@NgModule({
  declarations: [
    AppComponent,
    BikeOfDayComponent,
    CreateComponent,
    DashboardComponent,
    EditComponent,
    LoginComponent,
    LogRegComponent,
    LogoffComponent,
    RegisterComponent,
    BrowseComponent,
    ListingComponent,
    TitilizePipe,
    FileSelectDirective,
  ],
  imports: [
    BrowserModule,
    Ng2FileInputModule.forRoot({
      dropText: "Image Upload"
    }),
    CookieModule.forRoot(),
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [BicycleService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
