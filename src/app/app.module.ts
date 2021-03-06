import { CidadesModule } from './cidades/cidades.module';
import { ProdutosModule } from './produtos/produtos.module';
import { ProdutosCadastroComponent } from './produtos/produtos-cadastro/produtos-cadastro.component';
import { CidadesCadastroComponent } from './cidades/cidades-cadastro/cidades-cadastro.component';
import { EstadosPesquisaComponent } from './estados/estados-pesquisa/estados-pesquisa.component';
import { EstadosCadastroComponent } from './estados/estados-cadastro/estados-cadastro.component';
import { CategoriasCadastroComponent } from './categorias/categorias-cadastro/categorias-cadastro.component';
import { CategoriasPesquisaComponent } from './categorias/categorias-pesquisa/categorias-pesquisa.component';
import { CategoriasModule } from './categorias/categorias.module';
import { EstadosModule } from './estados/estados.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConfirmationService, MenuItem } from 'primeng/api';

import {Routes, RouterModule} from '@angular/router';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {SidebarModule} from 'primeng/sidebar';



const rotas: Routes = [
  {path: 'categorias', component: CategoriasPesquisaComponent},
  {path: 'categorias/novo', component: CategoriasCadastroComponent},
  {path: 'categorias/:id', component: CategoriasCadastroComponent},
  {path: 'estados', component: EstadosPesquisaComponent},
  {path: 'estados/novo', component: EstadosCadastroComponent},
  {path: 'estados/:id', component: EstadosCadastroComponent},
  {path: 'cidades', component: CidadesCadastroComponent},
  {path: 'produtos/novo', component: ProdutosCadastroComponent},
  //{path: '' , redirectTo:'categorias' ,pathMatch:'full'},
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CategoriasModule,
    EstadosModule,
    HttpClientModule,
    RouterModule.forRoot(rotas),
    InputTextModule,
    ButtonModule,
    TooltipModule,
    TableModule,
    FormsModule,
    ConfirmDialogModule,
    RouterModule,
    SidebarModule,
    ProdutosModule,
    CidadesModule,


  ],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
