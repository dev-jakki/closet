import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LooksRoutingModule } from './looks-routing.module';
import { LooksComponent } from './looks.component';
import { CasualComponent } from './casual/casual.component';
import { FormalComponent } from './formal/formal.component';
import { PraiaComponent } from './praia/praia.component';
import { FestaComponent } from './festa/festa.component';

@NgModule({
  declarations: [
    LooksComponent,
    CasualComponent,
    FormalComponent,
    PraiaComponent,
    FestaComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, LooksRoutingModule],
})
export class LooksModule {}
