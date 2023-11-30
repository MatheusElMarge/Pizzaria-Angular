import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class usuarioService {

  API: string = 'http://localhost:8080/api/usuario';
  http = inject(HttpClient);

  constructor() { }

  listAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.API);
  }

  // byNome(nome: string): Observable<Usuario[]> {
  //   const params = new HttpParams().set('nome', nome);
  //   return this.http.get<Usuario[]>(this.API + '/buscar', {params});
  // }

  save(usuario: Usuario): Observable<Usuario> {
    if (usuario.id !== undefined){

      return this.http.put<Usuario>(this.API + "/edit/" +  usuario.id, usuario);
    }
    return this.http.post<Usuario>(this.API + "/cadastro", usuario);
  }

  delete(usuario: Usuario): Observable<String> {
    return this.http.delete(this.API + "/" + usuario.id, { responseType: 'text' });
  }

  exemploErro(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.API + '/erro');
  }



}
