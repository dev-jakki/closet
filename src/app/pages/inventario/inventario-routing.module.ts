import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { InventarioComponent } from "./inventario.component";
import { VestidosComponent } from "./vestidos/vestidos.component";
import { BlusasComponent } from "./blusas/blusas.component";
import { CalcasComponent } from "./calcas/calcas.component";
import { SaiasComponent } from "./saias/saias.component";

const routes: Routes = [
  {
    path: "",
    component: InventarioComponent,
    children: [
      {
        path: "vestidos",
        component: VestidosComponent
      },
      {
        path: "blusas",
        component: BlusasComponent
      },
      {
        path: "calcas",
        component: CalcasComponent
      },
      {
        path: "saias",
        component: SaiasComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioRoutingModule {}
