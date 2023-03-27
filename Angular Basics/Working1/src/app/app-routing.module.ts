import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevelopmentComponent } from './development/development.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ServiceComponent } from './service/service.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent,
  },
  {
    path:'development',component:DevelopmentComponent
  },
  {
    path:'service',component:ServiceComponent
  },
  {
    path:'testing',component:TestingComponent
  },
  {
    path:'sign_up',component:SignUpComponent
  },
  {
    path:'login',component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
