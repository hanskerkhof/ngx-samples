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

export const routes: Routes = [
  {
    path: 'ng-content',
    component: NgContentComponent,
    data: {
      name: 'ng-content'
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
          name: 'Data',
          example: {foo: 'bar'}
        }
      },
      {
        path: 'parameters',
        component: RouteParametersComponent,
        data: {
          name: 'Parameters'
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
