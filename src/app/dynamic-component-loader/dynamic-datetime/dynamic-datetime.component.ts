import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription, timer } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-dynamic-datetime',
  templateUrl: './dynamic-datetime.component.html',
  styleUrls: ['./dynamic-datetime.component.scss']
})
export class DynamicDatetimeComponent implements OnInit, OnDestroy {
  public today: number = Date.now();
  public now: number = Date.now();
  private subscription: Subscription;
//  secondsCounter = interval(1000);
  secondsCounter = timer(0, 1000);
  constructor() {
  }

  ngOnInit() {
    this.subscription = this.secondsCounter.subscribe(n => {
      this.now = new Date();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
