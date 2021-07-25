import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { ServiceComponent } from './component/service/service.component';
import { NewsComponent } from './component/news/news.component';
import { TrainerComponent } from './component/trainer/trainer.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BannerMainComponent } from './general/banner-main/banner-main.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServiceComponent,
    NewsComponent,
    TrainerComponent,
    GalleryComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    BannerMainComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
