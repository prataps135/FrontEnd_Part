import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutUsComponent},
  {path:'blog',component:BlogComponent},
  {path:'',component:HomeComponent},
  {path:'users',component:UsersComponent},
  {path:'#',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
