import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { InventarioComponent } from "./inventario.component";
import { VestidosComponent } from "./vestidos/vestidos.component";
import { BlusasComponent } from "./blusas/blusas.component";
import { CalcasComponent } from "./calcas/calcas.component";
import { SaiasComponent } from "./saias/saias.component";
import { AuthGuard } from "../../shared/guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: InventarioComponent,
    children: [
      {
        path: "vestidos",
        canActivate: [AuthGuard],
        component: VestidosComponent
      },
      {
        path: "blusas",
        canActivate: [AuthGuard],
        component: BlusasComponent
      },
      {
        path: "calcas",
        canActivate: [AuthGuard],
        component: CalcasComponent
      },
      {
        path: "saias",
        canActivate: [AuthGuard],
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
