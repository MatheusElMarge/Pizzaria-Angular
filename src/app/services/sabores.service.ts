import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sabor } from '../models/sabor';

@Injectable({
  providedIn: 'root'
})
export class SaboresService {

  API: string = 'http://localhost:8080/api/sabor';
  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Sabor[]> {
    return this.http.get<Sabor[]>(this.API);
  }

  save(sabor: Sabor): Observable<Sabor> {
    if (sabor.id !== undefined){
      console.log(sabor.id + '  edit');
      return this.http.put<Sabor>(this.API, sabor);
    }
    console.log('save');

    return this.http.post<Sabor>(this.API, sabor);
  }

  delete(sabor: Sabor): Observable<String> {
    return this.http.delete(this.API + "/" + sabor.id, { responseType: 'text' });
  }

  exemploErro(): Observable<Sabor[]> {
    return this.http.get<Sabor[]>(this.API + '/erro');
  }



}
