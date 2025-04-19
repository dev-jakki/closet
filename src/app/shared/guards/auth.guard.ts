import { Injectable, OnDestroy } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Subscription } from 'rxjs';
import { SidebarService } from '../../core/services/sidebar/sidebar.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, OnDestroy {
  public _subscriptionMenus: Subscription | null = null;

  constructor(
    private sidebarService: SidebarService,
    private router: Router
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const currentUrl = state.url.split('?')[0];
    
    if (this.sidebarService.menus.length) {
      const hasAccess = this.sidebarService.hasAcesso(undefined, currentUrl);

      if (!hasAccess) {
        this.redirectToNotFound();
        return false;
      }
    }

    return true;
  }

  private redirectToNotFound() {
    this.router.navigate(['/nao-autorizado']);
  }

  public ngOnDestroy(): void {
    this._subscriptionMenus?.unsubscribe();
  }
}
