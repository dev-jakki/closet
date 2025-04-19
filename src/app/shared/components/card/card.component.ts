import { SidebarService } from './../../../core/services/sidebar/sidebar.service';
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

  constructor(
    private crudClothesService: CrudClothesService,
    private sidebarService: SidebarService,
  ) {}
  
  public removeClothe() {
    this.crudClothesService.deleteClothe(this.clotheData.id);
    this.crudClothesService.searchPageToUpdate(this.sidebarService.currentMenuIndex);
  }

  public favoriteClothe() {
    this.crudClothesService.addRemoveFavoriteClothe(this.clotheData.id);
    this.crudClothesService.searchPageToUpdate(this.sidebarService.currentMenuIndex);
  }
}
