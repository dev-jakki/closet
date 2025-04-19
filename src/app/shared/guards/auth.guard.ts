import { Injectable, OnDestroy } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { SidebarService } from '../../core/services/sidebar/sidebar.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, OnDestroy {
  public _subscriptionMenus: Subscription = Subscription.EMPTY;

  constructor(
    private sidebarService: SidebarService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (route.url.length >= 0) {
      if (this.sidebarService.menus.length) {
        this.verifyHasAccessUser();
      }

      return true;
    }

    return false;
  }

  private verifyHasAccessUser() {
    setTimeout(() => {
      if (!this.sidebarService.hasAcesso()) {
        this.redirectToNotFound();
      }
    });
  }

  private redirectToNotFound() {
    this.router.navigate(['/nao-autorizado']);
  }

  public ngOnDestroy(): void {
    if (this._subscriptionMenus) {
      this._subscriptionMenus.unsubscribe();
    }
  }
}
