import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponetComponent } from './parent-componet.component';
import { ChildComponetComponent } from './child-componet.component';

@NgModule({
  declarations: [AppComponent, ParentComponetComponent, ChildComponetComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
