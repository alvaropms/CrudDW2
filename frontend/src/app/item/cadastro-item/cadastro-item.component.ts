import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormModel } from 'src/app/shared/form/models/form';
import Titulo from 'src/app/titulo/models/titulo.model';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';
import { TituloService } from 'src/app/titulo/titulo.service';

@Component({
  selector: 'app-cadastro-item',
  templateUrl: './cadastro-item.component.html',
  styleUrls: ['./cadastro-item.component.css']
})
export class CadastroItemComponent {
  titulos: Titulo[] = [];

  group: FormGroup = new FormGroup({
    num_serie: new FormControl(''),
    dt_aquisicao: new FormControl(''),
    tipo_item: new FormControl(''),
    titulo_id: new FormControl(''),
  });

  form: FormModel = {
    submit: () => {
      this.itemService.criar(this.group.value).subscribe(
        data => {
          this.router.navigate(['/item']);
        },
        error => {
          alert('Erro ao criar item');
        }
      );
    },
    group: this.group,
    fields: [
      {
        type: 'integer',
        name: 'num_serie',
        label: 'Número de Série',
      },
      {
        type: 'date',
        name: 'dt_aquisicao',
        label: 'Data de Aquisição',
      },
      {
        type: 'text',
        name: 'tipo_item',
        label: 'Tipo de Item',
      },
      {
        type: 'select',
        name: 'titulo_id',
        label: 'Título',
        options_value: 'id',
        options_label: 'nome',
        options: this.titulos,
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

  constructor(private itemService: ItemService, private router: Router, private tituloService: TituloService) {
    this.tituloService.listar().subscribe(
      data => {
        this.titulos.push(...data);
      },
      error => {
        alert('Erro ao carregar a lista de títulos');
      }
    );
  }
}
