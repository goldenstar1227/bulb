import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators';

@Injectable()
export class BulbHttpInterceptor implements HttpInterceptor {
	
	constructor(private storage: StorageService) {
	}
	
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		
		return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
			if (event instanceof HttpResponse) {
				// do stuff with response if you want
				// console.log('interceptor event', event)
			}
		}, (err: any) => {
			if (err instanceof HttpErrorResponse) {
				if (err.status === 401) {
					// Unauthorized, clear authentication data and re-login:
					console.error('Authentication not valid, redirecting to login.');
					localStorage.removeItem('bulb.accessToken');
					window.location.replace('/#');
				}
			}
		}));
	}
}

