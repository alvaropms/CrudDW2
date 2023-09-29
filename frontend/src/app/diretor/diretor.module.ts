import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiretorRoutingModule } from './diretor-routing.module';
import { CadastroDiretorComponent } from './cadastro-diretor/cadastro-diretor.component';
import { SharedModule } from '../shared/shared.module';
import { ListarDiretorComponent } from './listar-diretor/listar-diretor.component';
import { EditarDiretorComponent } from './editar-diretor/editar-diretor.component';


@NgModule({
  declarations: [
    CadastroDiretorComponent,
    ListarDiretorComponent,
    EditarDiretorComponent
  ],
  imports: [
    CommonModule,
    DiretorRoutingModule,
    SharedModule
  ]
})
export class DiretorModule { }
