import { Clothe } from '../../shared/interfaces/clothe';
import { CrudClothesService } from './../../core/services/crud-clothes/crud-clothes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit{
  public clothesData: Clothe[] = [];

  constructor(public crudClothesService: CrudClothesService) {}

  ngOnInit(): void {
    this.clothesData = this.crudClothesService.getClothes();
  }


}
