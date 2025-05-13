import { Component, input, model } from '@angular/core';

import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-listado-peliculas',
  imports: [CurrencyPipe, UpperCasePipe, DatePipe],
  templateUrl: './listado-peliculas.component.html',
})
export class ListadoPeliculasComponent {
  peliculas = model<any[]>([]);

  agregarPelicula() {
    this.peliculas.update((v) => [
      ...v,
      {
        id: Date.now(),
        titulo: 'Inception',
        fechaLanzamiento: new Date('2012-07-03'),
      },
    ]);
  }

  remover(pelicula: any) {
    const indice = this.peliculas().findIndex(
      (peliActual: any) => peliActual.id === pelicula.id
    );

    if (indice !== -1) {
      this.peliculas.update((v) => {
        const nuevoArray = [...v];
        nuevoArray.splice(indice, 1); // <-- aquí está el cambio
        return nuevoArray;
      });
    }
  }
}
