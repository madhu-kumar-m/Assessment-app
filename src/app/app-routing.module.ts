import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-navpage/admin-dashboard/admin-dashboard.component';
import { AdminNavpageComponent } from './components/admin-navpage/admin-navpage.component';

import { LoginPageComponent } from './components/login-page/login-page.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'admin-navpage', component: AdminNavpageComponent,
    children: [
      {path: 'dashboard', component: AdminDashboardComponent},
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
