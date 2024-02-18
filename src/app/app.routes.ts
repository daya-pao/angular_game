import { Routes } from '@angular/router';
import { InicioComponent } from './compartido/inicio/inicio.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
<<<<<<< HEAD
import { JuegosComponent } from './compartido/juegos/juegos.component';
=======
import { AcercadenosotrosComponent } from './compartido/acercadenosotros/acercadenosotros.component';
>>>>>>> 1bddbdfdea4af45fe37f9743daaaf468acb2edcc

/*  path: define lo que es la tuta de la url 
y el component:nos define el componente que angular va usar para esa ruta correspondiente*/
export const routes: Routes = [
    {'path':'inicio', 'title':'Inicio',component:InicioComponent},
<<<<<<< HEAD
    {'path':'Juegos', 'title':'Juegos',component:JuegosComponent},
    {'path':'',redirectTo:'/inicio',pathMatch: 'full'}, 
=======
    {'path':'ventas','title':'ventas',component:VentasComponent},
    {'path':'contacto','title':'contacto',component:ContactoComponent},
    {'path':'acerca', component:AcercadenosotrosComponent},
    {'path':'',redirectTo:'/inicio', pathMatch: 'full'}, 
>>>>>>> 1bddbdfdea4af45fe37f9743daaaf468acb2edcc
    {'path':'**' , component:PageNotfoundComponent},
];
