Decorator

- https://netbasal.com/inspiration-for-custom-decorators-in-angular-95aeb87f072c

WOW!
https://github.com/angular/angular/issues/21049

THIS works!

##### For JIT Compiling

Add { preserveWhitespaces: false } as an option to the bootstrapModule() method in main.ts:

    platformBrowserDynamic().bootstrapModule(AppModule, { preserveWhitespaces: true });

##### For AOT Compiling
Add "angularCompilerOptions": { "preserveWhitespaces": true } to tsconfig.app.json:

    {
      "extends": "../tsconfig.json",
      "compilerOptions": {
        "outDir": "../out-tsc/app",
        "module": "es2015",
        "types": []
      },
      "exclude": [
        "src/test.ts",
        "**/*.spec.ts"
      ],
      "angularCompilerOptions": {
        "preserveWhitespaces": false
      }
    }

# NgContentSamples

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
