import { AfterContentInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss']
})
export class DynamicComponentComponent implements OnInit, AfterContentInit {
  public data: any;
  @Input() public label: string;
  @ViewChild('content') private content: ElementRef;
  public initialHtmlContent: string;

  constructor() {
  }

  ngOnInit() {
    this.initialHtmlContent = this.content.nativeElement.innerHTML.replace(/\s{2,}/g, ' ').trim();
    console.log('ngOnInit', this.initialHtmlContent);
  }

  ngAfterContentInit() {
    this.initialHtmlContent = this.content.nativeElement.innerHTML.replace(/\s{2,}/g, ' ').trim();
    console.log('ngAfterContentInit', this.initialHtmlContent);
  }
}
