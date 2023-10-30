import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import Item from '../models/item.model';

@Component({
  selector: 'app-listar-item',
  templateUrl: './listar-item.component.html',
  styleUrls: ['./listar-item.component.css']
})
export class ListarItemComponent implements OnInit {

  items: Item[] = [];

  constructor( private itemService: ItemService) { }

  ngOnInit(): void {
    this.listarItems();
  }

  listarItems() {
    this.itemService.listar().subscribe((items: Item[]) => {
        this.items = items;
      }
    );
  }
  
  excluir(id: number) {
    if (confirm('Deseja realmente excluir este item?')) {
      this.itemService.excluir(id).subscribe(
        data => {
          this.listarItems();
        }
      );
    }
  }
}
