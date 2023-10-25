import { Component, OnInit } from '@angular/core';
import Titulo from '../models/titulo.model';
import { TituloService } from '../titulo.service';

@Component({
  selector: 'app-listar-titulo',
  templateUrl: './listar-titulo.component.html',
  styleUrls: ['./listar-titulo.component.css']
})
export class ListarTituloComponent implements OnInit{

  titulos: Titulo[] = [];

  constructor(private tituloService: TituloService) { }

  ngOnInit(): void {
    this.listarTitulos();
  }

  listarTitulos() {
    this.tituloService.listar().subscribe((titulos) => {
        this.titulos = titulos;
      }
    );
  }
  
  excluir(id: number) {
    if (confirm('Deseja realmente excluir este título?')) {
      this.tituloService.excluir(id).subscribe(
        data => {
          this.listarTitulos();
        }
      );
    }
  }
}
