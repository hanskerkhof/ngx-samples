import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynHost]'
})
export class DynHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
