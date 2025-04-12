import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-drawer-header',
  standalone: false,
  templateUrl: './drawer-header.component.html',
  styleUrls: ['./drawer-header.component.scss'],
})
export class DrawerHeaderComponent {
  @Input()
  title!: string;
  
  @Output()
  close = new EventEmitter<void>();
}
