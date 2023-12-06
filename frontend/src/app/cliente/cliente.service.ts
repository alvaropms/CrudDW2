import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  Cliente  from './models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl = 'http://localhost:3000/cliente';

  constructor(private http: HttpClient) { }

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  buscarPorId(id: number): Observable<Cliente> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Cliente>(url);
  }

  criar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }

  atualizar(id: number, cliente: Cliente): Observable<Cliente> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Cliente>(url, cliente);
  }

  excluir(id: number): Observable<Cliente> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Cliente>(url);
  }

  listarAtivos(): Observable<Cliente[]> {
    const url = `${this.apiUrl}/ativos`;
    return this.http.post<Cliente[]>(url, {});
  }

  mudarStatus(id: number, ativo: boolean): Observable<Cliente> {
    const url = `${this.apiUrl}/status/${id}`;
    return this.http.put<Cliente>(url, { ativo });
  }

}