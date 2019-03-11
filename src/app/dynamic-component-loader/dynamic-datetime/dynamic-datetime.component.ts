import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-dynamic-datetime',
  templateUrl: './dynamic-datetime.component.html',
  styleUrls: ['./dynamic-datetime.component.scss']
})
export class DynamicDatetimeComponent implements OnInit, OnDestroy {
  public now: Date;
  private subscription: Subscription;
//  secondsCounter = interval(1000);
  secondsCounter = timer(0, 1000);

  constructor() {
  }

  ngOnInit() {
    this.subscription = this.secondsCounter.subscribe(n => {
      this.now = new Date();
    });
    console.log('this.subscription', this.subscription);
  }

  ngOnDestroy(): void {
    console.log('this.subscription', this.subscription);
    this.subscription.unsubscribe();
  }
}
