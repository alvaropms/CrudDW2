import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  Titulo  from './models/titulo.model';

@Injectable({
  providedIn: 'root'
})
export class TituloService {

  private apiUrl = 'http://localhost:3000/titulo';

  constructor(private http: HttpClient) { }

  listar(): Observable<Titulo[]> {
    return this.http.get<Titulo[]>(this.apiUrl);
  }

  buscarPorId(id: number): Observable<Titulo> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Titulo>(url);
  }

  criar(titulo: Titulo): Observable<Titulo> {
    return this.http.post<Titulo>(this.apiUrl, titulo);
  }

  atualizar(id: number, titulo: Titulo): Observable<Titulo> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Titulo>(url, titulo);
  }

  excluir(id: number): Observable<Titulo> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Titulo>(url);
  }

}