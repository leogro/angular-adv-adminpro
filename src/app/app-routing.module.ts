//archivo de las rutas principales de la aplicacion
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importamos el modulo del router
import { PagesRoutingModule } from './pages/pages.routing';

import { NotpagefoundComponent } from './notpagefound/notpagefound.component';
import { AuthRoutingModule } from './auth/auth.routing';


//Routes se importa desde angular router se hace arreglo
const routes: Routes = [

//path: '/dashboard'-progress y grafical PagesRouting
//path: '/auth'- login y register AuthRouting
//path: '/medicos' MedicosRouting
//path: '/compras' ComprasRouting

//rutas publicas
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: NotpagefoundComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot( routes ), //forroot es para importar rutas principales, y se manda llamar el arreglo de routes
    PagesRoutingModule,//pagesrouting se exporta
    AuthRoutingModule
  ],
  exports: [RouterModule] //se exporta el modulo de router para que se puedan utilizar sus rutas
})
export class AppRoutingModule { }
