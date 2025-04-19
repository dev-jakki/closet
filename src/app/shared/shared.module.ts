import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { NewClotheButtonComponent } from './atoms/new-clothe-button/new-clothe-button.component';

@NgModule({
  declarations: [CardComponent, NewClotheButtonComponent],
  exports: [CardComponent, NewClotheButtonComponent],
  imports: [CommonModule],
})
export class SharedModule {}
