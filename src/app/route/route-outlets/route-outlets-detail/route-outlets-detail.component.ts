import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-route-outlets-detail',
  animations: [
    trigger('fadeDownUp', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateY(-20%)', opacity: 0}),
        animate('200ms ease-out')
      ]),
      transition('* => void', [
        animate('200ms ease-in',
          style({transform: 'translateY(-20%)', opacity: 0}))
      ])
    ]),
    trigger('fadeInOut', [
      state('in', style({opacity: 1})),
      transition('void => *', [
        style({opacity: 0}),
        animate('100ms')
      ]),
      transition('* => void', [
        animate('100ms',
          style({opacity: 0}))
      ])
    ])
  ],
  templateUrl: './route-outlets-detail.component.html',
  styleUrls: ['./route-outlets-detail.component.scss']
})
export class RouteOutletsDetailComponent implements OnInit {
  public activeTab: string;
  public id: string;
  public dataItem: any;
  public toggle = true;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.activeTab = params.tab;
      this.id = params.id;
      this.route.data.subscribe(data => {
        this.dataItem = data.dataItem;
        this.toggle = true;
      });
    });
  }

  onAnimationStart(event){
  }

  onAnimationDone(event){
    // console.log(event);
    if(event.phaseName === 'done' && event.toState === 'void'){
      this.router.navigate(
        [{outlets: {popup: null}}],
        {relativeTo: this.route.parent}
      ).then(() => {
      });
    }
  }

  close() {
    this.toggle = false;
  }
}
