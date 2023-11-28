import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  items: MenuItem[] | undefined;
  
  
  
  ngOnInit(): void {
    this.items = [
      {
        label: 'Início',
        items: [],
        routerLink: '/'
      },
      {
          label: 'Ator',
          items: [],
          routerLink: 'ator'
      },
      {
        label: 'Diretor',
        items: [],
        routerLink: 'diretor'
      },
      {
        label: 'Classe',
        items: [],
        routerLink: 'classe'
      },
      {
        label: 'Título',
        items: [],
        routerLink: 'titulo'
      },
      {
        label: 'Item',
        items: [],
        routerLink: 'item'
      },
      {
        label: 'Cliente',
        items: [],
        routerLink: 'cliente'
      },
      {
        label: 'Locação',
        items: [],
        routerLink: 'locacao'
      },
    ];
  }
}
