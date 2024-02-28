import { Injectable } from '@angular/core';
import { Editora } from './editora'; //Importar Editora
import Livro from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivroService {
  private livros: Array<Livro>;

  constructor() {
    this.livros = [
      {
        codigo: 1,
        codEditora: 1,
        titulo: 'Use a Cabeça: Java',
        resumo:
          'Use a cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java',
        autores: ['Bert Bates', 'Kathy Sierra'],
      },
      {
        codigo: 2,
        codEditora: 2,
        titulo: 'Java, como Programar',
        resumo:
          'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel',
        autores: ['Paul Deitel', 'Harvey Deitel'],
      },
      {
        codigo: 3,
        codEditora: 3,
        titulo: 'Core Java for the Impatient',
        resumo: "eaders familiar with Horstmann's original, two-volume",
        autores: ['Cay Horstmann'],
      },
    ];
  }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = this.obterNovoCodigo();
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex((livro) => livro.codigo === codigo);
    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  }

  private obterNovoCodigo(): number {
    return Math.max(...this.livros.map((livro) => livro.codigo), 0) + 1;
  }
}
