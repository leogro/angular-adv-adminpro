import { Component } from '@angular/core';

@Component({
  selector: 'app-notpagefound',
  templateUrl: './notpagefound.component.html',
  styleUrls: ['./notpagefound.component.css'
  ]
})
export class NotpagefoundComponent  {

  year = new Date().getFullYear(); //se obtiene el año actual, para llamar esta funcion se utiliza  {{year}} en el apartado de html

}
