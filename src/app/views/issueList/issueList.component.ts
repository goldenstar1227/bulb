import { Component, ComponentFactoryResolver, ElementRef, Inject, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IssueModel } from '../../models/issue.model';
import { ItemListService } from '../../components/itemList/itemList.service';
import { IssueItemComponent } from '../../components/issue/issue.component';

@Component({
	selector: 'issue-list',
	templateUrl: './issueList.component.html',
	styleUrls: ['./issueList.component.scss']
})
export class IssueListComponent implements OnInit {
	@ViewChild('listContainer', { read: ViewContainerRef }) listContainer: ViewContainerRef;
	constructor(
		private listService: ItemListService,
		private api: ApiService,
	) {
	}
	
	ngOnInit() {
		this.api.getIssueList().subscribe(
			(response: Array<IssueModel>) => {
				this.addComponent(response);
			},
			(error: any) => {
			
				console.log('error', error);
			}
		)
	}

	addComponent(issues: Array<IssueModel>): void {
		this.listService.appendListToBody(this.listContainer, issues, IssueItemComponent)
	}

	showIssues(issues: Array<IssueModel>): void {
	
	}
}