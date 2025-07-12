import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './student.component';
import { EmployeeComponent } from './employee.component';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound.component';
import { StudentdetailsComponent } from './studentdetails.component';
import { StudentoverviewComponent } from './studentoverview.component';
import { StudentcontactComponent } from './studentcontact.component';

const routes: Routes = [
  {
    path: 'students',
    component: StudentComponent,
  },
  { path: 'employees', component: EmployeeComponent },
  {
    path: 'students/:id/:name',
    component: StudentdetailsComponent,
    children: [
      {
        path: 'overview',
        component: StudentoverviewComponent,
      },
      {
        path: 'contact',
        component: StudentcontactComponent,
      },
    ],
  },
  { path: '', redirectTo: '/students', pathMatch: 'full' },

  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EmployeeComponent,
    PagenotfoundComponent,
    StudentdetailsComponent,
    StudentoverviewComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
