import { Endereco } from "./endereco";

export class Usuario {
    id!: number;
    email!: string;
    nome!: string;
    senha!: string;
    cargo!: string;
    enderecos: Endereco[]= [] ;

}