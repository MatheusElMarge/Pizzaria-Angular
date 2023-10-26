import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/models/usuario';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clienteslist',
  templateUrl: './clienteslist.component.html',
  styleUrls: ['./clienteslist.component.scss']
})
export class ClienteslistComponent {
  lista: Usuario[] = [];

  @Output() retorno = new EventEmitter<Usuario>();
  @Input() modoLancamento: boolean = false;


  objetoSelecionadoParaEdicao: Usuario = new Usuario();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  clienteService = inject(ClientesService);

  constructor() {

    this.listAll();
    // this.exemploErro();

  }


  listAll() {

    this.clienteService.listAll().subscribe({

      
      next: lista => { // QUANDO DÁ CERTO
        this.lista = lista;
  console.log(lista)
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }

  delete(cliente: Usuario) {

     this.clienteService.delete(cliente).subscribe({
      next: cliente => { // QUANDO DÁ CERTO
        console.log(this.retorno);
        this.listAll();
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });



  }

  exemploErro() {

    this.clienteService.exemploErro().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.lista = lista;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }

    // MÉTODOS DA MODAL

    adicionar(modal: any) {
      this.objetoSelecionadoParaEdicao = new Usuario();
      this.indiceSelecionadoParaEdicao = -1;

      this.modalRef = this.modalService.open(modal, { size: 'md' });
    }

    editar(modal: any, cliente: Usuario, indice: number) {
      this.objetoSelecionadoParaEdicao = Object.assign({}, cliente); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
      this.indiceSelecionadoParaEdicao = indice;

      this.modalRef = this.modalService.open(modal, { size: 'md' });
    }

    addOuEditar(cliente: Usuario) {

      this.listAll();

      this.modalService.dismissAll();
    }



    lancamento(cliente: Usuario){
      this.retorno.emit(cliente);
    }


}

