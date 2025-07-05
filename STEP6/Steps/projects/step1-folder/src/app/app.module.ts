import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { firstComp } from './first.componet';
import { SecondClass } from './second.component';

@NgModule({
     declarations: [AppComponent],
     imports: [BrowserModule],
     providers: [],
     bootstrap: [AppComponent, firstComp, SecondClass],
})
export class AppModule {}
