import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '../../../../../node_modules/@angular/common/http';
import { DataService } from '../../../_services/data.service';

@Component({
  selector: 'app-route-data-detail',
  templateUrl: './route-data-detail.component.html',
  styleUrls: ['./route-data-detail.component.scss']
})
export class RouteDataDetailComponent implements OnInit {
  public routeData: any;

  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.routeData = data;
    });
  }

}
