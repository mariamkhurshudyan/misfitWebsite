import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {AboutComponent} from "../about/about.component";
import {GalleryComponent} from '../gallery/gallery.component';
import {ServiceComponent} from '../service/service.component';
import {NewsComponent} from '../news/news.component';
import {TrainerComponent} from '../trainer/trainer.component';
import {ContactComponent} from '../contact/contact.component';
import { HomeComponent } from "./home.component";


@NgModule({
  declarations: [
    AboutComponent,
    ServiceComponent,
    NewsComponent,
    TrainerComponent,
    GalleryComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    AboutComponent,
    NewsComponent,
    TrainerComponent,
    GalleryComponent,
    ContactComponent,
    HomeComponent
  ],
})
export class HomeModule {
}
