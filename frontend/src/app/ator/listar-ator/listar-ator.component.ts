import { Component, OnInit } from '@angular/core';
import { AtorService } from '../ator.service';
import { Router } from '@angular/router';
import Ator from '../models/ator.model';

@Component({
  selector: 'app-listar-ator',
  templateUrl: './listar-ator.component.html',
  styleUrls: ['./listar-ator.component.css']
})
export class ListarAtorComponent implements OnInit {

  atores: Ator[] = [];

  constructor(private atorService: AtorService, private router: Router) { }

  ngOnInit(): void {
    this.listarAtores();
  }

  listarAtores() {
    this.atorService.listar().subscribe((atores) => {
        this.atores = atores;
      }
    );
  }

  excluir(id: number) {
    if (confirm('Deseja realmente excluir este ator?')) {
      this.atorService.excluir(id).subscribe(
        data => {
          this.listarAtores();
        }
      );
    }
  }

}
