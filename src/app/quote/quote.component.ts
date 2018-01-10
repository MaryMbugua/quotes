import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes=[
    new Quote(1,'There are years that ask questions and years that answer.','Zora Neale Hurston',new Date(2017,3,14)),
    new Quote(2,'Smile the worst is yet to come.','A song',new Date(2017,3,14) ),
    new Quote(3,'Today is a new day.','African Proverb',new Date(2017,2,14)),
    new Quote(4,'Ask for what you want and be prepared to get it.','Maya Angelou',new Date(2017,6,9)),
    new Quote(5,'The future belongs to those who prepare for it today.','Malcom X',new Date(2017,1,12)),
    new Quote(6,'We are the change that we seek.','Barack Obama',new Date(2017,1,12)),

  ]

  removeQuote(isRemove,index){
    if(isRemove){
       let toRemove=confirm(`Are you sure you want to delete quote by ${this.quotes[index].name}`)
      
     if(toRemove){
      this.quotes.splice(index,1);
    }
  }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    this.quotes.push(quote)
  } 




  constructor() { }

  ngOnInit() {
  }

}
