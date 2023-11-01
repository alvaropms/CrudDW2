import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ClasseService } from 'src/app/classe/classe.service';
import { DiretorService } from 'src/app/diretor/diretor.service';
import { FormModel } from 'src/app/shared/form/models/form';
import { TituloService } from '../titulo.service';
import Diretor from 'src/app/diretor/models/diretor.model';
import Classe from 'src/app/classe/models/classe.model';
import Ator from 'src/app/ator/models/ator.model';
import { AtorService } from 'src/app/ator/ator.service';

@Component({
  selector: 'app-cadastro-titulo',
  templateUrl: './cadastro-titulo.component.html',
  styleUrls: ['./cadastro-titulo.component.css']
})
export class CadastroTituloComponent {
  diretores: Diretor[] = [];
  classes: Classe[] = [];
  atores: Ator[] = [];

  group: FormGroup = new FormGroup({
    nome: new FormControl(''),
    ano: new FormControl(''),
    sinopse: new FormControl(''),
    categoria: new FormControl(''),
    ator_id: new FormControl(''),
    classe_id: new FormControl(''),
    diretor_id: new FormControl('')
  });

  form: FormModel = {
    submit: () => {
      this.tituloService.criar(this.group.value).subscribe(
        data => {
          this.router.navigate(['/titulo']);
        },
        error => {
          alert('Erro ao cadastrar titulo');
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
        type: 'select',
        name: 'ator_id',
        label: 'Ator',
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

  constructor(private tituloService: TituloService, private router: Router, private diretorService: DiretorService, private classeService: ClasseService, private atoresService: AtorService) {
    this.diretorService.listar().subscribe(
      data => {
        this.diretores.push(...data);
      },
      error => {
        alert('Erro ao carregar a lista de diretores')
      }
    );

    this.classeService.listar().subscribe(
      data => {
        this.classes.push(...data);
      },
      error => {
        alert('Erro ao carregar a lista de classes')
      }
    );

    this.atoresService.listar().subscribe(
      data => {
        this.atores.push(...data);
      },
      error => {
        alert('Erro ao carregar a lista de atores')
      }
    );
  }

}
