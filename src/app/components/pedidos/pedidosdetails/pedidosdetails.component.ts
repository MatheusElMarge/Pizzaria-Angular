import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Item } from 'src/app/models/item';
import { Pedido } from 'src/app/models/pedido';
import { Sabor } from 'src/app/models/sabor';
import { Usuario } from 'src/app/models/usuario';
import { PedidosService } from 'src/app/services/pedidos.service';
import { usuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-pedidosdetails',
  templateUrl: './pedidosdetails.component.html',
  styleUrls: ['./pedidosdetails.component.scss']
})
export class PedidosdetailsComponent {

  msg: String = "Adicionar Item";

  @Input() pedido: Pedido = new Pedido();
  @Output() retorno = new EventEmitter<Pedido>();
  @Output() retornoItens = new EventEmitter<Item[]>();

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  pedidosService = inject(PedidosService);
  usuariosService = inject(usuarioService);
  listaUsers: Usuario[] = [];

  constructor() {
    // console.log(this.pedido.item);
    this.listUsers();

  }

  salvar() {

    this.pedidosService.save(this.pedido).subscribe({
      next: pedido => { // QUANDO DÁ CERTO
        this.retorno.emit(pedido);
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }

  listUsers() {

    this.usuariosService.listAll().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.listaUsers = lista;
        console.log(this.listaUsers)
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }

  pickItem(modal: any) {
    this.modalRef = this.modalService.open(modal, { size: 'md' });
  }

  deleteItem(index: number) {
    this.pedido.item.splice(index, 1);
  }


  addOuEditar(item: Item) {

    this.pedido.item.push(item);

    this.modalRef.close();
  }

}
