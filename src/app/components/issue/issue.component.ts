import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IssueModel } from '../../models/issue.model';

@Component({
	selector: 'issue',
	templateUrl: './issue.component.html',
	styleUrls: ['./issue.component.scss']
})
export class IssueItemComponent implements OnInit, AfterViewInit, OnDestroy{
	@Input() issueIndex: number;
	@Input() item: IssueModel;
	
	constructor() {}
	
	ngOnInit() {
		console.log('init item', this.item)
	}
	
	ngOnDestroy() {}
	
	ngAfterViewInit() {
	}
}