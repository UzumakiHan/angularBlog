import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PublicblogComponent } from './pages/publicblog/publicblog.component';
import { AboutblogComponent } from './pages/aboutblog/aboutblog.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { WebexampleComponent } from './pages/webexample/webexample.component';
import {BlogdetailComponent} from './pages/blogdetail/blogdetail.component'
import { LoginComponent } from './pages/login/login.component';
import {AdminComponent} from './pages/admin/admin.component'
import { MyblogComponent } from './pages/myblog/myblog.component';
import { ChangeInfoComponent } from './pages/change-info/change-info.component';
const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'publicblog',
        component: PublicblogComponent
      },
      {
        path: 'aboutblog',
        component: AboutblogComponent
      },
      {
        path: 'aboutme',
        component: AboutmeComponent
      }, 
      {
        path:'webexample',
        component:WebexampleComponent
      },
      {
        path:'blogdetail',
        component:BlogdetailComponent
      },
      {
        path:'myblog',
        component:MyblogComponent
      },
      {
        path:'changepassword',
        component:ChangeInfoComponent
      }
    ]
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
