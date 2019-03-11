import {
  AfterContentInit,
  AfterViewInit,
  Compiler,
  Component, ComponentFactory, ComponentRef, ElementRef,
  Injector, ModuleWithComponentFactories,
  NgModule,
  NgModuleRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponentComponent } from '../dynamic-component/dynamic-component.component';
import { DynamicDatetimeComponent } from '../dynamic-datetime/dynamic-datetime.component';
import { DynamicQuoteComponent } from '../dynamic-quote/dynamic-quote.component';

@Component({
  selector: 'app-dynamic-component-html',
  template: `
    <ng-container #container></ng-container>`,
  // templateUrl: './dynamic-component-html.component.html',
  styleUrls: ['./dynamic-component-html.component.scss']
})
export class DynamicComponentHtmlComponent implements OnInit, OnDestroy, AfterViewInit, AfterContentInit {
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
  // @ViewChild('container') private container: ElementRef;
  templates = [
    `<app-dynamic-component label="testlabel">Hello!</app-dynamic-component>
      <div>\nHello, {{name}} {{10 | currency}}\n</div><app-dynamic-datetime></app-dynamic-datetime>
      <app-dynamic-quote></app-dynamic-quote>`,
    `<app-dynamic-quote></app-dynamic-quote>`,
    `<app-dynamic-datetime></app-dynamic-datetime>`,
    `<app-dynamic-component label="testlabel">Hello!</app-dynamic-component><div>\nHello, {{name}} {{10 | currency}}\n</div>`,
  ];
  template = this.templates[0];
  interval: any;

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  // @ViewChild('vc') private content: ElementRef;

  public rawHTML: string;
  private componentRef: ComponentRef<{}>;

  constructor(private el: ElementRef,
              private compiler: Compiler,
              private injector: Injector,
              private moduleRef: NgModuleRef<any>) {
  }

//               private backendService: backendService

  ngAfterViewInit() {
    // Here, get your HTML from backend.
    // this.backendService.getHTMLFromServer()
    //   .subscribe(rawHTML => this.createComponentFromRaw(rawHTML));
    // this.rawHTML = '<h2><some-component [data]="data"></some-component>';
//    this.rawHTML = '<h2><some-component></some-component>';
//    this.rawHTML = '<my-dynamic-component></my-dynamic-component>';
    // this.createComponentFromRaw(this.rawHTML);
    // console.log(this.container.nativeElement);
    // console.log(this.componentRef);
  }

  ngAfterContentInit() {
    // console.log('el', this.el.nativeElement.innerHTML);
    // console.log('ngAfterContentInit', this.container.element);
//    console.log(this.container.nativeElement.replace(/\s{2,}/g, ' ').trim());
  }

  ngOnInit() {
    this.compileTemplate();

    let cnt = 1;
    const len = this.templates.length;

    // console.log('el', this.el.nativeElement.innerHTML);
    this.interval = setInterval(() => {
      console.log('interval');
      this.template = this.templates[cnt];
      console.log(cnt);
      this.compileTemplate();
      cnt = cnt < len - 1 ? cnt = cnt + 1 : cnt = 0;
    }, 3000);
  }

  compileTemplate() {
    this.compiler.clearCache();
    const metadata = {
      selector: `runtime-component-sample`,
      template: this.template
    };

    const factory = this.createComponentFactorySync(this.compiler, metadata, null);
    console.log('factory', factory);
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
    this.componentRef = this.container.createComponent(factory);
  }

  private createComponentFactorySync(compiler: Compiler, metadata: Component, componentClass: any): ComponentFactory<any> {

    const cmpClass = componentClass || class RuntimeComponent {
      name = 'Denys';
    };
    const decoratedCmp = Component(metadata)(cmpClass);

    @NgModule({
      imports: [CommonModule],
      declarations: [decoratedCmp, DynamicComponentComponent, DynamicDatetimeComponent, DynamicQuoteComponent],
      entryComponents: [DynamicComponentComponent, DynamicDatetimeComponent, DynamicQuoteComponent]
    })
    class RuntimeComponentModule {
    }

    const module: ModuleWithComponentFactories<any> = compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);
    // console.log('module', module);
    // console.log('decoratedCmp', decoratedCmp);

    return module.componentFactories.find(f => f.componentType === decoratedCmp);
  }

  // private createComponentFromRaw(template: string) {
  //   console.log(template);
  //   // Let's say your template looks like `<h2><some-component [data]="data"></some-component>`
  //   // As you see, it has an (existing) angular component `some-component` and it injects it [data]
  //
  //   // Now we create a new component. It has that template, and we can even give it data.
  //   const styles = [];
  //   const tmpCmp = Component({template, styles})(class {
  //     // the class is anonymous. But it's a quite regular angular class. You could add @Inputs,
  //     // @Outputs, inject stuff etc.
  //     data: { some: 'data' };
  //
  //     ngOnInit() { /* do stuff here in the dynamic component */
  //     }
  //   });
  //
  //   console.log(tmpCmp);
  //   // Now, also create a dynamic module.
  //   const tmpModule = NgModule({
  //     imports: [RouterModule],
  //     declarations: [tmpCmp],
  //     // providers: [] - e.g. if your dynamic component needs any service, provide it here.
  //   })(class {
  //   });
  //
  //   console.log(tmpModule);
  //
  //   // Now compile this module and component, and inject it into that #vc in your current component template.
  //   this.compiler.compileModuleAndAllComponentsAsync(tmpModule)
  //     .then((factories) => {
  //       const f = factories.componentFactories[0];
  //       this.cmpRef = f.create(this.injector, [], null, this.moduleRef);
  //       this.cmpRef.instance.name = 'my-dynamic-component';
  //       this.vc.insert(this.cmpRef.hostView);
  //     });
  // }
  //
  // // Cleanup properly. You can add more cleanup-related stuff here.
  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
    clearInterval(this.interval);
  }

}
