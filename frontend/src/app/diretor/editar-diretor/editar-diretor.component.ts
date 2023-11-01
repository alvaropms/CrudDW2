import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormModel } from 'src/app/shared/form/models/form';
import { DiretorService } from '../diretor.service';

@Component({
  selector: 'app-editar-diretor',
  templateUrl: './editar-diretor.component.html',
  styleUrls: ['./editar-diretor.component.css']
})
export class EditarDiretorComponent implements OnInit{
  
  group: FormGroup = new FormGroup({
    nome: new FormControl(''),
  });

  form: FormModel = {
    submit: () => {
      this.diretorService.atualizar(this.id, this.group.value).subscribe(
        () => {
          this.router.navigate(['/diretor']);
        },
        () => {
          alert('Erro ao atualizar diretor');
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

  id: number = 0;

  constructor(private diretorService: DiretorService, private router: Router, private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    this.diretorService.buscarPorId(this.id).subscribe(
      data => {
        this.group.patchValue(data);
      },
      error => {
        alert('Erro ao carregar diretor');
      }
    );
  }


}
