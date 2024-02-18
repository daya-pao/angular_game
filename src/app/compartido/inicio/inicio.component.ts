import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {

  public juegos = [
    {portada:'assets/img/g1.jpg',titulo:'juego lorem'},
    {portada:'assets/img/g2.jpg',titulo:'juego lorem'},
    {portada:'assets/img/g3.jpg',titulo:'juego lorem'},
    {portada:'assets/img/g4.jpg',titulo:'juego lorem'},
    {portada:'assets/img/g5.jpg',titulo:'juego lorem'},
    {portada:'assets/img/g7.jpg',titulo:'juego lorem'},
  ]


}
