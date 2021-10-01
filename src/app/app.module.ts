import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { NavigationHeaderComponent } from './components/navigation-header/navigation-header.component';
import { ExamsComponent } from './components/admin/exams/exams.component';
import { QuestionsComponent } from './components/admin/questions/questions.component';
import { BranchComponent } from './components/student/branch/branch.component';
import { AuthGuardService } from './components/auth-guard.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavigationHeaderComponent,
    ExamsComponent,
    QuestionsComponent,
    BranchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [ AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
