import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateformComponent } from './templateform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactivegroupformComponent } from './reactivegroupform.component';
import { ReactivebuilderformComponent } from './reactivebuilderform.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateformComponent,
    ReactivegroupformComponent,
    ReactivebuilderformComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
