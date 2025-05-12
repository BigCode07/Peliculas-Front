import { Component, input } from '@angular/core';

import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-listado-peliculas',
  imports: [CurrencyPipe, UpperCasePipe, DatePipe],
  templateUrl: './listado-peliculas.component.html',
})
export class ListadoPeliculasComponent {
  peliculas = input<any[]>([]);
}
