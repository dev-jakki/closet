import { Component } from '@angular/core';
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

  constructor(
    private drawerService: DrawerService,
    public newClotheButtonService: NewClotheButtonService,
  ) {}

  public onAddClothe() {
    const modalContent: DrawerContent = {
      component: RegisterClotheComponent,
      inputs: {},
    };

    const options: DrawerOptions = {
      positionX: PosicaoX.Direita,
      positionY: PosicaoY.Topo,
      height: "100%",
      size: "auto",
      isDraggable: true,
    };

    const modalParams: DrawerOpenParams = {
      title: "Adicionar vestimenta",
      modalContent,
      options,
    };

    const modalRef = this.drawerService.open(modalParams);

    modalRef.result.finally(() => {
    });
  }
}
