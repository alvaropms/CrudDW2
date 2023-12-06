import { Component } from '@angular/core';
import { LocacaoService } from '../locacao.service';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { ItemService } from 'src/app/item/item.service';

@Component({
  selector: 'app-listar-locacao',
  templateUrl: './listar-locacao.component.html',
  styleUrls: ['./listar-locacao.component.css']
})
export class ListarLocacaoComponent {

  locacoes: any[] = [];

  constructor(private locacaoService: LocacaoService, private router: Router, private clienteService: ClienteService, private itemService: ItemService) { }

  ngOnInit(): void {
    this.listarLocacoes();
  }

  listarLocacoes() {
    this.locacaoService.listar().subscribe((locacoes) => {
        this.locacoes = locacoes;
        for(let locacao of this.locacoes){
          this.clienteService.buscarPorId(locacao.cliente_id).subscribe((cliente) => {
            locacao.cliente = cliente;
          });
          this.itemService.buscarPorId(locacao.item_id).subscribe((item) => {
            locacao.item = item;
          });
        }
      },
      error => {
        alert('Erro ao carregar a lista de locacoes')
      }
    );
  }

  devolver(id: number) {
    this.locacaoService.devolver(id).subscribe(
      data => {
        this.listarLocacoes();
      },
      error => {
        alert('Erro ao devolver item');
      }
    );
  }

  getDate(date: string) {
    if(!date) return '';
    return new Date(date).toLocaleDateString();
  }
}
