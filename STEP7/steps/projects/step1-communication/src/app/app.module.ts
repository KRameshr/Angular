import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChildComp } from './child.component';

import { AppComponent } from './app.component';

@NgModule({
  // declare components pipes and directicves
  declarations: [AppComponent, ChildComp],
  //  import external modules
  imports: [BrowserModule, FormsModule],
  // logic or data that is shered b/w componets
  providers: [],
  // is the  array main componets
  bootstrap: [AppComponent],
})
export class AppModule {}
