import { AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { HookLog } from '../hooklog.decorator';
import { NgLog } from '../nglog.decorator';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss']
})

// @HookLog({hooks: ['ngOnInit', 'ngOnDestroy']})
// @HookLog({hooks: ['ngOnDestroy']})
@HookLog()
// @NgLog()
export class LifecycleHooksComponent implements OnInit, OnDestroy, AfterContentInit, AfterViewInit {
  public interval = 0;
  public intervalRef: any;

  constructor() {
  }

  ngOnInit() {
    this.intervalRef = setInterval(() => {
      this.interval++;
      // console.log('interval', this.interval);
    }, 3000);
  }

  ngAfterContentInit() {
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    // console.log('clear intervalRef');
    clearInterval(this.intervalRef);
    console.log('------------------');
  }
}
