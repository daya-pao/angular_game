import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

/* routerLink:
convierte ese elemento en un vínculo que inicia la navegación a una ruta. 
La navegación abre uno o varios componentes enrutados
en una o más ubicaciones de la página.
*/
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink ,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}