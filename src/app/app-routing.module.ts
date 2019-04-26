import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [

  { path: 'home',  component: HomeComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'book',  component: HomeComponent },
  { path: 'short-story',  component: HomeComponent },
  { path: 'writing-services',  component: HomeComponent },
  { path: 'blog',  component: HomeComponent },
  { path: 'contact',  component: HomeComponent },

  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
