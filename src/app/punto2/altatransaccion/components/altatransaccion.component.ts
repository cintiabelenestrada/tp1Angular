import { Component } from '@angular/core';
import { AltatransaccionService } from '../services/altatransaccion.service';
import { Monedas } from '../models/transaccion.model';

@Component({
  selector: 'app-altatransaccion',
  standalone: true,
  imports: [],
  templateUrl: './altatransaccion.component.html',
  styleUrl: './altatransaccion.component.css'
})
export class AltatransaccionComponent {
  monedas: Monedas[] = [];

  constructor(private transaccionService: AltatransaccionService) {}
  
  obtenerMonedas() {
    console.log('Monedas');
    this.transaccionService.getOrigenDestinoTransacciones().subscribe(
      (data: any) => {
        this.monedas = data;
        console.log('Monedas data:', data);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
