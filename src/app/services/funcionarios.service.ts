import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  API: string = 'http://localhost:8080/api/sabor';
  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.API);
  }

  save(funcionario: Usuario): Observable<Usuario> {
    if (funcionario.id !== undefined){
      console.log(funcionario.id + '  edit');
      return this.http.put<Usuario>(this.API, funcionario);
    }
    console.log('save');

    return this.http.post<Usuario>(this.API, funcionario);
  }

  delete(funcionario: Usuario): Observable<String> {
    return this.http.delete(this.API + "/" + funcionario.id, { responseType: 'text' });
  }

  exemploErro(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.API + '/erro');
  }



}
