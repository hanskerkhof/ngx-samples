import { Component, OnInit } from '@angular/core';
import { routes } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public myroutes;

  ngOnInit() {
    this.myroutes = routes;
  }
}
