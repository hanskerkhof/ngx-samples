import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynHost]'
})
export class DynHostDirective {
  public data: any;

  constructor(public viewContainerRef: ViewContainerRef) { }

}
