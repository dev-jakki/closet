import { Injectable } from '@angular/core';
import { Menus } from '../../../shared/interfaces/menus';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  public menus: Menus[] = [
    {
      index: 1,
      title: 'Dashboard',
      icon: '/assets/icons/dashboard.svg',
      link: 'dashboard',
      filhos: null,
    },
    {
      index: 2,
      title: 'Inventário',
      icon: '',
      link: 'inventario',
      filhos: [
        {
          index: 3,
          title: 'Vestidos',
          icon: '/assets/icons/vestido.svg',
          link: 'vestidos',
          filhos: null,
        },
        {
          index: 4,
          title: 'Blusas',
          icon: '/assets/icons/blusa.svg',
          link: 'blusas',
          filhos: null,
        },
        {
          index: 5,
          title: 'Calças',
          icon: '/assets/icons/calca.svg',
          link: 'calcas',
          filhos: null,
        },
        {
          index: 6,
          title: 'Saias',
          icon: '/assets/icons/saia.svg',
          link: 'saias',
          filhos: null,
        },
      ],
    },
    {
      index: 7,
      title: 'Looks',
      icon: '',
      link: 'looks',
      filhos: [
        {
          index: 8,
          title: 'Casual',
          icon: '/assets/icons/salto.svg',
          link: 'casual',
          filhos: null,
        },
        {
          index: 9,
          title: 'Formal',
          icon: '/assets/icons/bolsa.svg',
          link: 'formal',
          filhos: null,
        },
        {
          index: 10,
          title: 'Praia',
          icon: '/assets/icons/sol-mar.svg',
          link: 'praia',
          filhos: null,
        },
        {
          index: 11,
          title: 'Festas',
          icon: '/assets/icons/tarcas.svg',
          link: 'festa',
          filhos: null,
        },
      ],
    },
  ];
}
