import { Component } from '@angular/core';
import { CrudClothesService } from '../../../core/services/crud-clothes/crud-clothes.service';
import { Subscription } from 'rxjs';
import { Clothe } from '../../../shared/interfaces/clothe';
import { SidebarService } from '../../../core/services/sidebar/sidebar.service';

@Component({
  selector: 'app-formal',
  standalone: false,
  templateUrl: './formal.component.html',
  styleUrl: './formal.component.scss',
})
export class FormalComponent {
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
      this.crudClothesService.updateData.formal.subscribe(() => {
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
