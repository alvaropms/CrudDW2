import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TituloRoutingModule } from './titulo-routing.module';
import { CadastroTituloComponent } from './cadastro-titulo/cadastro-titulo.component';
import { ListarTituloComponent } from './listar-titulo/listar-titulo.component';
import { EditarTituloComponent } from './editar-titulo/editar-titulo.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CadastroTituloComponent,
    ListarTituloComponent,
    EditarTituloComponent
  ],
  imports: [
    CommonModule,
    TituloRoutingModule,
    SharedModule
  ]
})
export class TituloModule { }
