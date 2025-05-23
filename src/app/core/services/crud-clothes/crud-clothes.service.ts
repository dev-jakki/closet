import { Injectable } from '@angular/core';
import { Clothe } from '../../../shared/interfaces/clothe';
import { Subject } from 'rxjs';
import { ClotheFilter } from '../../../shared/interfaces/filters';

@Injectable({
  providedIn: 'root',
})
export class CrudClothesService {
  public updateData = {
    dashboard: new Subject<void>(),
    dress: new Subject<void>(),
    blouse: new Subject<void>(),
    pants: new Subject<void>(),
    skirt: new Subject<void>(),
    casual: new Subject<void>(),
    formal: new Subject<void>(),
    beach: new Subject<void>(),
    party: new Subject<void>(),
  }

  constructor() {}

  public addClothe(clothe: Clothe) {
    const clothes = this.getClothes();
    clothes.push(clothe);

    localStorage.setItem('clothes', JSON.stringify(clothes));
  }

  public getClothes(filter?: ClotheFilter) {
    const stored = localStorage.getItem('clothes');
    var clothesData = stored ? JSON.parse(stored) : [];

    if (filter) {
      if (filter?.section) {
        clothesData = clothesData.filter(
          (clothe: Clothe) => clothe.section === filter.section
        );
      }

      if (filter?.clean !== undefined) {
        clothesData = clothesData.filter(
          (clothe: Clothe) => clothe.clean === filter.clean
        );
      }

      if (filter?.favorite) {
        clothesData = clothesData.filter(
          (clothe: Clothe) => clothe.favorite === filter.favorite
        );
      }

      return clothesData;
    }

    return clothesData;
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

  public searchPageToUpdate(index: number) {
    switch (index) {
      case 1:
        this.updateData.dashboard.next();
        break;
      case 3:
        this.updateData.dress.next();
        break;
      case 4:
        this.updateData.blouse.next();
        break;
      case 5:
        this.updateData.pants.next();
        break;
      case 6:
        this.updateData.skirt.next();
        break;
      case 8:
        this.updateData.casual.next();
        break;
      case 9:
        this.updateData.formal.next();
        break;
      case 10:
        this.updateData.beach.next();
        break;
      case 11:
        this.updateData.party.next();
        break;
    }
  }
}
