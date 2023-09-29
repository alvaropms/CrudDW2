import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormModel } from 'src/app/shared/form/models/form';
import { AtorService } from '../ator.service';

@Component({
  selector: 'app-editar-ator',
  templateUrl: './editar-ator.component.html',
  styleUrls: ['./editar-ator.component.css']
})
export class EditarAtorComponent implements OnInit {
  group: FormGroup = new FormGroup({
    nome: new FormControl(''),
  });

  form: FormModel = {
    submit: () => {
      this.atorService.atualizar(this.id,this.group.value).subscribe(
        data => {
          this.router.navigate(['/ator']);
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

  constructor(private atorService: AtorService, private router: Router, private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.atorService.buscarPorId(this.id).subscribe(
      data => {
        this.group.patchValue(data);
      }
    );
  }
}
