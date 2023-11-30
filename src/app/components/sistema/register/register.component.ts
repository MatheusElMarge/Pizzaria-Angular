import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from 'src/app/services/login.service';
import { usuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  usuario: Usuario = new Usuario();
  roteador = inject(Router);
  usuarioService = inject(usuarioService);

  constructor() {

  }

  cadastrar() {

    this.usuarioService.save(this.usuario).subscribe({
      next: user => { // QUANDO DÁ CERTO
        console.log(user);

        this.roteador.navigate(['/admin/dashboard']);
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });


  }

}
