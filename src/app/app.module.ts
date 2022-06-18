import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotpagefoundComponent } from './pages/notpagefound/notpagefound.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraficalComponent } from './pages/grafical/grafical.component';
import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NotpagefoundComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    ProgressComponent,
    GraficalComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //si se va a importar modulos van en los imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
