import { Component, OnInit, Input, OnDestroy, HostListener, DoCheck } from '@angular/core';
// https://netbasal.com/inspiration-for-custom-decorators-in-angular-95aeb87f072c
// https://github.com/NetanelBasal/helpful-decorators/blob/master/__tests__/decorators.spec.ts
// https://github.com/NetanelBasal/helpful-decorators/blob/master/src/timeout.ts
@Component({
  selector: 'app-custom-decorators',
  templateUrl: './custom-decorators.component.html',
  styleUrls: ['./custom-decorators.component.scss']
})

// @NgLog()
// @HookLog({hooks: ['ngOnInit', 'ngOnDestroy']})
// @PageTrack('custom-decorators')

export class CustomDecoratorsComponent implements OnInit {

  constructor() {
  }

  // https://stackoverflow.com/questions/46389002/how-to-listen-for-mousemove-event-on-document-object-in-angular/46389054

  ngOnInit() {
  }

}
