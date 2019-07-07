import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueDetailsComponet } from './issueDetials.component';
import { RouterModule } from '@angular/router';


@NgModule({
	imports: [CommonModule, RouterModule],
	declarations: [IssueDetailsComponet],
	exports: [IssueDetailsComponet],
})
export class IssueDetailsModule {
}
