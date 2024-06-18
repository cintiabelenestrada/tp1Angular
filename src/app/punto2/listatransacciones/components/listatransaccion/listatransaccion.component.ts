import { Component } from '@angular/core';
import { ListatransaccionService } from '../../services/listatransaccion.service';
import { ListaTransaccion } from '../../models/listatransaccion';

@Component({
  selector: 'app-listatransaccion',
  standalone: true,
  imports: [],
  templateUrl: './listatransaccion.component.html',
  styleUrl: './listatransaccion.component.css'
})
export class ListaTransaccionComponent {
  transacciones!: ListaTransaccion[];
  constructor(private listaTransaccionService: ListatransaccionService) {}

  obtenerAllTransacciones(){
    this.listaTransaccionService.getAllTransacciones().subscribe(      
      (data: any) => {
        console.log("transacciones data transacciones",JSON.stringify(data.transacciones));
        this.transacciones = data.transacciones;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
