import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Clothe } from '../../shared/interfaces/clothe';
import { CrudClothesService } from './../../core/services/crud-clothes/crud-clothes.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit, OnDestroy {
  public clothesData: Clothe[] = [];
  private _subscribeUpdateDataClothes: Subscription = <Subscription>{};

  constructor(public crudClothesService: CrudClothesService) {}

  ngOnInit(): void {
    this.clothesData = this.crudClothesService.getClothes();
    this.observeUpdateDataClothes();
  }

  private observeUpdateDataClothes() {
    this._subscribeUpdateDataClothes = this.crudClothesService.updateData.dashboard.subscribe(() => {
      this.clothesData = this.crudClothesService.getClothes();
    });
  }

  ngOnDestroy() {
    if (!!this._subscribeUpdateDataClothes) {
      this._subscribeUpdateDataClothes.unsubscribe();
    }
  }
}
