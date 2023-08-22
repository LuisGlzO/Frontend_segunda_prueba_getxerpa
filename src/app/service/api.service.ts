import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'http://localhost:8000/api/1.0/'

  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.urlApi+'categorias')
  }

  public crearCategoria(nuevaCategoria: any): Observable<any> {
    return this.http.post(this.urlApi + 'categorias', nuevaCategoria);
  }
}
