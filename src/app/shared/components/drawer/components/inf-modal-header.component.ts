import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'inf-modal-header',
  standalone: false,
  templateUrl: './inf-modal-header.component.html',
  styleUrls: ['./inf-modal-header.component.scss'],
})
export class InfDrawerHeaderComponent {
  @Input()
  isDraggable = true;

  @Input()
  title!: string;

  @Input()
  closeIcon: string = 'close';

  @Input()
  visible = true;

  @Input()
  disabled = false;

  @Output()
  close = new EventEmitter<void>();

  dragIcon = 'inf-i-solid-grip-vertical';
}
