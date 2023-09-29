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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
