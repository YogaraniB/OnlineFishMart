import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  HomePage = true;
  categoryPage = false
  subCategoryPage = false;
  login = false;
  customerdetail = false;
  badgevalue = true;
  nav = true;
  admin = false;
  constructor() { }

  ngOnInit(): void {
  }
  categories() {
    this.HomePage = false;
    this.categoryPage = true;
    this.subCategoryPage = false;
    this.login = false;
    this.customerdetail = false;
    this.admin = false;
  }
  subcategories() {
    this.HomePage = false;
    this.categoryPage = false;
    this.subCategoryPage = true;
    this.admin = false;
  }
  logins() {
    this.HomePage = false;
    this.categoryPage = false;
    this.subCategoryPage = false;
    this.login = true;
    this.customerdetail = false;
    this.admin = false;
  }
  subCattoLogin(badgevalue) {
    this.badgevalue = badgevalue;
    this.HomePage = false;
    this.categoryPage = false;
    this.subCategoryPage = false;
    this.login = true;
    this.customerdetail = false;
    this.admin = false;
  }
  cusDetails() {
    this.HomePage = false;
    this.categoryPage = false;
    this.subCategoryPage = false;
    this.login = false;
    this.customerdetail = true;
    this.admin = false;

  }
  cartAdd(badge) {
    this.badgevalue = badge;
  }
  categoriesBack() {
    this.HomePage = true;
    this.categoryPage = false;
    this.subCategoryPage = false;
    this.login = false;
    this.customerdetail = false;
    this.admin = false;
  }
  toAdmin() {
    this.admin = true;
    this.HomePage = false;
    this.categoryPage = false;
    this.subCategoryPage = false;
    this.login = false;
    this.customerdetail = false; 
  }

}
