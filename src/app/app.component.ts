import { Component, OnDestroy, OnInit } from '@angular/core';
import { routes } from './app-routing.module';
import { DataService } from './_services/data.service';
import { animate, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { bounce, zoomIn, zoomOut, pulse, fadeOutRight, flipOutX, zoomOutRight } from 'ng-animate';

// export const pulse = animation(
//   animate(
//     '{{ timing }}s {{ delay }}s',
//     keyframes([
//       style({ transform: 'scale3d(1, 1, 1)' }),
//       style({ transform: 'scale3d({{ scale }}, {{ scale }}, {{ scale }})' }),
//       style({ transform: 'scale3d(1, 1, 1)' }),
//     ])
//   ),
//   { params: { scale: 1.25, timing: DEFAULT_TIMING, delay: 0 } }
// );

@Component({
  selector: 'app-root',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity: 0}),
        animate(500, style({opacity: 1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({opacity: 0}))
      ])
    ]),
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ]),
    trigger('bounceInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ]),
    trigger('bounce', [
      transition('void => *', useAnimation(bounce)),
      transition('* => void', useAnimation(bounce))
    ]),
    trigger('zoomInOut', [
      transition('void => *', useAnimation(zoomIn, {
        // Set the duration to 5seconds and delay to 2seconds
        params: {timing: 0.2, delay: 0}
      })),
      transition('* => void', useAnimation(zoomOut))
    ]),
    trigger('pulseInOut', [
      transition('void => *', useAnimation(pulse, {
        params: {timing: 0.3, delay: 0}
      })),
      transition('* => void', useAnimation(flipOutX, {
        params: {timing: 0.3, delay: 0}
      })),
    ])

  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private eventSubscription;
  public myRoutes;
  public badges = {data: {list: {amount: null}}};
  public bounce: any;

  public trigger;

  constructor(private dataService: DataService) {
  }

  onAnimationStart(event) {
    // console.log(event);
  }

  onAnimationDone(event) {
    // console.log(event);
  }

  ngOnInit() {
    this.myRoutes = routes;

    this.eventSubscription = this.dataService.getEmitter()
      .subscribe(message => {
        if (message.type === 'data:list') {
          this.badges.data.list.amount = message.payload.amount;
          // Trigger the animation
          this.trigger = false;
          this.trigger = true;
        }
      });
  }

  ngOnDestroy() {
    this.eventSubscription.unsubscribe();
  }
}
