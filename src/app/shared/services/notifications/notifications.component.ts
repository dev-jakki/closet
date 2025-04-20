import { Component, Input } from '@angular/core';

interface Notification {
  id: number;
  type: string;
  message: string;
}

@Component({
  selector: 'app-notifications',
  standalone: false,
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss',
})
export class CardComponent {
  @Input() public text: string = 'Sucesso!';
  public notifications: Notification[] = [
    {
      id: 1,
      type: 'success',
      message: 'Sucesso!',
    },
  ];

  public removeNotification(id: string) {}
}
