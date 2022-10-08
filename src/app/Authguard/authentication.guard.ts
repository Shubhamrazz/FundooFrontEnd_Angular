import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthguardService } from '../services/authguard/authguard.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authguard: AuthguardService, private router: Router){}
  canActivate(): boolean {
    if (!this.authguard.gettoken()) {
      this.router.navigateByUrl("/login");
    }
    return this.authguard.gettoken();
  }

}
