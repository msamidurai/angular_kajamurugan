import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WritingServicesComponent } from './writing-services/writing-services.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { BooksComponent } from './books/books.component';
import { ShortStoryComponent } from './short-story/short-story.component';

const routes: Routes = [

  { path: 'home',  component: HomeComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'book',  component: BooksComponent },
  { path: 'short-story',  component: ShortStoryComponent },
  { path: 'writing-services',  component: WritingServicesComponent },
  { path: 'blog',  component: BlogComponent },
  { path: 'contact',  component: ContactComponent },

  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
