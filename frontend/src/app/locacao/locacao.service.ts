import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Locacao from './models/locacao.model';

@Injectable({
  providedIn: 'root'
})
export class LocacaoService {

  private apiUrl = 'http://localhost:3000/locacao';

  constructor(private http: HttpClient) { }

  listar(): Observable<Locacao[]> {
    return this.http.get<Locacao[]>(this.apiUrl);
  }

  buscarPorId(id: number): Observable<Locacao> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Locacao>(url);
  }

  criar(item: Locacao): Observable<Locacao> {
    return this.http.post<Locacao>(this.apiUrl, item);
  }

  atualizar(id: number, item: Locacao): Observable<Locacao> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Locacao>(url, item);
  }

  excluir(id: number): Observable<Locacao> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Locacao>(url);
  }

  devolver(id: number): Observable<Locacao> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.post<Locacao>(url, {});
  }

}