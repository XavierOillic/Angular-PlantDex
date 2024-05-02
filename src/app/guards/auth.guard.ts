import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Route,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { RoleService } from '../services/role.service';

Injectable({
  providedIn: 'root',
});

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  const router: Router = inject(Router);
  const roleServ: RoleService = inject(RoleService);
  // hardcoded user data.

  const loggedInAdmin = {
    id: '1zx-casd123-asdzxc132',
    name: 'Xavier Oillic',
    role: 'admin',
  };

  const roleChoisi = roleServ.getRoleFromLs();

  if (route.data['role'].includes(loggedInAdmin.role)) {
    return true;
  }
  console.log('YOU SHALL NOT PASS !');
  router.navigate(['/forbidden']);
  return false;
};
