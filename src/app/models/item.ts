import { Pedido } from "./pedido";
import { Sabor } from "./sabor";

export class Item {

  id!: number;
  nome!: string;
  tamanho!: string;
  pedido!: Pedido;
  possuiSabores!: Boolean;
  sabores: Sabor[] = [];
  valor!: Number;

}
