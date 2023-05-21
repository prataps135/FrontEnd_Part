import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'blog', component: BlogComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent },
  {
    path: 'users', component: UsersComponent, children: [
      { path: ':userId', component: UserDetailsComponent },
      { path: '', component: PlaceholderComponent }
    ]
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  providers: [AuthGuard],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
