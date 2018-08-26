import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Throttle } from '../throttle.decorator';

@Component({
  selector: 'app-throttle',
  templateUrl: './throttle.component.html',
  styleUrls: ['./throttle.component.scss']
})
export class ThrottleComponent implements OnInit, OnDestroy {
  public mouseCoords: any;
  public timeoutRef: any;
  public displayTip: boolean;

  constructor() { }

  @HostListener('document:mousemove', ['$event'])
  @Throttle(300)
  onMouseMove(e) {
    this.mouseCoords = {x: e.layerX, y: e.layerY};
    this.displayTip = false;
  }

  ngOnInit() {
    this.timeoutRef = setTimeout(() => {
      if(!this.mouseCoords){
        this.displayTip = true;
      }
    }, 3000);
  }

  ngOnDestroy() {
    clearTimeout(this.timeoutRef);
  }

}
