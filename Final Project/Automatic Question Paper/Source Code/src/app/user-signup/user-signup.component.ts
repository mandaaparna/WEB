import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../api.service";
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {
  title = 'app';


  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router,private formBuilder: FormBuilder) {
  }

  ngOnInit() {


  }

  onFacultySignUp()
  {
    this.router.navigate(['/user-login','F']);  }
  onStudentSignUp()
  {
    this.router.navigate(['/user-login','S']);
  }


}
