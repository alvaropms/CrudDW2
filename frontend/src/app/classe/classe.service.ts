import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Classe from './models/classe.model';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  private apiUrl = 'http://localhost:3000/classe';

  constructor(private http: HttpClient) { }

  listar(): Observable<Classe[]> {
    return this.http.get<Classe[]>(this.apiUrl);
  }

  buscarPorId(id: number): Observable<Classe> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Classe>(url);
  }

  criar(classe: Classe): Observable<Classe> {
    return this.http.post<Classe>(this.apiUrl, classe);
  }

  atualizar(id: number, classe: Classe): Observable<Classe> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Classe>(url, classe);
  }

  excluir(id: number): Observable<Classe> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Classe>(url);
  }

}