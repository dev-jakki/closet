import { SidebarService } from './../../../core/services/sidebar/sidebar.service';
import { Component, Input } from '@angular/core';
import { DrawerService } from '../../../core/services/drawer/drawer.service';
import { RegisterClotheComponent } from '../../forms/register-clothe/register-clothe.component';
import { DrawerContent } from '../../interfaces/drawer-content';
import { NewClotheButtonService } from '../../../core/services/new-clothe/new-clothe.service';
import { PosicaoX, PosicaoY } from '../../enums';
import { DrawerOptions } from '../../interfaces/drawer-options';
import { DrawerOpenParams } from '../../interfaces/drawer-open-params';

@Component({
  selector: 'app-new-clothe-button',
  standalone: false,
  templateUrl: './new-clothe-button.component.html',
  styleUrl: './new-clothe-button.component.scss',
})
export class NewClotheButtonComponent {
  @Input() public text = 'Novo';

  constructor(
    private drawerService: DrawerService,
    public newClotheButtonService: NewClotheButtonService,
    private sidebarService: SidebarService
  ) {}

  public onAddClothe() {
    const drawerContent: DrawerContent = {
      component: RegisterClotheComponent,
      inputs: {
        indexSection: this.sidebarService.currentMenuIndex,
      },
    };

    const options: DrawerOptions = {
      positionX: PosicaoX.Right,
      positionY: PosicaoY.Top,
      height: '100%',
      size: 'auto',
      isDraggable: true,
    };

    const modalParams: DrawerOpenParams = {
      title: 'Adicionar vestimenta',
      drawerContent,
      options,
    };

    const modalRef = this.drawerService.open(modalParams);

    modalRef.result.finally(() => {});
  }
}
