import { Injectable } from '@angular/core';
import { Clothe } from '../../../shared/interfaces/clothe';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudClothesService {
  public updateDataClothes: Subject<void> = new Subject();
  
  constructor() {}

  public addClothe(clothe: Clothe) {
    const clothes = this.getClothes();
    clothes.push(clothe);

    localStorage.setItem('clothes', JSON.stringify(clothes));
  }

  public getClothes() {
    const stored = localStorage.getItem('clothes');
    const clothes = stored ? JSON.parse(stored) : [];

    return clothes;
  }

  public deleteClothe(id: string) {
    const clothes = this.getClothes();
    const updatedClothes = clothes.filter((clothe: Clothe) => clothe.id !== id);

    localStorage.setItem('clothes', JSON.stringify(updatedClothes));
  }

  public addRemoveFavoriteClothe(id: string) {
    const clothesData = this.getClothes();

    clothesData.map(
      (clothe: Clothe) => {
        if (clothe.id === id) {
          clothe.favorite = !clothe.favorite;
        }
    });

    localStorage.setItem('clothes', JSON.stringify(clothesData));
  }
}
