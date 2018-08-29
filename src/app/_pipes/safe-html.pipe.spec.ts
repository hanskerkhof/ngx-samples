import { SafeHtmlPipe } from './safe-html.pipe';
import { inject, TestBed } from '@angular/core/testing';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

// describe('SafeHtmlPipe', () => {
//   beforeEach(() => {
//     TestBed
//       .configureTestingModule({
//         imports: [
//           BrowserModule
//         ]
//       });
//   });
//
//   it('create an instance', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
//     const pipe = new SafeHtmlPipe(domSanitizer);
//     expect(pipe).toBeTruthy();
//   });
//   // it('create an instance', () => {
//   //   const pipe = new SafeHtmlPipe();
//   //   expect(pipe).toBeTruthy();
//   // });
// });

describe('SafeHtmlPipe', () => {
  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          BrowserModule
        ]
      });
  });

  it('create an instance', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    const pipe = new SafeHtmlPipe(domSanitizer);
    expect(pipe).toBeTruthy();
  }));
  // it('create an instance', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
  //   let pipe = new SafeHtmlPipe(domSanitizer);
  //   expect(pipe).toBeTruthy();
  // });
});
