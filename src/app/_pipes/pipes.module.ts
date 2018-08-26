import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from './safe-html.pipe';
import { ObjectToArrayPipe } from './object-to-array.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SafeHtmlPipe,
    ObjectToArrayPipe
  ],
  exports: [
    SafeHtmlPipe,
    ObjectToArrayPipe
  ]
})
export class PipesModule {
}
