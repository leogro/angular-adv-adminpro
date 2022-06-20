import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';


//Modulos
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficalComponent } from './grafical/grafical.component';
import { PagesComponent } from './pages.component';



//import { AppRoutingModule } from '../app-routing.module';//angular puede saber que este modulo esta cargado en la memoria y se volvera a utilizar ya utilizado en app.module




@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraficalComponent,
    PagesComponent
],//de esta manera solo se pueden utilizar de manera interna, se necesita exportar para utilizarlos de manera externa
//al exportarlos digo que este modulo al ser importado es como si lo exports estuvieran en sus declaraciones y lugares
exports: [
  DashboardComponent,
  ProgressComponent,
  GraficalComponent,
  PagesComponent
],
imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule
  ]
})
export class PagesModule { }
