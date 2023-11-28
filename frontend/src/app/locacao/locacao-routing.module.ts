import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarLocacaoComponent } from './listar-locacao/listar-locacao.component';
import { CadastroLocacaoComponent } from './cadastro-locacao/cadastro-locacao.component';

const routes: Routes = [
  {
    path: '',
    component: ListarLocacaoComponent
  },
  {
    path: 'new',
    component: CadastroLocacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocacaoRoutingModule { }
