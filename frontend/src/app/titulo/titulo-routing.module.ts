import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroTituloComponent } from './cadastro-titulo/cadastro-titulo.component';
import { EditarTituloComponent } from './editar-titulo/editar-titulo.component';
import { ListarTituloComponent } from './listar-titulo/listar-titulo.component';

const routes: Routes = [
  {
    path: 'new',
    component: CadastroTituloComponent
  },
  {
    path: ':id',
    component: EditarTituloComponent
  },
  {
    path: '',
    component: ListarTituloComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TituloRoutingModule { }
