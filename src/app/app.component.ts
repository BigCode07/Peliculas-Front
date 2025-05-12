import { Pelicula } from './peliculas/interfaces/pelicula.interface';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListadoPeliculasComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  peliculasCines: Pelicula[] = [];
  peliculasProximosEstrenos: Pelicula[] = [];
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasCines = [
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

      this.peliculasProximosEstrenos = [
        {
          titulo: 'The Last Of Us',
          fechaLanzamiento: '2025-07-25',
          precio: 12.5,
          poster:
            'https://image.tmdb.org/t/p/w600_and_h900_bestv2/tNQWO6cNzQYCyvw36mUcAQQyf5F.jpg',
        },
        {
          titulo: 'Destino final: Lazos de sangre',
          fechaLanzamiento: '2025-05-15',
          precio: 13.0,
          poster:
            'https://image.tmdb.org/t/p/w600_and_h900_bestv2/eMrXZnGTPy52zgplp7PbZWll8W7.jpg',
        },
        {
          titulo: 'Lilo & Stitch (Live-Action)',
          fechaLanzamiento: '2025-06-21',
          precio: 10.0,
          poster:
            'https://image.tmdb.org/t/p/w600_and_h900_bestv2/COzWKbKbHGsOM7HjWuYrUrlQ8r.jpg',
        },
      ];
    }, 2000);
  }
}
