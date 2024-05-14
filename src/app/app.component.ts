import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Punto1Component } from './punto1/punto1.component';
import { CarritoComponent } from "./carrito/carrito.component";
import { Punto2Component } from "./punto2/punto2.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, Punto1Component, CarritoComponent, Punto2Component]
})
export class AppComponent {
  title = 'tp1Angular';
}
