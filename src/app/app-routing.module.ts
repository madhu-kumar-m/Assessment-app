import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-navpage/admin-dashboard/admin-dashboard.component';
import { AdminNavpageComponent } from './components/admin-navpage/admin-navpage.component';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { StudentDashboardComponent } from './components/student-navpage/student-dashboard/student-dashboard.component';
import { StudentNavpageComponent } from './components/student-navpage/student-navpage.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'admin', component: AdminNavpageComponent,
    children: [
      {path: 'dashboard', component: AdminDashboardComponent},
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  },
  {path: 'student', component: StudentNavpageComponent, 
    children: [
      {path: 'dashboard', component: StudentDashboardComponent},
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
