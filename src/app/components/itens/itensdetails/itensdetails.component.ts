import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Item } from 'src/app/models/item';
import { Sabor } from 'src/app/models/sabor';
import { SaboresService } from 'src/app/services/sabores.service';

@Component({
  selector: 'app-itensdetails',
  templateUrl: './itensdetails.component.html',
  styleUrls: ['./itensdetails.component.scss']
})
export class ItensdetailsComponent {

  sabores: Sabor[] = [];

  @Input() item: Item = new Item();

  saborservice = inject(SaboresService);
  @Output() retorno = new EventEmitter<Item>();

  constructor() {
    this.getSabores();
  }

  getSabores() {

    this.saborservice.listAll().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.sabores = lista;

      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }

  salvar() {
    this.retorno.emit(this.item);
  }


}
