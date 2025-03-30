import { Component } from '@angular/core';
import { Menus } from '../../interfaces/menus';
import { Sidebar } from '../../interfaces/sidebar';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {

  public sidebar: Sidebar = {
    opened: [],
    expanded: false,
  }
  
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
        },
        {
          index: 4,
          title: 'Blusas',
          icon: '/assets/icons/blusa.svg',
          link: 'blusas',
        },
        {
          index: 5,
          title: 'Calças',
          icon: '/assets/icons/calca.svg',
          link: 'calcas',
        },
        {
          index: 6,
          title: 'Saias',
          icon: '/assets/icons/saia.svg',
          link: 'saias',
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
        },
        {
          index: 9,
          title: 'Formal',
          icon: '/assets/icons/bolsa.svg',
          link: 'formal',
        },
        {
          index: 10,
          title: 'Praia',
          icon: '/assets/icons/sol-mar.svg',
          link: 'praia',
        },
        {
          index: 11,
          title: 'Festas',
          icon: '/assets/icons/tarcas.svg',
          link: 'festa',
        },
      ],
    },
  ];

  // Se os items de um item estiverem a mostra, ele é escondido, e vice-versa
  public openItemMenu(data: Menus) {
    if (data.index && data.filhos) {
      let isOpen = false;

      this.sidebar.opened.map(itemIndex => {
        if (data.index === itemIndex) {
          const result = this.sidebar.opened.filter(num => num !== data.index);
          this.sidebar.opened = result;
          isOpen = true;
          return;
        }
      });

      if (isOpen) return;
      
      this.sidebar.opened.push(data.index);
    }
  }

  // Abre e fecha itens filhos
  public isOpenFather(index: number | undefined) {
    if (index) {
      for (let i = 0; i < this.sidebar.opened.length; i++) {
        const itemIndex = this.sidebar.opened[i];
        
        if (itemIndex === index) {
          return true;
        }
      }

      return false;
    }

    return;
  }
  
  onMouseEnter() {
    this.sidebar.expanded = true;
  }

  onMouseLeave() {
    this.sidebar.expanded = false;
  }
}
