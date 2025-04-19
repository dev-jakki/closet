import { SidebarService } from './../../../core/services/sidebar/sidebar.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Clothe } from '../../../shared/interfaces/clothe';
import { CrudClothesService } from '../../../core/services/crud-clothes/crud-clothes.service';

@Component({
  selector: 'app-vestidos',
  standalone: false,
  templateUrl: './vestidos.component.html',
  styleUrl: './vestidos.component.scss'
})
export class VestidosComponent implements OnInit, OnDestroy {
  public clothesData: Clothe[] = [];
  private _subscribeUpdateDataClothes: Subscription = <Subscription>{};
  public indexMenuCurrent: number = 0;

  constructor(
    public crudClothesService: CrudClothesService,
    private sidebarService: SidebarService
  ) {}

  ngOnInit(): void {
    this.indexMenuCurrent = this.sidebarService.currentMenuIndex;
    this.clothesData = this.crudClothesService.getClothes({ section: this.indexMenuCurrent });
    this.observeUpdateDataClothes();
  }

  private observeUpdateDataClothes() {
    this._subscribeUpdateDataClothes = this.crudClothesService.updateData.dress.subscribe(() => {
      this.clothesData = this.crudClothesService.getClothes({ section: this.indexMenuCurrent });
    });
  }

  ngOnDestroy() {
    this._subscribeUpdateDataClothes?.unsubscribe();
  }
}
