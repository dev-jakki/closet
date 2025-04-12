import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnDestroy,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InfDrawerHeaderComponent } from './components/inf-modal-header.component';
import type { DrawerContent } from '../../interfaces/drawer-content';

@Component({
  selector: 'app-drawer',
  standalone: false,
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
})
export class DrawerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('contentContainer', { read: ViewContainerRef })
  contentContainer!: ViewContainerRef;

  @ViewChild('modalHeaderContainer', { read: ViewContainerRef, static: true })
  modalHeaderContainer!: ViewContainerRef;

  private componentRef: ComponentRef<any> = <ComponentRef<any>>{};
  private componenteHeaderRef: ComponentRef<any> = <ComponentRef<any>>{};

  @Input() title: string = '';
  @Input() modalHeaderCustom?: Type<any>;
  @Input() modalContent: DrawerContent = <DrawerContent>{};
  @Input() isDraggable: boolean = true;
  @Input() closeIcon = 'close';
  @Input() dragIcon = 'inf-i-solid-grip-vertical';
  @Input() disabled: boolean = false;
  @Input() visible: boolean = true;
  @Input() modalContainer: HTMLElement | null = null;

  constructor(
    public modal: NgbActiveModal,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngAfterViewInit() {
    if (this.modalContent) {
      const componentFactory =
        this.componentFactoryResolver.resolveComponentFactory(
          this.modalContent.component
        );

      this.componentRef =
        this.contentContainer.createComponent(componentFactory);
      Object.assign(this.componentRef.instance, this.modalContent.inputs);
      this.componentRef.changeDetectorRef.detectChanges();
    }

    this.setarAcaoClickFora();
    this.inserirHeader(this.modalHeaderCustom);
  }

  private inserirHeader<T>(
    component: Type<T> = InfDrawerHeaderComponent as unknown as Type<T>
  ) {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(component);

    this.componenteHeaderRef =
      this.modalHeaderContainer.createComponent(componentFactory);

    Object.assign(this.componenteHeaderRef.instance, {
      title: this.title,
      isDraggable: this.isDraggable,
    });

    const closeEvent =  this.componenteHeaderRef.instance.close;
    
    if (closeEvent && closeEvent.subscribe) {
      closeEvent.subscribe(() => this.close());
    }

    this.componenteHeaderRef.changeDetectorRef.detectChanges();
  }

  private setarAcaoClickFora() {
    this.modalContainer?.addEventListener('click', (event: Event) => {
      if ((event.target as HTMLElement).classList.contains('modal')) {
        this.close();
      }
    });
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef?.changeDetectorRef.detach();
    }

    if (this.componenteHeaderRef) {
      this.componenteHeaderRef?.changeDetectorRef.detach();
    }
  }

  close() {
    if (this.componentRef.instance.podeFecharModal()) {
      this.modal.close();
    } else {
      if (window.confirm('Tem certeza que deseja desistir?')) {
        this.modal.close();
      }
    }
  }
}
