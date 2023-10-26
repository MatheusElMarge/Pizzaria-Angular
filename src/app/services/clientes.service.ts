import { Injectable, inject } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  API: string = 'http://localhost:8080/api/user';
  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Usuario[]> {
    console.log(this.http.get<Usuario[]>(this.API));
    
    
    return this.http.get<Usuario[]>(this.API).pipe(
      map((usuario: Usuario[]) => usuario.filter(usuario => usuario.cargo == "CLIENTE"))
    );
  }

  save(cliente: Usuario): Observable<Usuario> {
    if (cliente.id !== undefined){
      console.log(cliente.id + '  edit');
      return this.http.put<Usuario>(this.API, cliente);
    }
    console.log('save');

    return this.http.post<Usuario>(this.API, cliente);
  }

  delete(cliente: Usuario): Observable<String> {
    return this.http.delete(this.API + "/" + cliente.id, { responseType: 'text' });
  }

  exemploErro(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.API + '/erro');
  }



}
