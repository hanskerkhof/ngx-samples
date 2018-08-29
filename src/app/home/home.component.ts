import { Component, OnInit, VERSION, Version } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public angularVersion: Version;
  public environment: any;

  constructor() {
    this.angularVersion = VERSION;
    this.environment = environment;
  }

  ngOnInit() {
  }

}
