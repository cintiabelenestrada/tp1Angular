import { Routes } from '@angular/router';
import { ProductoComponent } from './punto1/components/producto.component';
import { Punto2Component } from './punto2/punto2.component';
import { Punto5Component } from './punto5/punto5.component';

export const routes: Routes = [
    {path: 'punto1', component: ProductoComponent},
    {path: 'punto2', component: Punto2Component},
    {path: 'punto5', component: Punto5Component},
];
