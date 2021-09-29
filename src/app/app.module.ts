import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminNavpageComponent } from './components/admin-navpage/admin-navpage.component';
import { AdminDashboardComponent } from './components/admin-navpage/admin-dashboard/admin-dashboard.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { StudentNavpageComponent } from './components/student-navpage/student-navpage.component'; 
import { StudentDashboardComponent } from './components/student-navpage/student-dashboard/student-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AdminNavpageComponent,
    AdminDashboardComponent,
    StudentNavpageComponent,
    StudentDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
