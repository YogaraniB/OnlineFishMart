import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Output() subcategories = new EventEmitter<string>();
  @Output() categoriesBack = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }
  subCategory() {
    this.subcategories.emit()
  }
  catback() {
    this.categoriesBack.emit()
  }

}
