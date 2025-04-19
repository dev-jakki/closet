import { Injectable } from '@angular/core';
import { Menus } from '../../../shared/interfaces/menus';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  public currentMenuIndex = 0;

  public menus: Menus[] = [
    {
      index: 1,
      title: 'Dashboard',
      icon: '/assets/icons/dashboard.svg',
      targetUrl: '/dashboard',
      filhos: null,
    },
    {
      index: 2,
      title: 'Inventário',
      icon: '',
      targetUrl: '/inventario',
      filhos: [
        {
          index: 3,
          title: 'Vestidos',
          icon: '/assets/icons/vestido.svg',
          targetUrl: '/inventario/vestidos',
          filhos: null,
        },
        {
          index: 4,
          title: 'Blusas',
          icon: '/assets/icons/blusa.svg',
          targetUrl: '/inventario/blusas',
          filhos: null,
        },
        {
          index: 5,
          title: 'Calças',
          icon: '/assets/icons/calca.svg',
          targetUrl: '/inventario/calcas',
          filhos: null,
        },
        {
          index: 6,
          title: 'Saias',
          icon: '/assets/icons/saia.svg',
          targetUrl: '/inventario/saias',
          filhos: null,
        },
      ],
    },
    {
      index: 7,
      title: 'Looks',
      icon: '',
      targetUrl: '/looks',
      filhos: [
        {
          index: 8,
          title: 'Casual',
          icon: '/assets/icons/salto.svg',
          targetUrl: '/looks/casual',
          filhos: null,
        },
        {
          index: 9,
          title: 'Formal',
          icon: '/assets/icons/bolsa.svg',
          targetUrl: '/looks/formal',
          filhos: null,
        },
        {
          index: 10,
          title: 'Praia',
          icon: '/assets/icons/sol-mar.svg',
          targetUrl: '/looks/praia',
          filhos: null,
        },
        {
          index: 11,
          title: 'Festas',
          icon: '/assets/icons/tarcas.svg',
          targetUrl: '/looks/festa',
          filhos: null,
        },
      ],
    },
  ];

  constructor(private router: Router) {}

  public hasAcesso = (menus: Menus[] = this.menus, currentUrl?: string): boolean => {
    const url = currentUrl || this.getUrlCurrent();
  
    for (const menu of menus) {
      if (menu.targetUrl === url) {
        this.currentMenuIndex = menu.index;
        return true;
      }
  
      if (menu.filhos && this.hasAcesso(menu.filhos, url)) {
        return true;
      }
    }
  
    return false;
  };

  public getUrlCurrent = () => {
    const route = this.router.routerState.snapshot.url.split('?')[0];
    return `${route}`;
  };
}
