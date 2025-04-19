import { Component } from '@angular/core';
import { Clothe } from '../../../shared/interfaces/clothe';
import { Subscription } from 'rxjs';
import { CrudClothesService } from '../../../core/services/crud-clothes/crud-clothes.service';
import { SidebarService } from '../../../core/services/sidebar/sidebar.service';

@Component({
  selector: 'app-blusas',
  standalone: false,
  templateUrl: './blusas.component.html',
  styleUrl: './blusas.component.scss',
})
export class BlusasComponent {
  public clothesData: Clothe[] = [];
  private _subscribeUpdateDataClothes: Subscription = <Subscription>{};
  public indexMenuCurrent: number = 0;

  constructor(
    public crudClothesService: CrudClothesService,
    private sidebarService: SidebarService
  ) {}

  ngOnInit(): void {
    this.indexMenuCurrent = this.sidebarService.currentMenuIndex;
    this.clothesData = this.crudClothesService.getClothes({
      section: this.indexMenuCurrent,
    });
    this.observeUpdateDataClothes();
  }

  private observeUpdateDataClothes() {
    this._subscribeUpdateDataClothes =
      this.crudClothesService.updateData.blouse.subscribe(() => {
        this.clothesData = this.crudClothesService.getClothes({
          section: this.indexMenuCurrent,
        });
      });
  }

  ngOnDestroy() {
    this._subscribeUpdateDataClothes?.unsubscribe();
  }
}
