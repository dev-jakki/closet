import { Injectable } from '@angular/core';
import { Clothe } from '../../../shared/interfaces/clothe';

@Injectable({
  providedIn: 'root',
})
export class CrudClothesService {

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

  public favoriteClothe(id: string) {
    const clothesData = this.getClothes();

    const clotheIndex = clothesData.findIndex(
      (clothe: Clothe) => clothe.id === id
    );

    if (clotheIndex !== -1) {
      clothesData[clotheIndex].favorite = true;
    }

    localStorage.setItem('clothes', JSON.stringify(clothesData));
  }
}
