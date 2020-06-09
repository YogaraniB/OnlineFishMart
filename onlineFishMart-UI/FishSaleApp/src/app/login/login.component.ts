import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserSignupService } from '../Services/user-signup.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;
  loginForm: FormGroup;
  submitted = false;
  displayBasic = false;
  massage: string;

  @Output() cusDetails = new EventEmitter<String>();
  @Output() logintoHome = new EventEmitter<String>();
  @Output() toAdmin = new EventEmitter<String>();


  constructor(private fb: FormBuilder,
    private http: HttpClient, private router: Router,private signUp: UserSignupService,
    ) {

  }

  ngOnInit(): void {

    this.angForm = this.fb.group({
      name: new FormControl(),
      address: new FormControl(),
      phone: new FormControl(),
      password: new FormControl(),
      email: new FormControl(),
      role: new FormControl(),

    });
    this.loginForm = this.fb.group({
      lphone: new FormControl(),
      lpassword: new FormControl(),
      lrole: new FormControl(),
    });

  }

  get f() { return this.angForm.controls; };
  get l() { return this.loginForm.controls; }


  signup() {
    
    const datas = {
      'address': this.angForm.value.address,
      'email': this.angForm.value.email,
      'password': this.angForm.value.password,
      'phone': +this.angForm.value.phone,
      'userName': this.angForm.value.name
    };
    this.signUp.userSignup(datas).subscribe(
      (data) => { 
        this.submitted = true;
        this.massage = 'Data saved Successfully';
        //this.messageService.add({severity:'success', summary: 'Success Message', detail:'Order submitted'});    
        this.angForm.reset(); 
      },

      (error) => {

      }
    );
  
  }

  homepage() {
    if (this.loginForm.value.lrole === '0') {
      this.toAdmin.emit();
    }
    else {
      this.logintoHome.emit();
    }
  }
  onsubmit() {
    console.log(this.loginForm.value)
  }

}
