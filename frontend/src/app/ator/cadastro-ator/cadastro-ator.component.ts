import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormModel } from 'src/app/shared/form/models/form';
import { AtorService } from '../ator.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-ator',
  templateUrl: './cadastro-ator.component.html',
  styleUrls: ['./cadastro-ator.component.css']
})
export class CadastroAtorComponent {
  group: FormGroup = new FormGroup({
    nome: new FormControl(''),
  });

  form: FormModel = {
    submit: () => {
      this.atorService.criar(this.group.value).subscribe(
        data => {
          this.router.navigate(['/ator']);
        },
        error => {
          alert('Erro ao criar ator');
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
        action: () => {console.log(this.group.value)},
      },
    ],
  }

  constructor(private atorService: AtorService, private router: Router) { }

}
