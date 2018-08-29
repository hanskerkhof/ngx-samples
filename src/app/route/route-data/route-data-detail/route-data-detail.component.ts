import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-route-data-detail',
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%) scale3d(.3, .3, .3)', opacity: 0}),
        animate('200ms ease-out')
      ]),
      transition('* => void', [
        animate('200ms ease-in',
          style({transform: 'translateX(100%) scale3d(.3, .3, .3)', opacity: 0}))
      ])
    ])
  ],
  templateUrl: './route-data-detail.component.html',
  styleUrls: ['./route-data-detail.component.scss']
})
export class RouteDataDetailComponent implements OnInit, OnDestroy {
  public routeData: any;
  public toggle = false;
  public firstRun = false;
  public currentIndex;
  public slideShow = false;
  public slideShowInterval: any;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.routeData = data;
      this.currentIndex = data.dataItem.id;
      if (!this.firstRun) {
        this.toggle = true;
        this.firstRun = true;
      } else {
        this.toggle = false;
      }
    }, error => {
    });
  }

  ngOnDestroy() {
    clearInterval(this.slideShowInterval);
  }

  public onAnimationDone(event) {
    if (event.toState === 'void') {
      setTimeout(() => {
        this.toggle = true;
      }, 100);
    }
    // LOOP :)
    // if(event.fromState === 'void'){
    //   setTimeout(() => {
    //     this.toggle = false;
    //   }, 2000);
    // }
  }

  public prev() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.routeData.dataList.length - 1;
    }
    this.router.navigate([this.currentIndex], {relativeTo: this.route.parent});
  }

  public next() {
    this.currentIndex++;
    if (this.currentIndex > this.routeData.dataList.length - 1) {
      this.currentIndex = 0;
    }
    this.router.navigate([this.currentIndex], {relativeTo: this.route.parent});
  }

  public toggleSlideShow() {
    this.slideShow = !this.slideShow;
    if (this.slideShow) {
      this.next();
      this.slideShowInterval = setInterval(() => {
        this.next();
      }, 4000);
    } else {
      clearInterval(this.slideShowInterval);
    }

  }
}
