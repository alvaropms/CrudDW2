import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClasseComponent } from './cadastro-classe/cadastro-classe.component';
import { ListarClasseComponent } from './listar-classe/listar-classe.component';
import { EditarClasseComponent } from './editar-classe/editar-classe.component';

const routes: Routes = [
  {
    path: 'new',
    component: CadastroClasseComponent
  },
  {
    path: '',
    component: ListarClasseComponent
  },
  {
    path: ':id',
    component: EditarClasseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasseRoutingModule { }
