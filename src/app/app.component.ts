import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Punto5Component } from './punto5/punto5.component';
import { ProductoComponent } from './punto1/productosdestacados/components/producto.component';
import { AltaProductosComponent } from './punto1/altaproductos/components/altaproductos.component';
import { AltatransaccionComponent } from './punto2/altatransaccion/components/altatransaccion.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, ProductoComponent, AltaProductosComponent, AltatransaccionComponent,Punto5Component]
})
export class AppComponent {
  title = 'tp5Frontend';
}
