import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  Diretor  from './models/diretor.model';

@Injectable({
  providedIn: 'root'
})
export class DiretorService {

  private apiUrl = 'http://localhost:3000/diretor';

  constructor(private http: HttpClient) { }

  listar(): Observable<Diretor[]> {
    return this.http.get<Diretor[]>(this.apiUrl);
  }

  buscarPorId(id: number): Observable<Diretor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Diretor>(url);
  }

  criar(diretor: Diretor): Observable<Diretor> {
    return this.http.post<Diretor>(this.apiUrl, diretor);
  }

  atualizar(id: number, diretor: Diretor): Observable<Diretor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Diretor>(url, diretor);
  }

  excluir(id: number): Observable<Diretor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Diretor>(url);
  }

}