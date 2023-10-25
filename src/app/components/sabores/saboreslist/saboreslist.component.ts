import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Sabor } from 'src/app/models/sabor';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SaboresService } from 'src/app/services/sabores.service';

@Component({
  selector: 'app-saboreslist',
  templateUrl: './saboreslist.component.html',
  styleUrls: ['./saboreslist.component.scss']
})
export class SaboreslistComponent {

  lista: Sabor[] = [];

  @Output() retorno = new EventEmitter<Sabor>();
  @Input() modoLancamento: boolean = false;


  objetoSelecionadoParaEdicao: Sabor = new Sabor();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  saborservice = inject(SaboresService);

  constructor() {

    this.listAll();
    // this.exemploErro();

  }


  listAll() {

    this.saborservice.listAll().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.lista = lista;

      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }

  exemploErro() {

    this.saborservice.exemploErro().subscribe({
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
      this.objetoSelecionadoParaEdicao = new Sabor();
      this.indiceSelecionadoParaEdicao = -1;

      this.modalRef = this.modalService.open(modal, { size: 'md' });
    }

    editar(modal: any, sabor: Sabor, indice: number) {
      this.objetoSelecionadoParaEdicao = Object.assign({}, sabor); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
      this.indiceSelecionadoParaEdicao = indice;

      this.modalRef = this.modalService.open(modal, { size: 'md' });
    }

    addOuEditar(sabor: Sabor) {

      this.listAll();

      this.modalService.dismissAll();
    }


    lancamento(sabor: Sabor){
      this.retorno.emit(sabor);
    }


}
