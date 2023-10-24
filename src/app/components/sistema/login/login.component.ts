import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  usuario: Usuario = new Usuario();
  roteador = inject(Router);

  logar() {
    if (this.usuario.login == 'admin' && this.usuario.senha == 'admin')
      this.roteador.navigate(['admin/pedidos']);
    else
      alert('Login ou senha incorretos!');
  }


}
