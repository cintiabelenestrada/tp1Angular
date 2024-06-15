import { Injectable } from '@angular/core';

// Interfaz para definir la estructura de un ticket
export interface Ticket {
  dni: string;
  precioReal: number;
  tipoEspectador: string;
  fechaCobro: Date;
  precioCobrado: number;
}

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }
}
