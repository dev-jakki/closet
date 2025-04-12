import { Injectable } from '@angular/core';
import { DrawerOpenParams } from '../../../shared/interfaces/drawer-open-params';
import { DrawerContent } from '../../../shared/interfaces/drawer-content';
import { DrawerOptions } from '../../../shared/interfaces/drawer-options';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DrawerComponent } from '../../../shared/components/drawer/drawer.component';
import { PosicaoX, PosicaoY } from '../../../shared/enums';

const CSS_ALL = 'width: 100%; margin: 0; padding: 0;';
const CSS_CENTER_X = 'left: 50%;';
const CSS_CENTER_Y = 'top: 50%;';
const CSS_TOP = 'top: 0;';
const CSS_BOTTOM = 'top: 100%;';
const CSS_RIGHT = 'left: 100%;';
const CSS_LEFT = 'left: 0;';

@Injectable({
  providedIn: 'root',
})
export class DrawerService {

  constructor(private drawerService: NgbModal) {}

  public open(params: DrawerOpenParams) {
    const options =
      (params.options as unknown as DrawerOptions) ?? new DrawerOptions();

    params.options = params.options ?? {};
    params.options.backdrop = params.options.backdrop ?? 'static';
    params.options.keyboard = params.options?.keyboard ?? false;

    const drawerRef: NgbModalRef = this.getDrawerRef(params, options);
    const drawerDialog: HTMLDivElement = this.getDialogDrawer(drawerRef);
    const drawerContent: HTMLDivElement = this.getContentDrawer(drawerDialog);

    this.setStyleDrawerDialog(drawerDialog, options);
    this.setStyleDrawerContent(drawerContent, options.height);

    return drawerRef;
  }

  private getContentDrawer(drawerDialog: HTMLDivElement): HTMLDivElement {
    const drawerContentClass = 'modal-content';

    return drawerDialog.getElementsByClassName(
      drawerContentClass
    )[0] as HTMLDivElement;
  }

  private defineBorderDrawerContent() {
    return 'border: none;';
  }

  private getDrawerRef(
    params: { title: string; drawerContent: DrawerContent },
    options: DrawerOptions
  ): NgbModalRef {
    const drawerRef: NgbModalRef = this.drawerService.open(
      DrawerComponent,
      options
    );
    const componentInstance = drawerRef.componentInstance as DrawerComponent;
    const drawerContainer = this.getDialogDrawer(drawerRef)?.parentElement;

    componentInstance.title = params.title;
    componentInstance.drawerContainer = drawerContainer;

    if (options.customHeader) {
      componentInstance.drawerHeaderCustom = options.customHeader;
    }
    
    componentInstance.drawerContent = {
      component: params.drawerContent.component,
      inputs: params.drawerContent.inputs,
    };

    return drawerRef;
  }

  private setStyleDrawerContent(
    drawerContent: HTMLDivElement,
    height: string = 'auto'
  ) {
    const drawerContentProp = 'style';
    let drawerContentStyles = '';

    drawerContentStyles += this.defineBorderDrawerContent();
    drawerContentStyles += this.defineHeightDrawerContent(height);

    drawerContent.setAttribute(drawerContentProp, drawerContentStyles);
  }

  private defineHeightDrawerContent(height: string) {
    height = height.trim() === '100%' ? '100vh' : height;

    return `
      overflow-y: scroll; 
      scrollbar-width: none;
      height: ${height}; 
    `;
  }

  private setStyleDrawerDialog(
    drawerDialog: HTMLDivElement,
    options: DrawerOptions
  ) {
    const drawerDialogProp = 'style';
    let dialogModalCss = '';

    dialogModalCss += this.defineDrawerHeight(options.height);
    dialogModalCss += this.defineDrawerPosition(
      options.positionX,
      options.positionY
    );

    drawerDialog.setAttribute(drawerDialogProp, dialogModalCss);
  }

  private defineDrawerHeight(height: string = 'auto') {
    return `min-height: ${height}; height: auto;`;
  }

  private getDialogDrawer(drawerRef: NgbModalRef): HTMLDivElement {
    const PROP_WINDOW_CMPT_REF = '_windowCmptRef';

    const drawerElement: HTMLElement =
      drawerRef[PROP_WINDOW_CMPT_REF].location.nativeElement;

    return drawerElement.getElementsByTagName('div')[0];
  }

  private defineDrawerPosition(
    positionX: PosicaoX = PosicaoX.Center,
    positionY: PosicaoY = PosicaoY.Center
  ) {
    let cssPosition = CSS_ALL;

    cssPosition += this.definePositionX(positionX);
    cssPosition += this.definePositionY(positionY);

    cssPosition += this.definirTranslateXY(positionX, positionY);

    return cssPosition;
  }

  private definirTranslateXY(positionX: PosicaoX, positionY: PosicaoY): string {
    if (positionX === PosicaoX.Right && positionY === PosicaoY.Bottom) {
      return this.getPropertyTransform('-100%', '-100%');
    } else if (positionX === PosicaoX.Right) {
      return this.getPropertyTransform('-100%', '0');
    } else if (
      positionX === PosicaoX.Left &&
      positionY === PosicaoY.Bottom
    ) {
      return this.getPropertyTransform('0', '-100%');
    } else if (positionX === PosicaoX.Center && positionY === PosicaoY.Center) {
      return this.getPropertyTransform('-50%', '-50%');
    } else if (
      positionX === PosicaoX.Left &&
      positionY === PosicaoY.Center
    ) {
      return this.getPropertyTransform('0', '-50%');
    } else if (positionY === PosicaoY.Bottom) {
      return this.getPropertyTransform('-50%', '0');
    } else if (positionX === PosicaoX.Center) {
      return this.getPropertyTransform('-50%', '0');
    }

    return this.getPropertyTransform('0', '0');
  }

  private getPropertyTransform(x: string, y: string): string {
    return `transform: translate(${x}, ${y});`;
  }

  private definePositionY(positionY: PosicaoY): string {
    switch (positionY) {
      case PosicaoY.Top:
        return CSS_TOP;
      case PosicaoY.Bottom:
        return CSS_BOTTOM;
      default:
        return CSS_CENTER_Y;
    }
  }

  private definePositionX(positionX: PosicaoX): string {
    switch (positionX) {
      case PosicaoX.Left:
        return CSS_LEFT;
      case PosicaoX.Right:
        return CSS_RIGHT;
      default:
        return CSS_CENTER_X;
    }
  }
}
