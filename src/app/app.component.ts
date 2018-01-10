import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes:Quote[]=[
    new Quote(1,'There are years that ask questions and years that answer.','Zora Neale Hurston',new Date(2017,3,14)),
    new Quote(2,'Smile the worst is yet to come.','A song',new Date(2017,3,14) ),
    new Quote(3,'Today is a new day.','African Proverb',new Date(2017,2,14)),
    new Quote(4,'Ask for what you want and be prepared to get it.','Maya Angelou',new Date(2017,6,9)),
    new Quote(5,'The future belongs to those who prepare for it today.','Malcom X',new Date(2017,1,12)),
    new Quote(6,'We are the change that we seek.','Barack Obama',new Date(2017,1,12)),

  ]
  quote;
  constructor(){
    this.quote=1
  }
}
