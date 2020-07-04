import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {CodeService} from '../code/code.service';

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private codeService: CodeService,
    ) {
    }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentCode = this.codeService.currentCodeValue;
        if (currentCode) {
            if (route.routeConfig.path === 'admin') {
                if (currentCode.isAdmin !== 1) {
                    await this.router.navigate(['/home']);
                    return false;
                }
            }
            return true;
        }
        // not logged in so redirect to login page with the return url
        await this.router.navigate(['/home']);
        return false;
    }
}
