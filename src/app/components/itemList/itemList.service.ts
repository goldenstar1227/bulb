import {
	Injectable,
	ComponentFactoryResolver,
	ApplicationRef,
	Injector,
	EmbeddedViewRef,
	ComponentRef, ElementRef, ViewContainerRef, Type,
} from '@angular/core'
import { ItemListComponent } from './itemList.component';

@Injectable({
	providedIn: ItemListComponent,
})
export class ItemListService {
	itemListComponentRef: ComponentRef<ItemListComponent>
	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private appRef: ApplicationRef,
		private injector: Injector
	) {}
	
	appendListToBody(viewContainerRef: ViewContainerRef, items: Array<any>, childComponentType: Type<any>) {
		const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ItemListComponent);
		const componentRef = componentFactory.create(this.injector);
		console.log('comp', componentRef)
		
		viewContainerRef.insert(componentRef.hostView)
		componentRef.instance.items = items;
		componentRef.instance.childComponentType = childComponentType;
		// this.appRef.attachView(componentRef.hostView);
		//
		// const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
		// document.body.appendChild(domElem);
		
		// this.items = items;
		// this.itemListComponentRef = componentRef;
	}
	
	removeList() {
		this.appRef.detachView(this.itemListComponentRef.hostView);
		this.itemListComponentRef.destroy();
	}
	
	test(issues: any) {
		console.log('issues', issues)
	}
}