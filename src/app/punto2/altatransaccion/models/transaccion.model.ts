export interface Transaccion {
  monedaOrigen: string;
  cantidadOrigen: number;
  monedaDestino: string;
  cantidadDestino: number;
  emailCliente: string;
  tasaConversion: number;
}

export interface Monedas {
  symbol: string;
  name: string;
}
