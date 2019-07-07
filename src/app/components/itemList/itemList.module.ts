import { NgModule } from '@angular/core';
import { ItemListComponent } from './itemList.component';
import { ListInsertionDirective } from './listInsertion.directive';
import { CommonModule } from '@angular/common';
import { IssueItemComponent } from '../issue/issue.component';

@NgModule({
	imports: [CommonModule ],
	declarations: [ItemListComponent, ListInsertionDirective, IssueItemComponent],
	entryComponents: [ItemListComponent, IssueItemComponent]
})
export class ItemListModule {
}
