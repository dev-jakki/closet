import { Component } from '@angular/core';
import { DrawerService } from '../../../core/services/drawer/drawer.service';
import { RegisterClotheComponent } from '../../forms/register-clothe/register-clothe.component';
import { DrawerContent } from '../../interfaces/drawer-content';
import { NewClotheButtonService } from '../../../core/services/new-clothe/new-clothe.service';

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
    const drawerContent: DrawerContent = {
      component: RegisterClotheComponent,
    };
    
    this.drawerService.open({
      title: 'Nova vestimenta',
      drawerContent: drawerContent,
    });
  }
}
