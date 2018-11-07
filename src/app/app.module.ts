import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PipesModule } from './_pipes/pipes.module';
import { ClarityModule } from '@clr/angular';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AgmCoreModule } from '@agm/core';
import { MomentModule } from 'angular2-moment';

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
import { RouteOutletsComponent } from './route/route-outlets/route-outlets.component';

import { environment } from '../environments/environment';

import { DataService } from './_services/data.service';
import { DataResolverService } from './_resolvers/data-resolver.service';
import { DataItemResolverService } from './_resolvers/data-item-resolver.service';

import { InMemoryDataService } from './_db/db';
import { RouteOutletsDetailComponent } from './route/route-outlets/route-outlets-detail/route-outlets-detail.component';
import { RouteOutletsHeaderComponent } from './route/route-outlets/route-outlets-header/route-outlets-header.component';
import { HomeComponent } from './home/home.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { CreateComponent } from './ngxs/create/create.component';
import { IndexComponent } from './ngxs/index/index.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserState } from './ngxs/_states/user.state';
import { NgxsComponent } from './ngxs/ngxs.component';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { PizzaState } from './ngxs/_states/pizza.state';
import { AppLoadService } from './_services/app-load.service';

export function initApp(appLoadService: AppLoadService) {
  return () => appLoadService.initializeApp('from app.module');  // + any other services...
}

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
    RouteDataDetailComponent,
    RouteOutletsComponent,
    RouteOutletsDetailComponent,
    RouteOutletsHeaderComponent,
    HomeComponent,
    CreateComponent,
    IndexComponent,
    NgxsComponent
  ],
  imports: [
    NgxsModule.forRoot([UserState, PizzaState]),
    NgxsFormPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MomentModule,
    PipesModule,
    ClarityModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCGRsN99RrntLjt2OJJxc87SLk1Iv1GTJY',
      libraries: ['places']
    }),
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
    DataItemResolverService,
    {
      provide: APP_INITIALIZER,
      useFactory: (appLoadService: AppLoadService) => () => appLoadService.initializeApp('from service'),
      deps: [AppLoadService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [AppLoadService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
