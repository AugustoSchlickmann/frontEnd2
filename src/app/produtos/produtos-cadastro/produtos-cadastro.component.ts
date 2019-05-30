import { CategoriasService } from './../../categorias/categorias.service';
import { Produto, Categoria } from './../model';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { MessageService } from 'primeng/api';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-produtos-cadastro',
  templateUrl: './produtos-cadastro.component.html',
  styleUrls: ['./produtos-cadastro.component.css']
})
export class ProdutosCadastroComponent implements OnInit {

  produto = new Produto();

  //vetor de todas as categorias, as categorias que forem selecionadas irao para dentro do produto que esta
  //sendo cadastrado
  categorias: Categoria[];

  constructor(
    private service: ProdutosService,
    private categoriaService: CategoriasService,
    private messageService: MessageService,
    private rota: ActivatedRoute,
    private rotaprogramatica:Router
  ) { }

  ngOnInit() {
    this.pesquisarCategorias();
  }

  pesquisarCategorias(){
    this.categoriaService.pesquisar("")
    .then((dados)=>{
      this.categorias=dados;
    });
  }

  salvar(form: FormControl) {
    this.service.adicionar(this.produto)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Produto '+this.produto.nome+' cadastrado'});
      form.reset();
    });
  }

}
