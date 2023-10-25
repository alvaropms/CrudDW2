import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  Item  from './models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiUrl = 'http://localhost:3000/item';

  constructor(private http: HttpClient) { }

  listar(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  buscarPorId(id: number): Observable<Item> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Item>(url);
  }

  criar(item: Item): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, item);
  }

  atualizar(id: number, item: Item): Observable<Item> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Item>(url, item);
  }

  excluir(id: number): Observable<Item> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Item>(url);
  }

}