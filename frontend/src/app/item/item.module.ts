import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { EditarItemComponent } from './editar-item/editar-item.component';
import { CadastroItemComponent } from './cadastro-item/cadastro-item.component';
import { ListarItemComponent } from './listar-item/listar-item.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    EditarItemComponent,
    CadastroItemComponent,
    ListarItemComponent
  ],
  imports: [
    CommonModule,
    ItemRoutingModule,
    SharedModule
  ]
})
export class ItemModule { }
