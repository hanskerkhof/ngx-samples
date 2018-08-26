import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-data',
  templateUrl: './route-data.component.html',
  styleUrls: ['./route-data.component.scss']
})
export class RouteDataComponent implements OnInit {
  public example: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.example = data.example;
    });
  }

}
