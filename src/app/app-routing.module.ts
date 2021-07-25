import { NgModule } from '@angular/core';
import { RouterLinkActive, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ServiceComponent } from './component/service/service.component';
import { NewsComponent } from './component/news/news.component';
import { TrainerComponent } from './component/trainer/trainer.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { ContactComponent } from './component/contact/contact.component';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent} ,
  { path: 'service', component: ServiceComponent },
  { path: 'news', component: NewsComponent },
  { path: 'trainer', component: TrainerComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
