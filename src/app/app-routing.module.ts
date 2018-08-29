import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomDecoratorsComponent } from './custom-decorators/custom-decorators.component';
import { ThrottleComponent } from './custom-decorators/throttle/throttle.component';
import { DebounceComponent } from './custom-decorators/debounce/debounce.component';
import { LifecycleHooksComponent } from './custom-decorators/lifecycle-hooks/lifecycle-hooks.component';

import { BehaviourSubjectComponent } from './behaviour-subject/behaviour-subject.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { RouteComponent } from './route/route.component';
import { RouteParametersComponent } from './route/route-parameters/route-parameters.component';
import { RouteDataComponent } from './route/route-data/route-data.component';
import { RouteDataDetailComponent } from './route/route-data/route-data-detail/route-data-detail.component';

import { DataResolverService } from './_resolvers/data-resolver.service';
import { DataItemResolverService } from './_resolvers/data-item-resolver.service';
import { RouteOutletsComponent } from './route/route-outlets/route-outlets.component';
import { RouteOutletsDetailComponent } from './route/route-outlets/route-outlets-detail/route-outlets-detail.component';
import { RouteOutletsHeaderComponent } from './route/route-outlets/route-outlets-header/route-outlets-header.component';
import { HomeComponent } from './home/home.component';
import { NgxsComponent } from './ngxs/ngxs.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'ng-content',
    component: NgContentComponent,
    data: {
      name: 'ng-content'
    }
  },
  {
    path: 'ngxs',
    component: NgxsComponent,
    data: {
      name: 'ngxs'
    }
  },
  {
    path: 'custom-decorators',
    component: CustomDecoratorsComponent,
    data: {
      name: 'Custom decorators'
    },
    children: [
      {
        path: 'lifecycle-hooks',
        component: LifecycleHooksComponent,
        data: {
          name: 'Lifecycle hooks'
        }
      },
      {
        path: 'debounce',
        component: DebounceComponent,
        data: {
          name: 'Debounce'
        }
      },
      {
        path: 'throttle',
        component: ThrottleComponent,
        data: {
          name: 'Throttle'
        }
      }
    ]
  },
  {
    path: 'behaviour-subject',
    component: BehaviourSubjectComponent,
    data: {
      name: 'BehaviourSubject'
    }
  },
  {
    path: 'route',
    component: RouteComponent,
    data: {
      name: 'Route'
    },
    children: [
      {
        path: 'data',
        component: RouteDataComponent,
        data: {
          name: 'Resolve data',
          dataStatic: {foo: 'bar'}
        },
        resolve: {
          dataList: DataResolverService
        },
        children: [
          {
            path: ':id',
            component: RouteDataDetailComponent,
            resolve: {
              dataList: DataResolverService,
              dataItem: DataItemResolverService
            }
          }
        ]
      },
      {
        path: 'outlets',
        component: RouteOutletsComponent,
        data: {
          name: 'Router outlets'
        },
        resolve: {
          dataList: DataResolverService
        },
        children: [
          {
            path: ':id/:tab',
            component: RouteOutletsDetailComponent,
            outlet: 'popup',
            resolve: {
              dataItem: DataItemResolverService
            }
          },
          {
            path: ':id',
            component: RouteOutletsHeaderComponent,
            outlet: 'header',
            resolve: {
              dataItem: DataItemResolverService
            }
          }
        ]
      },
      {
        path: 'parameters',
        component: RouteParametersComponent,
        data: {
          name: 'Query & fragment'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
