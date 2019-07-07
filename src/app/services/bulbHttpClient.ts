import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';

@Injectable()
export class BulbHttpClient {
	
	private endPoint: string =''
	
	constructor(
		private http: HttpClient,
		private storage: StorageService) {
	}
	
	post(controller: string, action: string, params?: any) {
		const url: string = '';  // this.config.getConfig('apiEndpointUrl') + '/' + controller + '/' + action;
		const options = {};
		let headers: HttpHeaders = new HttpHeaders();
		
		options['headers'] =  headers.append('Authorization', 'token 5f7bc709871f3b144cd1894f3e147a279e852fe5');
		
		return this.http.post('', options);
	}
	
	// Get to real backend api:
	get(url: string, params?: any) {
		
		const options = {
			params: params,
		};
		return this.http.get(url, options);
	}
	
	
}
