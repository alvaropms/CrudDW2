import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';
import { FormModel } from 'src/app/shared/form/models/form';
import { FormControl, FormGroup } from '@angular/forms';
import Cliente from '../models/cliente.model';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent {
  clientes: Cliente[] = [];

  group: FormGroup = new FormGroup({});

  form: FormModel = {
    submit: () => {
      this.clienteService.criar(this.group.value).subscribe(
        data => {
          this.router.navigate(['/cliente']);
        },
        error => {
          alert('Erro ao criar cliente');
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
        name: 'num_inscricao',
        label: 'Número de Inscrição'
      },
      {
        type: 'date',
        name: 'dt_nascimento',
        label: 'Data de Nascimento'
      },
      {
        type: 'text',
        name: 'sexo',
      },
      {
        type: 'text',
        name: 'cpf',
      },
      {
        type: 'textarea',
        name: 'endereco',
      },
      {
        type: 'integer',
        name: 'telefone',
      },
      {
        type: 'checkbox',
        name: 'socio',
        label: 'É Sócio?'
      },
      {
        type: 'select',
        name: 'socio_id',
        label: 'Dependente de',
        disabled: () => {
          return this.group.value.socio;
        },
        options_value: 'id',
        options_label: 'nome',
        options: this.clientes, 
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

  constructor(private clienteService: ClienteService, private router: Router) {
    this.clienteService.listarAtivos().subscribe(
      data => {
        this.clientes.push(...data);
      },
      error => {
        alert('Erro ao listar clientes');
      }
    );
  }

}
