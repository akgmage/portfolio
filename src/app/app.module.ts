import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, IntroComponent, ContactComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
