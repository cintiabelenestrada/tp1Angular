import { Component, OnInit } from '@angular/core';
import { AltatransaccionService } from '../services/altatransaccion.service';
import { Monedas, Transaccion } from '../models/transaccion.model';

@Component({
  selector: 'app-altatransaccion',
  standalone: true,
  imports: [],
  templateUrl: './altatransaccion.component.html',
  styleUrl: './altatransaccion.component.css'
})
export class AltatransaccionComponent implements OnInit {
  monedas: Monedas[] = [];
  transacciones!: Transaccion[];
  constructor(private transaccionService: AltatransaccionService) {}
  
  ngOnInit(): void {
    this.obtenerMonedas();
  }
  obtenerMonedas() {
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
  obtenerAllTransacciones(){
    this.transaccionService.getAllTransacciones().subscribe(      
      (data: any) => {
        this.transacciones = data;
        console.log("transacciones data",JSON.stringify(data));
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
