import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent} from './about-us/about-us.component';
import { ContantUsComponent} from './contant-us/contant-us.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [ {
  path: '',
  component: HomeComponent
},
{
  path: 'about-us', 
  component: AboutUsComponent
},
{
  path: 'user', 
  component: UserComponent
},
{
  path: 'contact-us', 
  component: ContantUsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
  
}
