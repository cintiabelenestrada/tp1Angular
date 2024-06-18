import { Routes } from '@angular/router';
import { ProductoComponent } from './punto1/productosdestacados/components/producto.component';
import { Punto5Component } from './punto5/punto5.component';
import { AltaProductosComponent } from './punto1/altaproductos/components/altaproductos.component';
import { AltatransaccionComponent } from './punto2/altatransaccion/components/altatransaccion.component';
import { ListaTransaccionComponent } from './punto2/listatransacciones/components/listatransaccion/listatransaccion.component';

export const routes: Routes = [
    {path: 'productosdestacados', component: ProductoComponent},
    {path: 'altaproductos', component: AltaProductosComponent},
    {path: 'altatransaccion', component: AltatransaccionComponent},
    {path: 'listatransaccion', component: ListaTransaccionComponent},
    {path: 'punto5', component: Punto5Component}
];
