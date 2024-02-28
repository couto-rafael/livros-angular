import { Injectable } from '@angular/core';
import { Editora } from './editora'; //Importar Editora

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  private editoras: Array<Editora>; //Definir o atributo editoras, como Array<Editora>

  constructor() {
    //ao menos trêselementos no formato JSON
    this.editoras = [
      { codEditora: 1, nome: 'Alta Books' },
      { codEditora: 2, nome: 'Person' },
      { codEditora: 3, nome: 'Addison Wesley' },
    ];
  }

  //Implementar o método getEditoras, com o retorno do vetor editoras
  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editoraEncontrada = this.editoras.find(
      (editora) => editora.codEditora === codEditora
    );
    return editoraEncontrada ? editoraEncontrada.nome : undefined;
  }
}
