import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.css']
})
export class CustomerdetailComponent implements OnInit {
  @Output() toLogin = new EventEmitter<string>();

  addform = false;
  angForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  addNew() {
    this.addform = true;
  }
  backtoLogin() {
    this.toLogin.emit();
  }

}
