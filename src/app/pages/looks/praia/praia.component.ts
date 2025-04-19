import { Component } from '@angular/core';
import { CrudClothesService } from '../../../core/services/crud-clothes/crud-clothes.service';
import { Subscription } from 'rxjs';
import { Clothe } from '../../../shared/interfaces/clothe';
import { SidebarService } from '../../../core/services/sidebar/sidebar.service';

@Component({
  selector: 'app-praia',
  standalone: false,
  templateUrl: './praia.component.html',
  styleUrl: './praia.component.scss',
})
export class PraiaComponent {
  public clothesData: Clothe[] = [];
  private _subscribeUpdateDataClothes: Subscription = <Subscription>{};
  private indexMenuCurrent: number = 0;

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
      this.crudClothesService.updateData.beach.subscribe(() => {
        this.clothesData = this.crudClothesService.getClothes({
          section: this.indexMenuCurrent,
        });
      });
  }

  ngOnDestroy() {
    if (!!this._subscribeUpdateDataClothes) {
      this._subscribeUpdateDataClothes.unsubscribe();
    }
  }
}
