import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../../productosdestacados/models/productosModel';

@Injectable({
  providedIn: 'root'
})
export class AltaProductoService {

  constructor(private _http:HttpClient) { }

  public postAltaProducto(product: Producto) {
    return this._http.post('http://localhost:3000/api/producto',product);
  }
}
