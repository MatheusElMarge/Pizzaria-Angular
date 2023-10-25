import { Pedido } from "./pedido";

export class Item {

  id!: number;
  nome!: string;
  pedido!: Pedido;
  itens: Item[] = [];

}
