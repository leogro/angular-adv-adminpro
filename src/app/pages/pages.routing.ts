//modulo que tendra definicion de las rutas que estan internas a este directorio
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficalComponent } from './grafical/grafical.component';



const routes: Routes = [
   
  //esta es la ruta donde estaran todas mis rutas protegidas
  {
        path: 'dashboard', 
        component: PagesComponent,
        children: [
        //rutas protegidas
            {path: '', component: DashboardComponent},
            {path: 'progress', component: ProgressComponent},
            {path: 'grafical', component: GraficalComponent},
    //cuando se estra dentro del path: ''; intenta buscar una ruta que coincida, no encuentra
    //exceptuando la linea de abajo, me pide que redireccione al dashboard, se busca el dashboard en el arreglo y lo muestra
            //{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        ]
  },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
