import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
  @Output() cartAdd = new EventEmitter<boolean>();
  @Output() subcategoriesBack = new EventEmitter<string>();
  @Output() tologin = new EventEmitter<boolean>();
  badgeValue: boolean = false;

  addCart  = true;
  buyNow = false;


  constructor() { }

  ngOnInit(): void {
  }
  addcart() {
    this.buyNow = true;
    this.addCart = false;
  }
  addtocart() {
    this.cartAdd.emit(true);
  }
  subcatBack() {
    this.subcategoriesBack.emit();
  }
  toLogin() {
    this.badgeValue = true;
    this.tologin.emit(this.badgeValue);
  }
  

}
