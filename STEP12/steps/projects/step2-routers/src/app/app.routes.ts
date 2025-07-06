import { Route, Routes } from '@angular/router';

//
import { HomeComponent } from './home.component';
import { BatmanComponent } from './batman.component';
import { SupermanComponent } from './superman.component';
import { WouderwomenComponent } from './wouderwomen.component';
import { CyborgComponent } from './cyborg.component';
import { NotfoundComponent } from './notfound.component';
//  route
let Homeroute: Route = { path: '', component: HomeComponent };
let barmanroute: Route = { path: 'batman', component: BatmanComponent };
let supermanroute: Route = { path: 'superman', component: SupermanComponent };
let supermanrouteArc: Route = {
  path: 'superman/:quantity',
  component: SupermanComponent,
};
let wouderwomenroute: Route = {
  path: 'wouderwomen',
  component: WouderwomenComponent,
};
let cyborgroute: Route = { path: 'cyborg', component: CyborgComponent };
let flashroute: Route = {
  path: 'flash',
  redirectTo: 'batman',
  pathMatch: 'prefix',
};

let notfoundroute: Route = { path: '**', component: NotfoundComponent };
//
// routes
export let myappRoutes: Routes = [
  Homeroute,
  barmanroute,
  supermanroute,
  supermanrouteArc,
  wouderwomenroute,
  cyborgroute,
  flashroute,
  notfoundroute,
];
