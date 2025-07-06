import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotfoundComponent } from './notfound.component';
import { ServicesComponent } from './services.component';
import { ContactComponent } from './contact.component';
import { ProductsComponent } from './products.component';
import { AboutComponent } from './about.component';
import { Route, RouterModule, Routes } from '@angular/router';
// egar loading
let HomeRoute: Route = { path: '', component: HomeComponent }; //default route
let ProductRoute: Route = { path: 'product', component: ProductsComponent }; ///name route
let ServicesRoute: Route = { path: 'service', component: ServicesComponent };
let ServicesRouteArgs: Route = {
  path: 'service/:quantity',
  component: ServicesComponent,
}; //name route with parametrs

let ContactRoute: Route = { path: 'contact', component: ContactComponent };
let AboutRoute: Route = { path: 'about', component: AboutComponent };
let NotfoundRoute: Route = { path: '**', component: NotfoundComponent };
let flashRoute: Route = {
  path: 'flash',
  redirectTo: 'product',
  pathMatch: 'prefix',
};
// http://localhost:4200/ ==prefix /home  = route

let myappRoutes: Routes = [
  HomeRoute,
  ProductRoute,
  ServicesRoute,
  ContactRoute,
  AboutRoute,
  NotfoundRoute,
  flashRoute,
  ServicesRouteArgs,
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    ServicesComponent,
    ContactComponent,
    ProductsComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(myappRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
