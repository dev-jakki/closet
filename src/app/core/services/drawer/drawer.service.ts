import { Injectable } from '@angular/core';
import { DrawerOpenParams } from '../../../shared/interfaces/drawer-open-params';
import { DrawerContent } from '../../../shared/interfaces/drawer-content';
import { DrawerOptions } from '../../../shared/interfaces/drawer-options';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DrawerComponent } from '../../../shared/components/drawer/drawer.component';
import { PosicaoX, PosicaoY } from '../../../shared/enums';

const CSS_GERAL = 'width: 100%; margin: 0; padding: 0;';
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
  constructor(private modalService: NgbModal) {}

  /**
   * Abre um modal com base nos parâmetros fornecidos.
   *
   * @param params - Parâmetros de entrada para a abertura do modal.
   * @returns Uma referência para o modal aberto.
   */

  public open(params: DrawerOpenParams) {
    const options =
      (params.options as unknown as DrawerOptions) ?? new DrawerOptions();

    params.options = params.options ?? {};
    params.options.backdrop = params.options.backdrop ?? 'static';
    params.options.keyboard = params.options?.keyboard ?? false;

    const modalRef: NgbModalRef = this.obterModalRef(params, options);
    const modalDialog: HTMLDivElement = this.obterDialogModal(modalRef);
    const modalContent: HTMLDivElement = this.obterContentModal(modalDialog);

    modalDialog.classList.add('inf-modal-dialog');

    this.setarEstiloModalDialog(modalDialog, options);
    this.setarEstiloModalContent(modalContent, options.height);

    return modalRef;
  }

  private obterContentModal(modalDialog: HTMLDivElement): HTMLDivElement {
    const modalContentClass = 'modal-content';

    return modalDialog.getElementsByClassName(
      modalContentClass
    )[0] as HTMLDivElement;
  }

  private definirBordaModalContent() {
    return 'border: none;';
  }

  private obterModalRef(
    params: { title: string; modalContent: DrawerContent },
    options: DrawerOptions
  ): NgbModalRef {
    const modalRef: NgbModalRef = this.modalService.open(
      DrawerComponent,
      options
    );
    const componentInstance = modalRef.componentInstance as DrawerComponent;
    const modalContainer = this.obterDialogModal(modalRef)?.parentElement;

    componentInstance.title = params.title;
    componentInstance.isDraggable = options.isDraggable ?? true;
    componentInstance.modalContainer = modalContainer;

    componentInstance.modalHeaderCustom = options.customHeader;
    componentInstance.modalContent = {
      component: params.modalContent.component,
      inputs: params.modalContent.inputs,
    };

    return modalRef;
  }

  private setarEstiloModalContent(
    modalContent: HTMLDivElement,
    height: string = 'auto'
  ) {
    const modalContentProp = 'style';
    let modalContentStyles = '';

    modalContentStyles += this.definirBordaModalContent();
    modalContentStyles += this.definirAlturaModalContent(height);

    modalContent.setAttribute(modalContentProp, modalContentStyles);
  }

  private definirAlturaModalContent(height: string) {
    height = height.trim() === '100%' ? '100vh' : height;

    return `
      overflow-y: scroll; 
      scrollbar-width: none;
      height: ${height}; 
    `;
  }

  private setarEstiloModalDialog(
    modalDialog: HTMLDivElement,
    options: DrawerOptions
  ) {
    const modalDialogProp = 'style';
    let dialogModalCss = '';

    dialogModalCss += this.definirModalAltura(options.height);
    dialogModalCss += this.definirModalPosicao(
      options.positionX,
      options.positionY
    );

    modalDialog.setAttribute(modalDialogProp, dialogModalCss);
  }

  private definirModalAltura(height: string = 'auto') {
    return `min-height: ${height}; height: auto;`;
  }

  private obterDialogModal(modalRef: NgbModalRef): HTMLDivElement {
    const PROP_WINDOW_CMPT_REF = '_windowCmptRef';

    const modalElement: HTMLElement =
      modalRef[PROP_WINDOW_CMPT_REF].location.nativeElement;

    return modalElement.getElementsByTagName('div')[0];
  }

  private definirModalPosicao(
    positionX: PosicaoX = PosicaoX.Centro,
    positionY: PosicaoY = PosicaoY.Centro
  ) {
    let cssPosition = CSS_GERAL;

    cssPosition += this.definirPosicaoX(positionX);
    cssPosition += this.definirPosicaoY(positionY);

    cssPosition += this.definirTranslateXY(positionX, positionY);

    return cssPosition;
  }

  private definirTranslateXY(positionX: PosicaoX, positionY: PosicaoY): string {
    if (positionX === PosicaoX.Direita && positionY === PosicaoY.Fundo) {
      return this.obterPropiedadeTransform('-100%', '-100%');
    } else if (positionX === PosicaoX.Direita) {
      return this.obterPropiedadeTransform('-100%', '0');
    } else if (
      positionX === PosicaoX.Esquerda &&
      positionY === PosicaoY.Fundo
    ) {
      return this.obterPropiedadeTransform('0', '-100%');
    } else if (positionX === PosicaoX.Centro && positionY === PosicaoY.Centro) {
      return this.obterPropiedadeTransform('-50%', '-50%');
    } else if (
      positionX === PosicaoX.Esquerda &&
      positionY === PosicaoY.Centro
    ) {
      return this.obterPropiedadeTransform('0', '-50%');
    } else if (positionY === PosicaoY.Fundo) {
      return this.obterPropiedadeTransform('-50%', '0');
    } else if (positionX === PosicaoX.Centro) {
      return this.obterPropiedadeTransform('-50%', '0');
    }

    return this.obterPropiedadeTransform('0', '0');
  }

  private obterPropiedadeTransform(x: string, y: string): string {
    return `transform: translate(${x}, ${y});`;
  }

  private definirPosicaoY(positionY: PosicaoY): string {
    switch (positionY) {
      case PosicaoY.Topo:
        return CSS_TOP;
      case PosicaoY.Fundo:
        return CSS_BOTTOM;
      default:
        return CSS_CENTER_Y;
    }
  }

  private definirPosicaoX(positionX: PosicaoX): string {
    switch (positionX) {
      case PosicaoX.Esquerda:
        return CSS_LEFT;
      case PosicaoX.Direita:
        return CSS_RIGHT;
      default:
        return CSS_CENTER_X;
    }
  }
}
