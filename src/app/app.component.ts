import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Punto1Component } from './punto1/punto1.component';
import { CarritoComponent } from "./carrito/carrito.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, Punto1Component, CarritoComponent]
})
export class AppComponent {
  title = 'tp1Angular';
}
