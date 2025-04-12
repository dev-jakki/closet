import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CardFavoriteComponent } from './shared/components/card-favorite/card-favorite.component';
import { NewClotheButtonComponent } from './shared/atoms/new-clothe-button/new-clothe-button.component';
import { RegisterClotheComponent } from './shared/forms/register-clothe/register-clothe.component';
import { DrawerComponent } from './shared/components/drawer/drawer.component';
import { InfDrawerHeaderComponent } from './shared/components/drawer/components/inf-modal-header.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    CardFavoriteComponent,
    NewClotheButtonComponent,
    RegisterClotheComponent,
    DrawerComponent,
    InfDrawerHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
