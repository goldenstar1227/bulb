import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssueListComponent } from './views/issueList/issueList.component';
import { IssueDetailsComponet } from './views/issueDetails/issueDetials.component';

const routes: Routes = [
  { path: '', redirectTo:'issue-list', pathMatch: 'full'},
  { path: 'issue-list', component: IssueListComponent },
  { path: 'issue-details', component: IssueDetailsComponet },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
