import { Component } from '@angular/core';
import { ClasseService } from '../classe.service';
import { Router } from '@angular/router';
import Classe from '../models/classe.model';

@Component({
  selector: 'app-listar-classe',
  templateUrl: './listar-classe.component.html',
  styleUrls: ['./listar-classe.component.css']
})
export class ListarClasseComponent {
  classes: Classe[] = [];

  constructor(private classeService: ClasseService, private router: Router) { }

  ngOnInit(): void {
    this.listarClasse();
  }

  listarClasse() {
    this.classeService.listar().subscribe((classes) => {
        this.classes = classes;
      }
    );
  }

  excluir(id: number) {
    if (confirm('Deseja realmente excluir esta classe?')) {
      this.classeService.excluir(id).subscribe(
        data => {
          this.listarClasse();
        }
      );
    }
  }
}
