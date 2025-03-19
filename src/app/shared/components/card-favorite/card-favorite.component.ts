import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-favorite',
  standalone: false,
  templateUrl: './card-favorite.component.html',
  styleUrl: './card-favorite.component.scss',
})
export class CardFavoriteComponent {
  @Input() public image = '';
}
