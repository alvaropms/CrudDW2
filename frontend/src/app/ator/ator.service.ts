import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import Ator from './models/ator.model';

@Injectable({
  providedIn: 'root'
})
export class AtorService {

  private apiUrl = 'http://localhost:3000/ator';

  constructor(private http: HttpClient) { }

  listar(): Observable<Ator[]> {
    return this.http.get<Ator[]>(this.apiUrl);
  }

  buscarPorId(id: number): Observable<Ator> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

  criar(ator: Ator): Observable<Ator> {
    return this.http.post(this.apiUrl, ator);
  }

  atualizar(id: number, ator: Ator): Observable<Ator> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Ator>(url, ator);
  }

  excluir(id: number): Observable<Ator> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Ator>(url);
  }
}
