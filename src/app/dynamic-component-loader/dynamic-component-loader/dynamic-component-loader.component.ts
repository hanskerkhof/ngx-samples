import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { DynamicComponentComponent } from '../dynamic-component/dynamic-component.component';
import { DynHostDirective } from '../dyn-host.directive';

@Component({
  selector: 'app-dynamic-component-loader',
  templateUrl: './dynamic-component-loader.component.html',
//  template: '{{tmplUrl}}',
  styleUrls: ['./dynamic-component-loader.component.scss']
})
export class DynamicComponentLoaderComponent implements OnInit {
  @ViewChild(DynHostDirective) dynHost: DynHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    // const scope = {
    //   name: 'dyn-component',
    //   component: DynamicComponentComponent,
    //   data: {
    //     title: 'Hello there'
    //   }
    // };
    //
    // this.loadComponent(scope);
  }

  // loadComponent(scope) {
  //   console.log('scope', scope);
  //   console.log('DynHostDirective', DynHostDirective);
  //   const componentFactory = this.componentFactoryResolver.resolveComponentFactory(scope.component);
  //   if (this.dynHost.viewContainerRef) {
  //     const viewContainerRef = this.dynHost.viewContainerRef;
  //     viewContainerRef.clear();
  //
  //     const componentRef = viewContainerRef.createComponent(componentFactory);
  //     (<DynHostDirective>componentRef.instance).data = scope.data;
  //   }
  // }

}
