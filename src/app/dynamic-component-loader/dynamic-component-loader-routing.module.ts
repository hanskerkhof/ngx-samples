import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicComponentLoaderComponent } from './dynamic-component-loader/dynamic-component-loader.component';
import { DynamicComponentHtmlComponent } from './dynamic-component-html/dynamic-component-html.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicComponentLoaderComponent
  },
  {
    path: 'html',
    component: DynamicComponentHtmlComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicComponentLoaderRoutingModule { }
