import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-quote',
  templateUrl: './dynamic-quote.component.html',
  styleUrls: ['./dynamic-quote.component.scss']
})
export class DynamicQuoteComponent implements OnInit {
  public quote: any;

  private quotes = [
    ['You only live once, but if you do it right, once is enough.', 'Mae West'],
    ['I am so clever that sometimes I don\'t understand a single word of what I am saying.', 'Oscar Wilde'],
    ['Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.', 'Albert Einstein'],
    // tslint:disable-next-line:max-line-length
    ['The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.', 'Albert Einstein'],
    // tslint:disable-next-line:max-line-length
    ['It is our choices, Harry, that show what we truly are, far more than our abilities.', 'J.K. Rowling, Harry Potter and the Chamber of Secrets'],
    ['All men who have turned out worth anything have had the chief hand in their own education.', 'Walter Scott'],
    ['Trust yourself. You know more than you think you do.', 'Benjamin Spock'],
    ['No one can make you feel inferior without your consent.', 'Eleanor Roosevelt, This is My Story'],
    // tslint:disable-next-line:max-line-length
    ['To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.', 'Ralph Waldo Emerson'],
    // tslint:disable-next-line:max-line-length
    ['Twenty years from now you will be more disappointed by the things that you didn\'t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.', 'H. Jackson Brown Jr., P.S. I Love You']
  ];

  constructor() {
  }

  ngOnInit() {

    this.getQuote();
  }

  public getQuote() {
    const quote = Math.floor(Math.random() * this.quotes.length);
    // console.log('getQuote', quote);
    this.quote = {
      number: quote,
      text: this.quotes[quote][0],
      author: this.quotes[quote][1]
    };
    // console.log('quote', this.quote);
  }

}
