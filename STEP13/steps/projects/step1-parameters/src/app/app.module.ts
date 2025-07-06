import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntelModule } from './intel.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IntelModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
