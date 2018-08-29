import { AfterContentInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-route-parameters',
  templateUrl: './route-parameters.component.html',
  styleUrls: ['./route-parameters.component.scss']
})
export class RouteParametersComponent implements OnInit, OnDestroy {
  public params: object;
  public tab: string;
  public fragment: string;
  public routeData: any;
  public displayTip: boolean;
  public timeoutRef: any;

  @ViewChild('structure') public structure: ElementRef;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(p => {
      this.params = p;
      this.tab = p.tab;
    });

    this.route.data.subscribe(data => {
      this.routeData = data;
    });

    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
    });

    this.timeoutRef = setTimeout(() => {
      if (!this.params.hasOwnProperty('tab')) {
        this.displayTip = true;
      }
    }, 3000);
  }

  ngOnDestroy() {
    clearTimeout(this.timeoutRef);
  }

}
