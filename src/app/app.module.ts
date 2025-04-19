import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { RegisterClotheComponent } from './shared/forms/register-clothe/register-clothe.component';
import { DrawerComponent } from './shared/components/drawer/drawer.component';
import { DrawerHeaderComponent } from './shared/components/drawer/components/drawer-header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    RegisterClotheComponent,
    DrawerComponent,
    DrawerHeaderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
