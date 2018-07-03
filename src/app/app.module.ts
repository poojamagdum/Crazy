import { WomenService } from './services/women-serv.service';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SectPageComponent } from './components/sect-page/sect-page.component';
import { WomenPageComponent } from './components/women-page/women-page.component';
import { LoginService } from './services/login-service.service';

let routes:Routes=[
  {
    path:'',
    component:HomePageComponent
  },
  {
    path:'women-page',
    component:WomenPageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    SectPageComponent,
    WomenPageComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), HttpClientModule, FormsModule
  ],
  providers: [WomenService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
