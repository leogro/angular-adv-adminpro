import { Component,EventEmitter,Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

   ngOnInit(){
     this.btnClass = `btn ${ this.btnClass }`;//se contatena btn y toma el valor que tenga btnClass
   }

   //se crea una propiedad llamada progreso para la barra de progreso
   @Input('valor') progreso: number = 40;  //como renombrar argumento
   @Input() btnClass: string = 'btn-primary';//boton o clase por defecto, se manda llamar como [ngClass] en el html los corchetes mandan el valor literal que tendra
    
   @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();//parentesis simbolizan un evento, con el new inicializa

 //metodo
   cambiarValor( valor: number ){
 
     if ( this.progreso >= 100 && valor >= 0) {
       this.valorSalida.emit(100);
       this.progreso = 100;
       return;
     }
 
     if ( this.progreso <= 0 && valor < 0) {
       this.valorSalida.emit(0);
       this.progreso = 0;
       return;
     }
 
     this.progreso = this.progreso + valor;
     this.valorSalida.emit( this.progreso );
   }

   onChange( nuevoValor: number ){

    if(nuevoValor >= 100 ){
      this.progreso = 100;
    } else if (nuevoValor <= 0){
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }

    this.valorSalida.emit( this.progreso );
   }

}
