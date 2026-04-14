import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {

  public juegos = [
    {portada:'assets/img/g1.jpg',titulo:'Call of Duty' , precio:'300 '},
    {portada:'assets/img/g2.jpg',titulo:'Battlefield',precio:'500'},
    {portada:'assets/img/g3.jpg',titulo:'Hallo reach',precio:'200'},
    {portada:'assets/img/g4.jpg',titulo:'Fortnite', precio:'100'},
    {portada:'assets/img/g5.jpg',titulo:'CRT Crash',precio:'600'},
    {portada:'assets/img/g7.jpg',titulo:'The Surge',precio:'400'},
  ]


}
