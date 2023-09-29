import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtorRoutingModule } from './ator-routing.module';
import { CadastroAtorComponent } from './cadastro-ator/cadastro-ator.component';
import { SharedModule } from '../shared/shared.module';
import { ListarAtorComponent } from './listar-ator/listar-ator.component';
import { EditarAtorComponent } from './editar-ator/editar-ator.component';


@NgModule({
  declarations: [
    CadastroAtorComponent,
    ListarAtorComponent,
    EditarAtorComponent
  ],
  imports: [
    CommonModule,
    AtorRoutingModule,
    SharedModule
  ]
})
export class AtorModule { }
