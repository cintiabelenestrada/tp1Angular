import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AltatransaccionService {
  constructor(private _http: HttpClient) {}

  // service que trae el origen y destino de transacciones
  public getOrigenDestinoTransacciones():Observable<any> {
    const httOptions={
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'bab76fe0d0msh81e9d1b3f602fc5p18588bjsn1d91f66cc06a',
        'x-rapidapi-host': 'currency-converter18.p.rapidapi.com',
      }),
    };
    return this._http.get('https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies?=&=',httOptions);
  };
  
}
