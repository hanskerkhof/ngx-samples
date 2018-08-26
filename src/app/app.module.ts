import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PipesModule } from './_pipes/pipes.module';
import { ClarityModule } from '@clr/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { EditableComponent } from './ng-content/editable/editable.component';
import { CustomDecoratorsComponent } from './custom-decorators/custom-decorators.component';
import { BehaviourSubjectComponent } from './behaviour-subject/behaviour-subject.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThrottleComponent } from './custom-decorators/throttle/throttle.component';
import { DebounceComponent } from './custom-decorators/debounce/debounce.component';
import { LifecycleHooksComponent } from './custom-decorators/lifecycle-hooks/lifecycle-hooks.component';
import { RouteComponent } from './route/route.component';
import { RouteParametersComponent } from './route/route-parameters/route-parameters.component';
import { RouteDataComponent } from './route/route-data/route-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewChildComponent,
    EditableComponent,
    CustomDecoratorsComponent,
    BehaviourSubjectComponent,
    NgContentComponent,
    ThrottleComponent,
    DebounceComponent,
    LifecycleHooksComponent,
    RouteComponent,
    RouteParametersComponent,
    RouteDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PipesModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
