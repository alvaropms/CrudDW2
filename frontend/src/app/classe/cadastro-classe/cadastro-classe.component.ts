import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FormModel } from 'src/app/shared/form/models/form';
import { ClasseService } from '../classe.service';

@Component({
  selector: 'app-cadastro-classe',
  templateUrl: './cadastro-classe.component.html',
  styleUrls: ['./cadastro-classe.component.css']
})
export class CadastroClasseComponent {

  group: FormGroup = new FormGroup({
    nome: new FormControl(),
    valor: new FormControl(),
    dias_atraso: new FormControl(),
  });

  form: FormModel = {
    submit: () => {
      this.classeService.criar(this.group.value).subscribe(
        data => {
          this.router.navigate(['/classe']);
        },
        error => {
          alert('Erro ao criar classe');
        }
      );
    },
    group: this.group,
    fields: [
      {
        type: 'text',
        name: 'nome',
      },
      {
        type: 'integer',
        name: 'valor',
      },
      {
        type: 'text',
        name: 'dias_atraso',
        label: 'Dias de atraso'
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

  constructor(private classeService: ClasseService, private router: Router) { }

}
