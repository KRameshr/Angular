import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentcompComponent } from './parentcomp.component';
import { ChildcompComponent } from './childcomp.component';

@NgModule({
  declarations: [AppComponent, ParentcompComponent, ChildcompComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
