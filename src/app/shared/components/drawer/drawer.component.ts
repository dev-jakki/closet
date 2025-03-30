import { Component } from '@angular/core';
import { DrawerService } from '../../../core/services/drawer/drawer.service';

@Component({
  selector: 'app-drawer',
  standalone: false,
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
})
export class DrawerComponent {
  public visible = false;
  config: any = null;
  
  constructor(private drawerService: DrawerService) {
    this.drawerService.visible$.subscribe((status) => (this.visible = status));
    this.drawerService.config$.subscribe((config) => (this.config = config));
  }

  close() {
    this.drawerService.close();
  }
}
