import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroDiretorComponent } from './cadastro-diretor/cadastro-diretor.component';
import { ListarDiretorComponent } from './listar-diretor/listar-diretor.component';
import { EditarDiretorComponent } from './editar-diretor/editar-diretor.component';

const routes: Routes = [
  {
    path: 'new',
    component: CadastroDiretorComponent
  },
  {
    path: '',
    component: ListarDiretorComponent
  },
  {
    path: ':id',
    component: EditarDiretorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiretorRoutingModule { }
