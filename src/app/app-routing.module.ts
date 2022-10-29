import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: 'login',
    pathMatch:'full'
  },
  {
    path:"login",
    component: SignInComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'employee', component: EmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
