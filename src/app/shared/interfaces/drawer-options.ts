import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { PosicaoX, PosicaoY } from '../enums';
import { Injector, Type } from '@angular/core';

export class DrawerOptions implements NgbModalOptions {
  height?: string = 'auto';
  positionX?: PosicaoX = PosicaoX.Centro;
  positionY?: PosicaoY = PosicaoY.Centro;
  isDraggable?: boolean = true;
  animation?: boolean = false;
  backdrop?: boolean | 'static' = 'static';
  size?: 'sm' | 'lg' | 'xl' | 'xxl' | 'full' | string = 'lg';
  customHeader?: Type<any>;
  ariaDescribedBy?: string;
  ariaLabelledBy?: string;
  backdropClass?: string;
  beforeDismiss?: () => boolean | Promise<boolean>;
  centered?: boolean;
  container?: string | HTMLElement;
  injector?: Injector;
  keyboard?: boolean;
  scrollable?: boolean;
  windowClass?: string;
}
