import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ator',
    loadChildren: () => import('./ator/ator.module').then(m => m.AtorModule)
  },
  {
    path: 'diretor',
    loadChildren: () => import('./diretor/diretor.module').then(m => m.DiretorModule)
  },
  {
    path: 'classe',
    loadChildren: () => import('./classe/classe.module').then(m => m.ClasseModule)
  },
  {
    path: 'titulo',
    loadChildren: () => import('./titulo/titulo.module').then(m => m.TituloModule)
  },
  {
    path: 'item',
    loadChildren: () => import('./item/item.module').then(m => m.ItemModule)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule)
  },
  {
    path: 'locacao',
    loadChildren: () => import('./locacao/locacao.module').then(m => m.LocacaoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
