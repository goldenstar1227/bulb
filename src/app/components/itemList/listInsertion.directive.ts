import { Directive, ViewContainerRef } from '@angular/core'

@Directive({
	selector: '[listInsertion]',
})
export class ListInsertionDirective {
	constructor(public viewContainerRef: ViewContainerRef) {}
}