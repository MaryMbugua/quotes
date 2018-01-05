import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes=[
    new Quote(1,'There are years that ask questions and years that answer.','-Zora Neale Hurston'),
    new Quote(2,'Smile the worst is yet to come.','-A song'),
    new Quote(3,'Today is a new day.','-African Proverb'),
    new Quote(4,'Ask for what you want and be prepared to get it.','-Maya Angelou'),
    new Quote(5,'The future belongs to those who prepare for it today.','-Malcom X'),
    new Quote(6,'We are the change that we seek.','-Barack Obama'),

  ]

  removeQuote(isRemove,index){
    if(isRemove){
       let toRemove=confirm('Are you sure you want to delete ${this.quotes[index].name}')
      
     if(toRemove){
      this.quotes.splice(index,1);
    }
  }
  }
  constructor() { }

  ngOnInit() {
  }

}
