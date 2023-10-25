import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/models/usuario';
import { FuncionariosService } from 'src/app/services/funcionarios.service';
@Component({
  selector: 'app-funcionarioslist',
  templateUrl: './funcionarioslist.component.html',
  styleUrls: ['./funcionarioslist.component.scss']
})
export class FuncionarioslistComponent {

  lista: Usuario[] = [];

  @Output() retorno = new EventEmitter<Usuario>();
  @Input() modoLancamento: boolean = false;


  objetoSelecionadoParaEdicao: Usuario = new Usuario();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  funcionarioService = inject(FuncionariosService);

  constructor() {

    this.listAll();
    // this.exemploErro();

  }


  listAll() {

    this.funcionarioService.listAll().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.lista = lista;

      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }

  delete(funcionario: Usuario) {

     this.funcionarioService.delete(funcionario).subscribe({
      next: funcionario => { // QUANDO DÁ CERTO
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

    this.funcionarioService.exemploErro().subscribe({
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

    editar(modal: any, funcionario: Usuario, indice: number) {
      this.objetoSelecionadoParaEdicao = Object.assign({}, funcionario); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
      this.indiceSelecionadoParaEdicao = indice;

      this.modalRef = this.modalService.open(modal, { size: 'md' });
    }

    addOuEditar(funcionario: Usuario) {

      this.listAll();

      this.modalService.dismissAll();
    }



    lancamento(funcionario: Usuario){
      this.retorno.emit(funcionario);
    }


}