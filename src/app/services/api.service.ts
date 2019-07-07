import { Injectable } from '@angular/core';
import { BulbHttpClient } from './bulbHttpClient';


@Injectable()
export class ApiService {

	constructor(
		private http: BulbHttpClient
	) {}
	
	getIssueList = function () {
		return this.http.get('https://api.github.com/repos/bulbtech/job-application-task-1/issues');
	}
}


