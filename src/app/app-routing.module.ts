//archivo de las rutas principales de la aplicacion
import { NgModule } from '@angular/core';
//importamos el modulo del router
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GraficalComponent } from './pages/grafical/grafical.component';
import { NotpagefoundComponent } from './pages/notpagefound/notpagefound.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './pages/progress/progress.component';

//Routes se importa desde angular router se hace arreglo
const routes: Routes = [

  //esta es la ruta donde estaran todas mis rutas protegidas
  {
    path: '', 
    component: PagesComponent,
    children: [
      //rutas protegidas
  {path: 'dashboard', component: DashboardComponent},
  {path: 'progress', component: ProgressComponent},
  {path: 'grafical', component: GraficalComponent},
  //cuando se estra dentro del path: ''; intenta buscar una ruta que coincida, no encuentra
  //exceptuando la linea de abajo, me pide que redireccione al dashboard, se busca el dashboard en el arreglo y lo muestra
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
  },

  
//rutas publicas
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}
  ,
 
  {path: '**', component: NotpagefoundComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes ) //forroot es para importar rutas principales, y se manda llamar el arreglo de routes
  ],
  exports: [RouterModule] //se exporta el modulo de router para que se puedan utilizar sus rutas
})
export class AppRoutingModule { }
