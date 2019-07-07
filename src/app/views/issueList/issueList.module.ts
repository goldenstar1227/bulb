import { NgModule } from '@angular/core';
import { IssueListComponent } from './issueList.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
	imports: [CommonModule, RouterModule],
	declarations: [IssueListComponent],
	exports: [IssueListComponent],
})
export class IssueListModule {
}
