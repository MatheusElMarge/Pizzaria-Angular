import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  API: string = 'http://localhost:8080/api/itens';
  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Item[]> {
    return this.http.get<Item[]>(this.API);
  }

  save(item: Item): Observable<Item> {
    if (item.id !== undefined){
      console.log(item.id + '  edit');
      return this.http.put<Item>(this.API + '/editar/' + item.id, item);
    }
    console.log('save');

    return this.http.post<Item>(this.API, item);
  }

  delete(item: Item): Observable<String> {
    return this.http.delete(this.API + "/deletar/" + item.id, { responseType: 'text' });
  }

  exemploErro(): Observable<Item[]> {
    return this.http.get<Item[]>(this.API + '/erro');
  }



}
