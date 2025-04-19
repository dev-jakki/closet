import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { InventarioComponent } from './inventario.component';
import { VestidosComponent } from './vestidos/vestidos.component';
import { BlusasComponent } from './blusas/blusas.component';
import { CalcasComponent } from './calcas/calcas.component';
import { SaiasComponent } from './saias/saias.component';
import { SharedModule } from '../../shared/shared.module';
import { NewClotheButtonComponent } from '../../shared/atoms/new-clothe-button/new-clothe-button.component';

@NgModule({
  declarations: [
    InventarioComponent,
    VestidosComponent,
    BlusasComponent,
    CalcasComponent,
    SaiasComponent,
    NewClotheButtonComponent
  ],
  imports: [CommonModule, SharedModule, InventarioRoutingModule],
})
export class InventarioModule {}
