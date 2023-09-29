import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DiretorService } from '../diretor.service';

@Component({
  selector: 'app-listar-diretor',
  templateUrl: './listar-diretor.component.html',
  styleUrls: ['./listar-diretor.component.css']
})
export class ListarDiretorComponent {

  diretores: any[] = [];

  constructor(private diretorService: DiretorService, private router: Router) { }

  ngOnInit(): void {
    this.listarDiretores();
  }

  listarDiretores() {
    this.diretorService.listar().subscribe((diretores) => {
        this.diretores = diretores;
      }
    );
  }

  excluir(id: number) {
    if (confirm('Deseja realmente excluir este diretor?')) {
      this.diretorService.excluir(id).subscribe(
        data => {
          this.listarDiretores();
        }
      );
    }
  }
}
