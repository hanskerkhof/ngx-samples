// https://netbasal.com/inspiration-for-custom-decorators-in-angular-95aeb87f072c
import { environment } from '../../environments/environment';

export function NgLog(): ClassDecorator {
  return function (constructor: any) {
    if (!environment.production) {
      // You can add/remove events for your needs
      const LIFECYCLE_HOOKS = [
        'ngOnChanges',
        'ngOnInit',
        'ngDoCheck',
        'ngAfterContentInit',
        'ngAfterContentChecked',
        'ngAfterViewInit',
        'ngAfterViewChecked',
        'ngOnDestroy'
      ];
      const component = constructor.name;

      LIFECYCLE_HOOKS.forEach(hook => {
        const original = constructor.prototype[hook];
        constructor.prototype[hook] = function (...args) {
          console.log(`%c ${component} - ${hook}`, `color: #4CAF50; font-weight: bold`, ...args);
          original && original.apply(this, args);
        };
      });
    }

  };
}
