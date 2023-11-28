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
    this.listarDiretores();
  }

  listarDiretores() {
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

  excluir(id: number) {
    if (confirm('Deseja realmente excluir esta locacao?')) {
      this.locacaoService.excluir(id).subscribe(
        data => {
          this.listarDiretores();
        },
        error => {
          alert('Erro ao excluir locacao');
        }
      );
    }
  }
}
