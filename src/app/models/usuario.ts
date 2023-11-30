import { Endereco } from "./endereco";

export class Usuario {
    id!: number;
    email!: string;
    nome!: string;
    senha!: string;
    role!: string;
    enderecos: Endereco[]= [] ;
    token!: string;

}
