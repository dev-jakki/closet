import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudClothesService {

  constructor() { }

  addClothe(clothe: any) {
    // localStorage.setItem('items', JSON.stringify(storedItems));
  }

}
