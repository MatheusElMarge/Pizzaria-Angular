import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientesdetails',
  templateUrl: './clientesdetails.component.html',
  styleUrls: ['./clientesdetails.component.scss']
})
export class ClientesdetailsComponent {
    @Input() cliente: Usuario = new Usuario();
    @Output() retorno = new EventEmitter<Usuario>();
  
   clienteService = inject(ClientesService);
  
  
    constructor() {
  
    }
  
    salvar() {
      //ISSO AQUI SERVE PARA EDITAR OU ADICIONAR... TANTO FAZ
      this.cliente.cargo = "CLIENTE";
      this.clienteService.save(this.cliente).subscribe({
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
