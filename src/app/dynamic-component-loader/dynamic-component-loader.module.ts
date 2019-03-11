import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponentLoaderRoutingModule } from './dynamic-component-loader-routing.module';
import { DynamicComponentLoaderComponent } from './dynamic-component-loader/dynamic-component-loader.component';
import { DynHostDirective } from './dyn-host.directive';
import { DynamicComponentHtmlComponent } from './dynamic-component-html/dynamic-component-html.component';

@NgModule({
  declarations: [
    DynamicComponentLoaderComponent,
    DynHostDirective,
    DynamicComponentHtmlComponent
  ],
  imports: [
    CommonModule,
    DynamicComponentLoaderRoutingModule
  ],
  entryComponents: []
})
export class DynamicComponentLoaderModule { }
