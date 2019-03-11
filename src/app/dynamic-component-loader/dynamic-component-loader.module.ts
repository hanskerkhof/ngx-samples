import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponentLoaderRoutingModule } from './dynamic-component-loader-routing.module';
import { DynamicComponentLoaderComponent } from './dynamic-component-loader/dynamic-component-loader.component';
import { DynHostDirective } from './dyn-host.directive';
import { DynamicComponentHtmlComponent } from './dynamic-component-html/dynamic-component-html.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { DynamicDatetimeComponent } from './dynamic-datetime/dynamic-datetime.component';
import { DynamicQuoteComponent } from './dynamic-quote/dynamic-quote.component';

@NgModule({
  declarations: [
    DynamicComponentLoaderComponent,
    DynHostDirective,
    DynamicComponentComponent,
    DynamicComponentHtmlComponent,
    DynamicDatetimeComponent,
    DynamicQuoteComponent
  ],
  imports: [
    CommonModule,
    DynamicComponentLoaderRoutingModule
  ],
  entryComponents: [DynamicComponentComponent, DynamicDatetimeComponent, DynamicQuoteComponent]
})
export class DynamicComponentLoaderModule { }
