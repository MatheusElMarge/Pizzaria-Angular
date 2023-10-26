import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Endereco } from 'src/app/models/endereco';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-enderecosdetails',
  templateUrl: './enderecosdetails.component.html',
  styleUrls: ['./enderecosdetails.component.scss']
})
export class EnderecosdetailsComponent {


  @Input() endereco: Endereco = new Endereco();
  @Output() retorno = new EventEmitter<Endereco>();


  constructor() {
  }

  salvar() {
    this.retorno.emit(this.endereco);
  }


}
