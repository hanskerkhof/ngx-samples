import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AttrMap, boolFromValue, getAttrs, getAttrValue } from '../_shared/attribute-utils';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit {
  title: string;
  @ViewChild('content1') private content1: ElementRef;

  constructor(elementRef: ElementRef) {
    const attrs = getAttrs(elementRef);
    // console.log('attrs: ', attrs);
    this.title = this.getTitle(attrs);

  }

  ngOnInit() {
    // console.log('@ViewChild content: ', this.content1, this.content1.nativeElement.innerHTML.trim());
    // console.log('title: ', this.title);
  }

  private getTitle(attrs: AttrMap) {
    return (getAttrValue(attrs, 'title') || 'Default title').trim();
  }

}
