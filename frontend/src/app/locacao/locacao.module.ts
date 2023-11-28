import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocacaoRoutingModule } from './locacao-routing.module';
import { CadastroLocacaoComponent } from './cadastro-locacao/cadastro-locacao.component';
import { ListarLocacaoComponent } from './listar-locacao/listar-locacao.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CadastroLocacaoComponent,
    ListarLocacaoComponent
  ],
  imports: [
    CommonModule,
    LocacaoRoutingModule,
    SharedModule
  ]
})
export class LocacaoModule { }
