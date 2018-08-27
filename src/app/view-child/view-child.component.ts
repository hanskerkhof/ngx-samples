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
    this.title = this.getTitle(attrs);
  }

  ngOnInit() {
  }

  private getTitle(attrs: AttrMap) {
    return (getAttrValue(attrs, 'title') || 'Default title').trim();
  }

}
