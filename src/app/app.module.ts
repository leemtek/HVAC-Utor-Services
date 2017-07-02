import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header.component';
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { GalleryComponent } from './pages/gallery.component';
import { ServicesComponent } from './pages/services.component';
import { ContactComponent } from './pages/contact.component';
import { FooterComponent } from './pages/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
