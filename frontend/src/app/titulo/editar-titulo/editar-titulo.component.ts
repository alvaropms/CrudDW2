import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClasseService } from 'src/app/classe/classe.service';
import Classe from 'src/app/classe/models/classe.model';
import { DiretorService } from 'src/app/diretor/diretor.service';
import Diretor from 'src/app/diretor/models/diretor.model';
import { FormModel } from 'src/app/shared/form/models/form';
import { TituloService } from '../titulo.service';
import { AtorService } from 'src/app/ator/ator.service';
import Ator from 'src/app/ator/models/ator.model';

@Component({
  selector: 'app-editar-titulo',
  templateUrl: './editar-titulo.component.html',
  styleUrls: ['./editar-titulo.component.css']
})
export class EditarTituloComponent implements OnInit{
  diretores: Diretor[] = [];
  classes: Classe[] = [];
  atores: Ator[] = [];

  group: FormGroup = new FormGroup({
    nome: new FormControl(''),
    ano: new FormControl(''),
    sinopse: new FormControl(''),
    categoria: new FormControl(''),
    atores_id: new FormControl(''),
    classe_id: new FormControl(''),
    diretor_id: new FormControl('')
  });

  form: FormModel = {
    submit: () => {
      this.tituloService.atualizar(this.id, this.group.value).subscribe(
        data => {
          this.router.navigate(['/titulo']);
        },
        error => {
          alert('Erro ao atualizar titulo');
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
        name: 'ano',
      },
      {
        type: 'text',
        name: 'sinopse',
      },
      {
        type: 'text',
        name: 'categoria',
      },
      {
        type: 'select',
        name: 'classe_id',
        label: 'Classe',
        options_label: 'nome',
        options_value: 'id',
        options: this.classes,
      },
      {
        type: 'select',
        name: 'diretor_id',
        label: 'Diretor',
        options_value: 'id',
        options_label: 'nome',
        options: this.diretores,
      },
      {
        type: 'multiselect',
        name: 'atores_id',
        label: 'Atores',
        options_value: 'id',
        options_label: 'nome',
        options: this.atores,
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

  id: number = 0;

  constructor(private tituloService: TituloService, private router: Router, private diretorService: DiretorService, private classeService: ClasseService, private atoresService: AtorService, private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.diretorService.listar().subscribe(
      data => {
        this.diretores.push(...data);

        this.classeService.listar().subscribe(
          data => {
            this.classes.push(...data);

            this.atoresService.listar().subscribe(
              data => {
                this.atores.push(...data);

                this.tituloService.buscarPorId(this.id).subscribe(
                  data => {
                    this.group.patchValue(data);
                  },
                  error => {
                    alert('Erro ao carregar titulo');
                  }
                );
              },
              error => {
                alert('Erro ao carregar a lista de atores')
              }
            )



          },
          error => {
            alert('Erro ao carregar a lista de classes')
          }
        );
      },
      error => {
        alert('Erro ao carregar a lista de diretores')
      }
    );
  }

}
