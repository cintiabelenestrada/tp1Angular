import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private _http:HttpClient) { }
  public getObtenerProductosDestacados(): Observable<any> {

    return this._http.get('http://localhost:3000/api/producto/destacados');
  }

}
