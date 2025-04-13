import { CrudClothesService } from './../../../core/services/crud-clothes/crud-clothes.service';
import { Component, Input } from '@angular/core';
import { Clothe } from '../../interfaces/clothe';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() public clotheData: Clothe = <Clothe>{};

  constructor(private crudClothesService: CrudClothesService) {}
  
  public removeClothe() {
    this.crudClothesService.deleteClothe(this.clotheData.id);
  }

  public favoriteClothe() {
    this.crudClothesService.favoriteClothe(this.clotheData.id);
  }
}
