import { Component, HostListener, OnInit } from '@angular/core';
import { Menus } from '../../interfaces/menus';
import { Sidebar } from '../../interfaces/sidebar';
import { SidebarService } from '../../../core/services/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  public menus: Menus[] = [];
  public sidebar: Sidebar = {
    opened: [],
    expanded: false,
  }

  private screenWidth: number = 0;
  
  constructor(
    private sidebarService: SidebarService,
  ) {}
  
  ngOnInit(): void {
    this.menus = this.sidebarService.menus;
    this.screenWidth = window.innerWidth;
  }

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

  public isOpenedMenu(index: number) {
    for (let i = 0; i < this.sidebar.opened.length; i++) {
      const itemIndex = this.sidebar.opened[i];
      
      if (itemIndex === index) {
        return true;
      }
    }

    return false;
  }
  
  onMouseEnter() {
    if (this.screenWidth <= 576) return;
    this.sidebar.expanded = true;
  }

  onMouseLeave() {
    if (this.screenWidth <= 576) return;
    this.sidebar.expanded = false;
  }

  toggleSidebar() {
    this.sidebar.expanded = !this.sidebar.expanded;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = window.innerWidth;
  }
}
