import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-outlets-header',
  templateUrl: './route-outlets-header.component.html',
  styleUrls: ['./route-outlets-header.component.scss']
})
export class RouteOutletsHeaderComponent implements OnInit {
  public id: any;
  public dataItem: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.route.data.subscribe(data => {
        this.dataItem = data.dataItem;
      });
    });
  }

}
