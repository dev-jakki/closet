import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DrawerOpenParams } from '../../../shared/interfaces/drawer-open-params';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  private visibleSubject = new BehaviorSubject<boolean>(false);
  visible$ = this.visibleSubject.asObservable();

  private configSubject = new BehaviorSubject<DrawerOpenParams | null>(null);
  config$ = this.configSubject.asObservable();

  open(config: DrawerOpenParams) {
    this.configSubject.next(config);
    this.visibleSubject.next(true);
  }

  close() {
    this.visibleSubject.next(false);
    this.configSubject.next(null);
  }
}
