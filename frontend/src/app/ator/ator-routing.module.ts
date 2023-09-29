import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroAtorComponent } from './cadastro-ator/cadastro-ator.component';
import { ListarAtorComponent } from './listar-ator/listar-ator.component';
import { EditarAtorComponent } from './editar-ator/editar-ator.component';

const routes: Routes = [
  {
    path: 'new',
    component: CadastroAtorComponent
  },
  {
    path: '',
    component: ListarAtorComponent
  },
  {
    path: ':id',
    component: EditarAtorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtorRoutingModule { }
