import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../_services/data.service';

@Component({
  selector: 'app-route-outlets',
  templateUrl: './route-outlets.component.html',
  styleUrls: ['./route-outlets.component.scss']
})
export class RouteOutletsComponent implements OnInit, OnDestroy {
  public routeData: any;
  public id: any;

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

  onOutletActivate(e) {
    if (e.route.outlet === 'header') {
      this.id = parseInt(e.route.snapshot.params.id, 0);
    }
  }

  onOutletDeactivate(e) {
  }

}
