import { Component } from '@angular/core';
import { Menus } from '../../interfaces/menus';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  public itemsOpened: Array<number> = [];
  
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
          title: 'Vestidos',
          icon: '/assets/icons/vestido.svg',
          link: 'vestidos',
        },
        {
          title: 'Blusas',
          icon: '/assets/icons/blusa.svg',
          link: 'blusas',
        },
        {
          title: 'Calças',
          icon: '/assets/icons/calca.svg',
          link: 'calcas',
        },
        {
          title: 'Saias',
          icon: '/assets/icons/saia.svg',
          link: 'saias',
        },
      ],
    },
    {
      index: 3,
      title: 'Looks',
      icon: '',
      link: 'looks',
      filhos: [
        {
          title: 'Casual',
          icon: '/assets/icons/salto.svg',
          link: 'casual',
        },
        {
          title: 'Formal',
          icon: '/assets/icons/bolsa.svg',
          link: 'formal',
        },
        {
          title: 'Praia',
          icon: '/assets/icons/sol-mar.svg',
          link: 'praia',
        },
        {
          title: 'Festas',
          icon: '/assets/icons/tarcas.svg',
          link: 'festa',
        },
      ],
    },
  ];

  // Se os items de um item estiver a mostra, ele é escondido, e vice-versa
  public openItemMenu(data: Menus) {
    if (data.index && data.filhos) {
      let isOpen = false;

      this.itemsOpened.map(itemIndex => {
        if (data.index === itemIndex) {
          const result = this.itemsOpened.filter(num => num !== data.index);
          this.itemsOpened = result;
          isOpen = true;
          return;
        }
      });

      if (isOpen) return;
      
      this.itemsOpened.push(data.index);
    }
  }

  // Abre e fecha itens filhos
  public isOpenFather(index: number | undefined) {
    if (index) {
      for (let i = 0; i < this.itemsOpened.length; i++) {
        const itemIndex = this.itemsOpened[i];
        
        if (itemIndex === index) {
          return true;
        }
      }

      return false;
    }

    return;
  }
}
