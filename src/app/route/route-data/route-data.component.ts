import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../_services/data.service';

@Component({
  selector: 'app-route-data',
  templateUrl: './route-data.component.html',
  styleUrls: ['./route-data.component.scss']
})
export class RouteDataComponent implements OnInit {
  public routeData: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.routeData = data;
    });
  }

}
