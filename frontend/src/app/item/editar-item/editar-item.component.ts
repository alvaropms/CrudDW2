import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormModel } from 'src/app/shared/form/models/form';
import Titulo from 'src/app/titulo/models/titulo.model';
import { TituloService } from 'src/app/titulo/titulo.service';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-editar-item',
  templateUrl: './editar-item.component.html',
  styleUrls: ['./editar-item.component.css']
})
export class EditarItemComponent implements OnInit {
  titulos: Titulo[] = [];

  group: FormGroup = new FormGroup({
    num_serie: new FormControl(''),
    dt_aquisicao: new FormControl(''),
    tipo_item: new FormControl(''),
    titulo_id: new FormControl(''),
  });

  form: FormModel = {
    submit: () => {
      this.itemService.atualizar(this.id, this.group.value).subscribe(
        data => {
          this.router.navigate(['/item']);
        }
      );
    },
    group: this.group,
    fields: [
      {
        type: 'text',
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

  id: number = 0;

  constructor(private itemService: ItemService, private router: Router, private tituloService: TituloService, private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.tituloService.listar().subscribe(
      data => {
        this.titulos.push(...data);

        this.itemService.buscarPorId(this.id).subscribe(
          (data: any) => {
            this.group.patchValue(data);
            this.group.controls['dt_aquisicao'].setValue(new Date(data.dt_aquisicao));
          }
        );
        
      }
    );
  }
}
