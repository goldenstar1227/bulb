import {Injectable} from '@angular/core';
import { ActivatedRoute, CanActivate, CanActivateChild, Router } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
	
	constructor(
		private storage: StorageService,
		private router: Router,
		private route: ActivatedRoute,
	) {
	}
	
	canActivate(): any {
		if (this.storage.accessToken && this.storage.accessToken.length > 0) {
		
		}
		else {
			// this.toastr.error('Odjavljeni ste sa sustava');
			this.router.navigate(['/'], {relativeTo: this.route});
		}
		
		return (this.storage.accessToken && this.storage.accessToken.length > 0);
	}
	
	canActivateChild(): any {
		if (this.storage.accessToken && this.storage.accessToken.length > 0) {
		
		}
		else {
			// this.toastr.error('Odjavljeni ste sa sustava')
			this.router.navigate(['/'], {relativeTo: this.route});
		}
		
		return (this.storage.accessToken && this.storage.accessToken.length > 0);
	}
}
