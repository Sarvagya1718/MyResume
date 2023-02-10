import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [{path:'', redirectTo:'login', pathMatch:'full'},
                        {path:'login', component: LoginComponent},
                        {path:'register',component: RegisterComponent},
                        {path:'dashboard',component: DashboardComponent,canActivate:[AuthGuard]},
                        {path:'resume',loadChildren:()=>import('./components/resume/resume.module')
                        .then(mod=>mod.ResumeModule)}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
