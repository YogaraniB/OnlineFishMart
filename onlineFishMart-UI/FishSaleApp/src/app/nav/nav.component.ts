import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  router: any;
  placeoreder =  false;
  checkout = true;
  sucess = false;
  @Output() categories = new EventEmitter<string>();
  @Output() logins = new EventEmitter<string>();
  @Input() badgevalue: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  category() {
    this.categories.emit();
  }
  login() {
    this.logins.emit();
  }
  toOrder() {
    $("#myModal1").modal("show");
    $("#myModal").modal("hide");
    // this.placeoreder =  true;
    // this.checkout = false;
    // this.sucess = false;
  }
  toSuccess() {
    $("#myModal2").modal("show");
    $("#myModal1").modal("hide");
    // this.placeoreder =  false;
    // this.checkout = false;
    // this.sucess = true;
  }

}
