import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListatransaccionService {
  constructor(private _http: HttpClient) {}
  public getAllTransacciones(): Observable<any> {
    return this._http.get('http://localhost:3000/api/transaccion');
  }
}
