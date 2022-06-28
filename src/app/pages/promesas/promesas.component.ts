import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

   this.getUsuarios().then( usuarios => {
    console.log(usuarios);
   })


//    const promesa = new Promise( ( resolve, reject ) => {

 //     if ( false ){
 //       console.log('Hola mundo');
 //     } else {
  //      reject('Algo salio mal');
 //     }
 //   });

 //   promesa.then ( (mensaje) => {
 //     console.log('mensaje');
 //   })
 //   .catch ( (error) => console.log('Error en mi promesa', error) );

 //   console.log('Fin del Init');
  }

  getUsuarios(){

    const promesa = new Promise( resolve => {

      fetch('https://reqres.in/api/users') //parte de la promesa
      .then( resp => resp.json() ) //peticion
      .then( body => resolve( body.data ) );//respuesta

    });

    return promesa;

      }
  
}
