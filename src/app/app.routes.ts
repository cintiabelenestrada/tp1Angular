import { Routes } from '@angular/router';
import { ProductoComponent } from './punto1/productosdestacados/components/producto.component';
// import { Punto2Component } from './punto2/punto2.component';
import { Punto5Component } from './punto5/punto5.component';
import { AltaProductosComponent } from './punto1/altaproductos/components/altaproductos.component';

export const routes: Routes = [
    {path: 'productosdestacados', component: ProductoComponent},
    {path: 'altaproductos', component: AltaProductosComponent},
    // {path: 'punto2', component: Punto2Component},
    {path: 'punto5', component: Punto5Component},
];
