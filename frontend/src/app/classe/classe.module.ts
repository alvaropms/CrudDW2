import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasseRoutingModule } from './classe-routing.module';
import { CadastroClasseComponent } from './cadastro-classe/cadastro-classe.component';
import { SharedModule } from '../shared/shared.module';
import { ListarClasseComponent } from './listar-classe/listar-classe.component';
import { EditarClasseComponent } from './editar-classe/editar-classe.component';


@NgModule({
  declarations: [
    CadastroClasseComponent,
    ListarClasseComponent,
    EditarClasseComponent
  ],
  imports: [
    CommonModule,
    ClasseRoutingModule,
    SharedModule
  ]
})
export class ClasseModule { }
