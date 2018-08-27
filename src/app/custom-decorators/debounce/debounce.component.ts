import { Component, OnInit, Input, HostListener, OnDestroy } from '@angular/core';
import { Debounce } from '../debounce.decorator';
// https://netbasal.com/inspiration-for-custom-decorators-in-angular-95aeb87f072c
// https://github.com/NetanelBasal/helpful-decorators/blob/master/__tests__/decorators.spec.ts
// https://github.com/NetanelBasal/helpful-decorators/blob/master/src/timeout.ts
@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss']
})

export class DebounceComponent implements OnInit, OnDestroy {
  public mouseCoords: any;
  public timeoutRef: any;
  public displayTip: boolean;

  constructor() {
  }

  @HostListener('document:mousemove', ['$event'])
  @Debounce(500)
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
