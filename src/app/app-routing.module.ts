import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { ExamsComponent } from './components/admin/exams/exams.component';
import { QuestionsComponent } from './components/admin/questions/questions.component';
import { AuthGuardService as authGuard} from './components/auth-guard.service';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { NavigationHeaderComponent } from './components/navigation-header/navigation-header.component';
import { BranchComponent } from './components/student/branch/branch.component';
import { StudentDashboardComponent } from './components/student/student-dashboard/student-dashboard.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'nav', component: NavigationHeaderComponent,canActivate:[authGuard], canActivateChild:[authGuard],
  children: [
    {path:'admin-dashboard', component: AdminDashboardComponent},
    {path:'student-dashboard', component: StudentDashboardComponent},
    {path:'exams', component: ExamsComponent},
    {path:'questions', component: QuestionsComponent},
    {path:'branch', component: BranchComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
