import { Routes } from '@angular/router';
import { InicioComponent } from './compartido/inicio/inicio.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { JuegosComponent } from './compartido/juegos/juegos.component';

export const routes: Routes = [
    {'path':'inicio', 'title':'Inicio',component:InicioComponent},
    {'path':'Juegos', 'title':'Juegos',component:JuegosComponent},
    {'path':'',redirectTo:'/inicio',pathMatch: 'full'}, 
    {'path':'**' , component:PageNotfoundComponent},
];
