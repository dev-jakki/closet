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
  public clothesFavoriteData: Clothe[] = [];
  public clothesCleanData: Clothe[] = [];
  private _subscribeUpdateDataClothes: Subscription | null = null;

  constructor(public crudClothesService: CrudClothesService) {}

  ngOnInit(): void {
    this.clothesFavoriteData = this.crudClothesService.getClothes({ favorite: true });
    this.clothesCleanData = this.crudClothesService.getClothes({ clean: false });
    this.observeUpdateDataClothes();
  }

  private observeUpdateDataClothes() {
    this._subscribeUpdateDataClothes = this.crudClothesService.updateData.dashboard.subscribe(() => {
      this.clothesFavoriteData = this.crudClothesService.getClothes({ favorite: true });
      this.clothesCleanData = this.crudClothesService.getClothes({ clean: false });
    });
  }

  ngOnDestroy() {
    this._subscribeUpdateDataClothes?.unsubscribe();
  }
}
