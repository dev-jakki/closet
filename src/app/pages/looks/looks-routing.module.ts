import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LooksComponent } from "./looks.component";
import { CasualComponent } from "./casual/casual.component";
import { FormalComponent } from "./formal/formal.component";
import { PraiaComponent } from "./praia/praia.component";
import { FestaComponent } from "./festa/festa.component";

const routes: Routes = [
  {
    path: "",
    component: LooksComponent,
    children: [
      {
        path: "casual",
        component: CasualComponent
      },
      {
        path: "formal",
        component: FormalComponent
      },
      {
        path: "praia",
        component: PraiaComponent
      },
      {
        path: "festa",
        component: FestaComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LooksRoutingModule {}
