import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../_services/data.service';
import { animate, query, stagger, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { bounce, flipOutX, pulse, zoomIn, zoomOut } from 'ng-animate';

@Component({
  selector: 'app-route-data',
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({opacity: 0, transform: 'translateY(-15px)'}),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({opacity: 1, transform: 'translateY(0px)'})
              )
            )
          ],
          {optional: true}
        ),
        query(':leave',
          stagger(
            '-50ms',
            animate('50ms', style({opacity: 0}))), {
            optional: true
          })
      ])
    ])
  ],
  templateUrl: './route-data.component.html',
  styleUrls: ['./route-data.component.scss']
})
export class RouteDataComponent implements OnInit, OnDestroy {
  public routeData: any;

  constructor(private route: ActivatedRoute,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.routeData = data;
    });
  }

  ngOnDestroy() {
    this.dataService.getEmitter().emit({type: 'data:list', payload: {amount: null}});
  }

}
