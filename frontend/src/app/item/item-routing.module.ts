import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroItemComponent } from './cadastro-item/cadastro-item.component';
import { EditarItemComponent } from './editar-item/editar-item.component';
import { ListarItemComponent } from './listar-item/listar-item.component';

const routes: Routes = [
  {
    path: 'new',
    component: CadastroItemComponent
  },
  {
    path: ':id',
    component: EditarItemComponent
  },
  {
    path: '',
    component: ListarItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
