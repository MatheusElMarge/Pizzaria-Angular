import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  API: string = 'http://localhost:8080/api/pedido';
  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Pedido[]> {
    console.log(this.http.get<Pedido[]>(this.API));
    return this.http.get<Pedido[]>(this.API);
  }

  save(pedido: Pedido): Observable<Pedido> {
    console.log(pedido);
    return this.http.post<Pedido>(this.API, pedido);
  }

  // itens(pedido: Pedido): Observable<Item[]> {
  //   return this.http.get<Item[]>(this.API);
  // }


  exemploErro(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.API + '/erro');
  }


}
