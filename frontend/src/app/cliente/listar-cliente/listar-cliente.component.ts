import { Component } from '@angular/core';
import Cliente from '../models/cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent {

  clientes: Cliente[] = [];

  constructor( private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes() {
    this.clienteService.listar().subscribe((clientes: Cliente[]) => {
        this.clientes = clientes;
      },
      error => {
        alert('Erro ao carregar a lista de clientes')
      }
    );
  }
  
  excluir(id: number) {
    if (confirm('Deseja realmente excluir este item?')) {
      this.clienteService.excluir(id).subscribe(
        data => {
          this.listarClientes();
        },
        error => {
          alert('Erro ao excluir item');
        }
      );
    }
  }
}
