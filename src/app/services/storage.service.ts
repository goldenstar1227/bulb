import {Injectable, Input} from '@angular/core';

@Injectable()
export class StorageService {

	private accessKey: string = 'bulb.accessToken';
	constrctor() {}
	
	// Access token
	get accessToken(): any {
		let returnValue: any = sessionStorage.getItem(this.accessKey);
		if (!returnValue) {
			returnValue = localStorage.getItem(this.accessKey);
		}
		if (returnValue && returnValue != 'null') {
			let token = JSON.parse(returnValue);
			let validTo = parseInt(token.validTo, 10);
			if (validTo < new Date().getTime()) {
				// Token past its validity, forget it:
				localStorage.removeItem(this.accessKey);
			}
			else {
				return token.accessToken;
			}
		}
		return null;
	}
	@Input() set accessToken(value: any) {
		let key = 'edu.schools.accessToken';
		localStorage.removeItem(this.accessKey);
		localStorage.setItem(this.accessKey, JSON.stringify({
			'accessToken': value ? value.Token : '',
			'validTo': value ? value.ValidTo : '',
		}));
	}
	
	public clear() {
		localStorage.clear();
	}
	
}
