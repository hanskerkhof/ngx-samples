import { AfterContentInit, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  /* tslint:disable component-selector */
  selector: 'editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.None,

})
export class EditableComponent implements OnInit, AfterContentInit {
  @Input() label: string;
  @ViewChild('content') private content: ElementRef;
  edited: string;
  editEnable: boolean;
  initialHTMLContent: string;
  contentBlock = {
    'editable_label': {
      campaignHandle: 'campaign.handle',
      contentLabel: 'editable_label',
      contentValue: '<em>contentValue</em> from <strong>contentBlock</strong>',
      type: 'HTML'
    }
  };

  constructor() {
  }

  ngAfterContentInit() {
    // // Angular will sanitize this title when displayed, so it should be plain text.
    // const textContent = this.content.nativeElement.textContent.trim();
    // if (textContent) {
    //   this.title = textContent;
    // }

    this.initialHTMLContent = this.content.nativeElement.innerHTML.replace( /\s{2,}/g, ' ' ).trim();
    // console.log('initialHTMLContent', this.initialHTMLContent);
    this.setContent();

  }

  setContent(){
    if (!this.contentBlock.hasOwnProperty(this.label)) {
      // CREATE contentBlock
    }

    if (this.contentBlock.hasOwnProperty(this.label)) {
      this.contentBlock[this.label].contentHTMLValue = this.initialHTMLContent;
      const d = new Date();
      const milliSeconds = d.getMilliseconds() + '';
      const revision = `contentBlock@${Math.floor(d.getTime() / 1000)}${milliSeconds.padStart(3, '0')}`;
      if(!this.contentBlock[this.label].revision){
        this.contentBlock[this.label].revision = revision;
      }
    }

    if (this.contentBlock.hasOwnProperty(this.label) && this.contentBlock[this.label].contentValue) {
      this.edited = this.contentBlock[this.label].contentValue;
      // content = this.campaignerService.contentBlocks[this.label].contentValue;
    } else {
      this.edited = this.content.nativeElement.innerHTML;
      // this.edited = 'EMPTY';
      // console.log('contentBlock FOR LABEL NOT FOUND');
      // TODO create contentBlock
      // content = `contentBlock FOR LABEL ${this.label} NOT FOUND - ${this.elementRef.nativeElement.innerHTML}`;
    }
  }

  ngOnInit() {
    // console.log('content:', this.content.nativeElement.innerHTML);
    // console.log('label:', this.label);
  }

  edit() {
    // this.edited = 'edited';
    // console.log('edit content: ', this.content.nativeElement.innerHTML);
    // console.log('edited: ', this.edited);
    this.editEnable = true;
  }

  editOk() {
    // this.edited = 'edited';
    this.content.nativeElement.innerHTML = this.edited;
    // console.log('edit content: ', this.content.nativeElement.innerHTML);
    // console.log('edited: ', this.edited);
    this.editEnable = false;
  }

  editCancel() {
    this.edited = this.content.nativeElement.innerHTML;
    this.editEnable = false;
  }

  revert(){
    this.edited = this.initialHTMLContent;
  }

  redo(){
    this.setContent();
  }
}
