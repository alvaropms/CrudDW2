import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormModel } from 'src/app/shared/form/models/form';
import { DiretorService } from '../diretor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-diretor',
  templateUrl: './cadastro-diretor.component.html',
  styleUrls: ['./cadastro-diretor.component.css']
})
export class CadastroDiretorComponent {
  group: FormGroup = new FormGroup({
    nome: new FormControl(''),
  });

  form: FormModel = {
    submit: () => {
      this.diretorService.criar(this.group.value).subscribe(
        data => {
          this.router.navigate(['/diretor']);
        },
        error => {
          alert('Erro ao criar diretor');
        }
      );
    },
    group: this.group,
    fields: [
      {
        type: 'text',
        name: 'nome',
      },
    ],
    actions: [
      {
        type: 'submit',
        label: 'Salvar',
        action: () => {},
      },
    ],
  }

  constructor(private diretorService: DiretorService, private router: Router) { }

}
