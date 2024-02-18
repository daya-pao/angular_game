
import { Component, OnInit, inject} from '@angular/core';
import { JuegosService } from '../../servicios/juegos.service';
import { Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-juegos', 
  standalone: true,
  imports: [],
  templateUrl: './juegos.component.html',
  styleUrl: './juegos.component.css'
})
export class JuegosComponent implements OnInit {

  constructor(private http: HttpClient) { }

  juegos: any = [];

  ngOnInit(): void {
    this.fetchJuegos();
  }

  fetchJuegos() {
    this.http.get('https://api.rawg.io/api/games?key=3fe78f10d5af4b27899d5cbada1375ce')
      .subscribe((juegos: any) => {
        this.juegos = juegos;
      });
  }



  
  /* juegos: any[] = []; // Variable para almacenar la lista de juegos

  constructor(private juegosService: JuegosService) { }

  ngOnInit(): void {
    this.cargarJuegos(); // Llama a la función para cargar los juegos cuando se inicialice el componente
  }

  cargarJuegos(): void {
    const observer: Observer<any> = {
      next: (data: any) => {
        this.juegos = data.resultado; // Almacena la lista de juegos en la variable 'juegos'
        console.log(data.resultado);
      },
      error: (error: any) => {
        console.log('Error al cargar los juegos:', error);
      },
      complete: () => {
        // Puedes dejar esta función vacía o implementarla según sea necesario
      }
    };

    this.juegosService.getjuegos().subscribe(observer);
  } */
}
