import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  loginService = inject(LoginService);
  roteador = inject(Router);

  logout(): void {
    this.loginService.deslogar().subscribe({
      next: response => { // QUANDO DÁ CERTO
        this.loginService.removerToken()
        this.roteador.navigate(['/login']);

      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
    console.log('Função de logout chamada!');
  }



}
