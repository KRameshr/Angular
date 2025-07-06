import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//
import { HomeComponent } from './home.component';
import { BatmanComponent } from './batman.component';
import { SupermanComponent } from './superman.component';
import { WouderwomenComponent } from './wouderwomen.component';
import { CyborgComponent } from './cyborg.component';
import { NotfoundComponent } from './notfound.component';

import { RouterModule } from '@angular/router';
import { myappRoutes } from './app.routes';

// Eager laoding
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BatmanComponent,
    SupermanComponent,
    WouderwomenComponent,
    CyborgComponent,
    NotfoundComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(myappRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
