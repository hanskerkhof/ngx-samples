import { AfterContentInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-web-version',
  templateUrl: './webversion.component.html',
  styleUrls: ['./webversion.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.None

})
export class WebversionComponent implements OnInit, AfterContentInit {
  @ViewChild('content') private content: ElementRef;
  public edited: string;

  constructor() { }

  ngOnInit() {
    console.log('this.content', this.content);
  }

  ngAfterContentInit() {
    // // Angular will sanitize this title when displayed, so it should be plain text.
    // const textContent = this.content.nativeElement.textContent.trim();
    // if (textContent) {
    //   this.title = textContent;
    // }
    console.log('this.content', this.content);
    console.log('this.content', this.content.nativeElement.innerHTML);
this.edited = `before ${this.content.nativeElement.innerHTML} after`;
    // this.initialHTMLContent = this.content.nativeElement.innerHTML.replace(/\s{2,}/g, ' ').trim();
    // this.setContent();

  }

}
