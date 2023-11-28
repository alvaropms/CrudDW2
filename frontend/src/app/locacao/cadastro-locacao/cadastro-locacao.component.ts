import { Component } from '@angular/core';
import { FormModel } from 'src/app/shared/form/models/form';
import { LocacaoService } from '../locacao.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/item/item.service';
import { ClienteService } from 'src/app/cliente/cliente.service';
import Cliente from 'src/app/cliente/models/cliente.model';
import Item from 'src/app/item/models/item.model';

@Component({
  selector: 'app-cadastro-locacao',
  templateUrl: './cadastro-locacao.component.html',
  styleUrls: ['./cadastro-locacao.component.css']
})
export class CadastroLocacaoComponent {

  clientes: Cliente[] = [];
  itens: Item[] = [];

  group: FormGroup = new FormGroup({
    cliente_id: new FormControl(''),
    item_id: new FormControl(''),
    dt_locacao: new FormControl(''),
    dt_devolucao_prevista: new FormControl(''),
    dt_devolucao_efetiva: new FormControl(''),
    valorCobrado: new FormControl(''),
    multaCobrada: new FormControl(''),
  });
  
  form: FormModel = {
    submit: () => {
      this.locacaoService.criar(this.group.value).subscribe(
        data => {
          this.router.navigate(['/locacao']);
        },
        error => {
          alert('Erro ao criar locacao');
        }
      );
    },
    group: this.group,
    fields: [
      {
        name: 'cliente_id',
        type: 'select',
        label: 'Cliente',
        options_value: 'id',
        options_label: 'nome',
        options: this.clientes,
      },
      {
        name: 'item_id',
        type: 'select',
        label: 'Item',
        options_value: 'id',
        options_label: 'num_serie',
        options: this.itens, 
      },
      {
        name: 'dt_locacao',
        type: 'date',
        label: 'Data de Locação',
      },
      {
        name: 'dt_devolucao_prevista',
        type: 'date',
        label: 'Data de Devolução Prevista',
      },
      {
        name: 'dt_devolucao_efetiva',
        type: 'date',
        label: 'Data de Devolução Efetiva',
      },
      {
        name: 'valorCobrado',
        type: 'number',
        label: 'Valor Cobrado',
      },
      {
        name: 'multaCobrada',
        type: 'number',
        label: 'Multa Cobrada',
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

  constructor(private locacaoService: LocacaoService, private router: Router, private itemService: ItemService, private clienteService: ClienteService) {
    this.itemService.listar().subscribe({
      next: data => {
        this.itens.push(...data);
      },
      error:  error => {
        alert('Erro ao listar itens');
      }
    });

    this.clienteService.listar().subscribe({
      next: data => {
        this.clientes.push(...data);
      },
      error:  error => {
        alert('Erro ao listar clientes');
      }
    });
  }
}
