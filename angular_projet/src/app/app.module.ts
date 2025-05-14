import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ConceptionSimpleComponent } from './conception-simple/conception-simple.component';
import { FooterComponent } from './footer/footer.component';
import { ConceptionDetailleeComponent } from './conception-detaillee/conception-detaillee.component';
import { NousContacterComponent } from './nous-contacter/nous-contacter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    ConceptionSimpleComponent,
    FooterComponent,
    ConceptionDetailleeComponent,
    NousContacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
