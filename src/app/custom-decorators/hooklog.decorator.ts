import { environment } from '../../environments/environment';

export function HookLog(configuration?) {
  return function (target) {
    if (!environment.production) {

      const componentName = target.name;
      const defaultHooks: string[] = [
        'ngOnChanges',
        'ngOnInit',
        'ngDoCheck',
        'ngAfterContentInit',
        'ngAfterContentChecked',
        'ngAfterViewInit',
        'ngAfterViewChecked',
        'ngOnDestroy',
      ];

      const hooksToBeLogged = (configuration && configuration.hooks) || defaultHooks;

      hooksToBeLogged.forEach(hookToBeLogged => {
        const original = target.prototype[hookToBeLogged];
        target.prototype[hookToBeLogged] = function (...args) {
          console.log(`%c ${componentName} - ${hookToBeLogged}`, `color: orange; font-weight: bold`, ...args);
          if (original) {
            original.apply(this, args);
          }
          return 'test from HookLog decorator';
        };
      });
    }
  };
}
