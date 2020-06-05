import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

@Output() categories = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }
  category() {
    this.categories.emit();
  }
 

  
  
}
