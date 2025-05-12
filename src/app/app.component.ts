import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [DatePipe, UpperCasePipe, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-peliculas';
  apellido = 'Gavilan';
  edad = 33;
  pelicula = {
    title: 'Spiderman',
    fechaLanzamiento: new Date(),
    precio: 1400.99,
  };

  peliculas = [
    {
      titulo: 'The Matrix',
      fechaLanzamiento: '1999-03-31',
      precio: 10.5,
      poster:
        'https://www.themoviedb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    },

    {
      titulo: 'The Dark Knight',
      fechaLanzamiento: '2008-07-18',
      precio: 11.75,
      poster:
        'https://www.themoviedb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    },

    {
      titulo: 'Forrest Gump',
      fechaLanzamiento: '1994-07-06',
      precio: 8.5,
      poster:
        'https://www.themoviedb.org/t/p/original/saHP97rTPS5eLmrLQEcANmKrsFl.jpg',
    },
    {
      titulo: 'Avengers: Endgame',
      fechaLanzamiento: '2019-04-26',
      precio: 13.25,
      poster:
        'https://www.themoviedb.org/t/p/original/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg',
    },
    {
      titulo: 'Gladiator',
      fechaLanzamiento: '2000-05-05',
      precio: 10.0,
      poster:
        'https://www.themoviedb.org/t/p/original/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
    },

    {
      titulo: 'Parasite',
      fechaLanzamiento: '2019-05-30',
      precio: 12.0,
      poster:
        'https://www.themoviedb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    },
  ];

  duplicarNumero(valor: number): number {
    return valor * 2;
  }
}
