import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes:Quote[]=[
    new Quote(1,'There are years that ask questions and years that answer.','-Zora Neale Hurston'),
    new Quote(2,'Smile the worst is yet to come.','-A song'),
    new Quote(3,'Today is a new day.','-African Proverb'),
    new Quote(4,'Ask for what you want and be prepared to get it.','-Maya Angelou'),
    new Quote(5,'The future belongs to those who prepare for it today.','-Malcom X'),
    new Quote(6,'We are the change that we seek.','-Barack Obama'),

  ]
  quote;
  constructor(){
    this.quote=1
  }
}