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
import { DrawerHeaderComponent } from './components/drawer-header.component';
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

  @ViewChild('drawerHeaderContainer', { read: ViewContainerRef, static: true })
  drawerHeaderContainer!: ViewContainerRef;

  private componentRef: ComponentRef<any> = <ComponentRef<any>>{};
  private componenteHeaderRef: ComponentRef<any> = <ComponentRef<any>>{};

  @Input() title: string = '';
  @Input() drawerHeaderCustom?: Type<any>;
  @Input() drawerContent: DrawerContent = <DrawerContent>{};
  @Input() drawerContainer: HTMLElement | null = null;

  constructor(
    public modal: NgbActiveModal,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngAfterViewInit() {
    if (this.drawerContent) {
      const componentFactory =
        this.componentFactoryResolver.resolveComponentFactory(
          this.drawerContent.component
        );

      this.componentRef =
        this.contentContainer.createComponent(componentFactory);
      Object.assign(this.componentRef.instance, this.drawerContent.inputs);
      this.componentRef.changeDetectorRef.detectChanges();
    }

    this.setActionClickOut();
    this.insertHeader(this.drawerHeaderCustom);
  }

  private insertHeader<T>(
    component: Type<T> = DrawerHeaderComponent as unknown as Type<T>
  ) {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(component);

    this.componenteHeaderRef =
      this.drawerHeaderContainer.createComponent(componentFactory);

    Object.assign(this.componenteHeaderRef.instance, {
      title: this.title,
    });

    const closeEvent = this.componenteHeaderRef.instance.close;

    if (closeEvent && closeEvent.subscribe) {
      closeEvent.subscribe(() => this.close());
    }

    this.componenteHeaderRef.changeDetectorRef.detectChanges();
  }

  private setActionClickOut() {
    this.drawerContainer?.addEventListener('click', (event: Event) => {
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
    if (this.componentRef.instance.canCloseDrawer()) {
      this.modal.close();
    } else {
      if (window.confirm('Tem certeza que deseja desistir?')) {
        this.modal.close();
      }
    }
  }
}
