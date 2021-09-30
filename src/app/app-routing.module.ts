import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { NavigationHeaderComponent } from './components/navigation-header/navigation-header.component';
import { StudentDashboardComponent } from './components/student/student-dashboard/student-dashboard.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'nav', component: NavigationHeaderComponent,
  children: [
    {path:'admin-dashboard', component: AdminDashboardComponent},
    {path:'student-dashboard', component: StudentDashboardComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
