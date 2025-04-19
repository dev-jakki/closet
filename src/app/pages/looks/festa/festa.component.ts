import { Component } from '@angular/core';
import { CrudClothesService } from '../../../core/services/crud-clothes/crud-clothes.service';
import { Subscription } from 'rxjs';
import { Clothe } from '../../../shared/interfaces/clothe';
import { SidebarService } from '../../../core/services/sidebar/sidebar.service';

@Component({
  selector: 'app-festa',
  standalone: false,
  templateUrl: './festa.component.html',
  styleUrl: './festa.component.scss',
})
export class FestaComponent {
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
      this.crudClothesService.updateData.party.subscribe(() => {
        this.clothesData = this.crudClothesService.getClothes({
          section: this.indexMenuCurrent,
        });
      });
  }

  ngOnDestroy() {
    this._subscribeUpdateDataClothes?.unsubscribe();
  }
}
