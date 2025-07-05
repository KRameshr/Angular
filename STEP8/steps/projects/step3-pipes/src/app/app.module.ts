import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GenPipe } from './pipes/gen.pipe';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, GenPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
