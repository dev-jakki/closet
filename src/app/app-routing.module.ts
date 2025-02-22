import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    runGuardsAndResolvers: 'always',
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "inventario",
    loadChildren: () =>
      import("./pages/inventario/inventario.module").then(
        (m) => m.InventarioModule
      ),
  },
  {
    path: "looks",
    loadChildren: () =>
      import("./pages/looks/looks.module").then(
        (m) => m.LooksModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
