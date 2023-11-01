import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormModel } from 'src/app/shared/form/models/form';
import { ClasseService } from '../classe.service';

@Component({
  selector: 'app-editar-classe',
  templateUrl: './editar-classe.component.html',
  styleUrls: ['./editar-classe.component.css']
})
export class EditarClasseComponent implements OnInit{
  group: FormGroup = new FormGroup({
    nome: new FormControl(),
    valor: new FormControl(),
    dias_atraso: new FormControl(),
  });

  form: FormModel = {
    submit: () => {
      this.classeService.atualizar(this.id, this.group.value).subscribe(
        () => {
          this.router.navigate(['/classe']);
        },
        () => {
          alert('Erro ao atualizar classe');
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

  id: number = 0;

  constructor(private classeService: ClasseService, private router: Router, private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit(): void {
    this.classeService.buscarPorId(this.id).subscribe(
      data => {
        this.group.patchValue(data);
      },
      error => {
        alert('Erro ao carregar classe');
      }
    );
  }
}
