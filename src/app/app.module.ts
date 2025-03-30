import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CardFavoriteComponent } from './shared/components/card-favorite/card-favorite.component';
import { NewClotheButtonComponent } from './shared/atoms/new-clothe-button/new-clothe-button.component';
import { RegisterClotheComponent } from './shared/forms/register-clothe/register-clothe.component';
import { DrawerComponent } from './shared/components/drawer/drawer.component';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { provideNzI18n } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    CardFavoriteComponent,
    NewClotheButtonComponent,
    RegisterClotheComponent,
    DrawerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzButtonModule,
    NzDrawerModule,
    FormsModule,
    ReactiveFormsModule,
    NzUploadModule,
    NzFormModule,
    NzSelectModule,
  ],
  providers: [
    provideNzI18n(pt_BR),
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
