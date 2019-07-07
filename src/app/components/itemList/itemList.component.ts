import {
	ChangeDetectorRef,
	Component, ComponentFactoryResolver, ComponentRef, Inject, Input, OnInit, ViewChild,
	ViewContainerRef
} from '@angular/core';
import { Type, OnDestroy, AfterViewInit, } from '@angular/core'
import { ApiService } from '../../services/api.service';
import { IssueModel } from '../../models/issue.model';
import { IssueItemComponent } from '../issue/issue.component';
import { ListInsertionDirective } from './listInsertion.directive';
import { ItemListService } from './itemList.service';

@Component({
	selector: 'item-list',
	templateUrl: './itemList.component.html',
	styleUrls: ['./itemList.component.scss']
})
export class ItemListComponent implements OnInit, OnDestroy, AfterViewInit{
	
	@Input() items: Array<any>;
	componentRef: Array<ComponentRef<any>> = [];
	@Input() childComponentType: Type<any>
	
	@ViewChild(ListInsertionDirective)
	insertionPoint: ListInsertionDirective
	
	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
	    private api: ApiService,
		private cd: ChangeDetectorRef,
	) {}
	
	ngOnInit() {
	
	}
	
	ngOnDestroy() {
		if (this.componentRef.length) {
			this.componentRef.forEach((compRef, index) => {
				compRef.destroy();
			})
		}
	}
	
	ngAfterViewInit() {
		this.loadChildComponent(this.childComponentType);
		console.log('items', this.items)
		this.cd.detectChanges();
		
	}
	
	loadChildComponent(componentType: Type<any>) {
		let _this = this;
		let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
		let viewContainerRef = this.insertionPoint.viewContainerRef;
		viewContainerRef.clear();
		this.items.forEach((item, index) => {
			_this.componentRef.push(viewContainerRef.createComponent(componentFactory));
			_this.componentRef[index].instance.issueIndex = index;
			_this.componentRef[index].instance.item = item;
		})
		
		console.log('cr', this.componentRef)
		
		
		
		
		
		
		
	}

}