import { Pedido } from "./pedido";
import { Sabor } from "./sabor";

export class Item {

  id!: number;
  nome!: string;
  size!: string;
  pedido!: Pedido;
  sabores: Sabor[] = [];

}
