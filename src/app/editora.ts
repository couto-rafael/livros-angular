import { deflate } from 'node:zlib';

export class Editora {
  codEditora: number;
  nome: string;

  constructor(codEditora: number, nome: string) {
    this.codEditora = codEditora;
    this.nome = nome;
  }
}

export default Editora;