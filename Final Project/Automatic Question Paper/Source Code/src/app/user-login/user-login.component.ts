import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../api.service";
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  title = 'app';
  user = {};
  UserForm: FormGroup;
  submitted = false;
  login_error=false;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router,private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.UserForm = this.formBuilder.group({
      UName: [null, Validators.required],
      UPassword: [null, Validators.required],
    });

  }
  get f() {
    return this.UserForm.controls;
  }
  onSubmit()
  {
    this.submitted = true;
    if(this.UserForm.invalid)
    {
      return;
    }
    if(this.route.snapshot.params['type']=='F')
    {
      this.api.ValidateFaculty(this.UserForm.value.UName,this.UserForm.value.UPassword).subscribe(data => {
      if(data.length>0){
      this.router.navigate(['/user-profile',data[0]._id,'F']);}
      else {
        this.login_error=true;
      }

    },(err)=>{

      console.log("error in login page")});}
    else {
      this.api.ValidateStudent(this.UserForm.value.UName,this.UserForm.value.UPassword).subscribe(data => {
        if(data.length>0){
          this.router.navigate(['/user-profile',data[0]._id,'S']);}
        else {
          this.login_error=true;
        }

      },(err)=>{

        console.log("error in login page")});
    }

  }

  onSignUp()
  {
      if(this.route.snapshot.params['type']=='S')
    this.router.navigate(['/user-add']);
      else
          this.router.navigate(['/faculty-add']);
  }


}
