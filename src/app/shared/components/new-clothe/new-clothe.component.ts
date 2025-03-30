import { Component } from '@angular/core';
import { NewClotheService } from '../../../core/services/new-clothe.service';

@Component({
  selector: 'app-new-clothe',
  standalone: false,
  templateUrl: './new-clothe.component.html',
  styleUrl: './new-clothe.component.scss',
})
export class NewClotheComponent {
  
  constructor(public newClotheService: NewClotheService) {}
  
  public onAddClothe() {
    console.log('New clothe added!');
  }
}
