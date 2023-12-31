import { Item } from "./item";
import { Usuario } from "./usuario";

export class Pedido {
    id!: number;
    cliente!: Usuario;
    funcionario!: Usuario;
    observacao!: string;
    item: Item[] = [];
    entrega!: boolean;
    estado!: string;
}
