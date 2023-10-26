import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { FuncionariosService } from 'src/app/services/funcionarios.service';

@Component({
  selector: 'app-funcionariosdetails',
  templateUrl: './funcionariosdetails.component.html',
  styleUrls: ['./funcionariosdetails.component.scss']
})
export class FuncionariosdetailsComponent {
  @Input() funcionario: Usuario = new Usuario();
  @Output() retorno = new EventEmitter<Usuario>();

 funcionarioService = inject(FuncionariosService);


  constructor() {

  }

  salvar() {
    //ISSO AQUI SERVE PARA EDITAR OU ADICIONAR... TANTO FAZ
    this.funcionario.cargo = "FUNCIONARIO";
    this.funcionarioService.save(this.funcionario).subscribe({
      next: produto => { // QUANDO DÁ CERTO
        this.retorno.emit(produto);
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });



  }

}
