import { User } from './user.model';
export interface IssueModel {
	url: string,
	repository_url: string,
	labels_url: string,
	comments_url: string,
	events_url: string,
	html_url: string,
	id: number,
	node_id: string,
	number: number,
	title: string,
	user: User,
	labels: Array<string>,
	state: string,
	locked: boolean,
	assignee?: User,
	assignees: Array<User>,
	milestone?: any,
	comments: number
	created_at: Date,
	updated_at?: Date,
	closed_at?: null,
	author_association: string,
	body: string,
}