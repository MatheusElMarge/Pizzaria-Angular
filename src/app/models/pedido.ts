import { Item } from "./item";
import { Usuario } from "./usuario";

export class Pedido {
    id!: number;
    cliente!: Usuario;
    funcionario!: Usuario;
    obs!: string;
    itens: Item[] = [];
    delivery!: boolean;
    estado!: string;
}
