import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PipesModule } from './_pipes/pipes.module';
import { ClarityModule } from '@clr/angular';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

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
import { RouteDataDetailComponent } from './route/route-data/route-data-detail/route-data-detail.component';
import { environment } from '../environments/environment';

import { DataService } from './_services/data.service';
import { DataResolverService } from './_resolvers/data-resolver.service';
import { DataItemResolverService } from './_resolvers/data-item-resolver.service';

import { InMemoryDataService } from './_db/db';

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
    RouteDataComponent,
    RouteDataDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PipesModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 100, dataEncapsulation: false}
    )
    // environment.production ?
    //   HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 100}) : []
  ],
  providers: [
    DataService,
    DataResolverService,
    DataItemResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
