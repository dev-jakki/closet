import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LooksComponent } from './looks.component';
import { CasualComponent } from './casual/casual.component';
import { FormalComponent } from './formal/formal.component';
import { PraiaComponent } from './praia/praia.component';
import { FestaComponent } from './festa/festa.component';
import { AuthGuard } from '../../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LooksComponent,
    children: [
      {
        path: 'casual',
        canActivate: [AuthGuard],
        component: CasualComponent,
      },
      {
        path: 'formal',
        canActivate: [AuthGuard],
        component: FormalComponent,
      },
      {
        path: 'praia',
        canActivate: [AuthGuard],
        component: PraiaComponent,
      },
      {
        path: 'festa',
        canActivate: [AuthGuard],
        component: FestaComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LooksRoutingModule {}
