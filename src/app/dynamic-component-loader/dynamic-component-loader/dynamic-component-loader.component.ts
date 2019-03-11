import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { DynHostDirective } from '../dyn-host.directive';
import { DynamicQuoteComponent } from '../dynamic-quote/dynamic-quote.component';

@Component({
  selector: 'app-dynamic-component-loader',
  templateUrl: './dynamic-component-loader.component.html',
  styleUrls: ['./dynamic-component-loader.component.scss']
})
export class DynamicComponentLoaderComponent implements OnInit {
  @ViewChild(DynHostDirective) dynHost: DynHostDirective;
  public scope: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.scope = {
      name: 'dyn-component',
      component: DynamicQuoteComponent,
      data: {
        title: 'Hello there'
      }
    };

    this.loadComponent(this.scope);
  }

  loadComponent(scope) {
    // console.log('DynHostDirective', DynHostDirective);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(scope.component);
    // if (this.dynHost.viewContainerRef) {
    const viewContainerRef = this.dynHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<DynHostDirective>componentRef.instance).data = scope.data;
    // }
  }

}
