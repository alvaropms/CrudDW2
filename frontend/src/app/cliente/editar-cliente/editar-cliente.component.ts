import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormModel } from 'src/app/shared/form/models/form';
import { ClienteService } from '../cliente.service';
import Cliente from '../models/cliente.model';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent {
  group: FormGroup = new FormGroup({
    nome: new FormControl(''),
  });

  clientes: Cliente[] = [];

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
        options: this.clientes
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

  constructor(private clienteService: ClienteService, private router: Router, private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.clienteService.listar().subscribe({
      next: data => {
        this.clientes.push(...data);

        this.clienteService.buscarPorId(this.id).subscribe({
          next: data => {
            this.group.patchValue(data);
            this.group.controls['dt_nascimento'].setValue(new Date(data.dt_nascimento));
          },
          error: error => {
            alert('Erro ao carregar cliente');
          }
        });

        
      },
      error: error => {
        alert('Erro ao carregar clientes');
      }
    });
  }
}
