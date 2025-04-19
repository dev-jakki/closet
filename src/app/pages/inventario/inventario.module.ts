import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { InventarioComponent } from './inventario.component';
import { VestidosComponent } from './vestidos/vestidos.component';
import { BlusasComponent } from './blusas/blusas.component';
import { CalcasComponent } from './calcas/calcas.component';
import { SaiasComponent } from './saias/saias.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    InventarioComponent,
    VestidosComponent,
    BlusasComponent,
    CalcasComponent,
    SaiasComponent,
  ],
  imports: [CommonModule, SharedModule, InventarioRoutingModule],
})
export class InventarioModule {}
