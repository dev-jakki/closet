import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InventarioRoutingModule } from './inventario-routing.module';
import { InventarioComponent } from './inventario.component';
import { VestidosComponent } from './vestidos/vestidos.component';
import { BlusasComponent } from './blusas/blusas.component';
import { CalcasComponent } from './calcas/calcas.component';
import { SaiasComponent } from './saias/saias.component';

@NgModule({
  declarations: [
    InventarioComponent,
    VestidosComponent,
    BlusasComponent,
    CalcasComponent,
    SaiasComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, InventarioRoutingModule],
})
export class InventarioModule {}
