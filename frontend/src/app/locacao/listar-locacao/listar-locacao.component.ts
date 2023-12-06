import { Component } from '@angular/core';
import { LocacaoService } from '../locacao.service';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { ItemService } from 'src/app/item/item.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-listar-locacao',
  templateUrl: './listar-locacao.component.html',
  styleUrls: ['./listar-locacao.component.css']
})
export class ListarLocacaoComponent {

  locacoes: any[] = [];

  titulo: FormControl = new FormControl();
  ator: FormControl = new FormControl();
  categoria: FormControl = new FormControl();

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

  filtrar() {
    const filter = {
      titulo: this.titulo.value,
      ator: this.ator.value,
      categoria: this.categoria.value
    };
    this.locacaoService.filtrar(filter).subscribe((locacoes) => {
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
}
