import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as $ from 'jquery';
import {ApiService} from '../api.service';

@Component({
  selector: 'faculty-add',
  templateUrl: './faculty-add.component.html',
  styleUrls: ['./faculty-add.component.css']
})
export class FacultyAddComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;
  courses ;

  constructor(private route: ActivatedRoute,private router: Router, private api: ApiService, private formBuilder: FormBuilder) {

  }
  get staticArray() {
    return this.courses;
  }
  ngOnInit() {
    this.api.getCourses()
        .subscribe(res => {
          console.log(res)
          this.courses=res;
          console.log(this.courses)

        }, (err) => {
          console.log(err);
        });

    this.userForm = this.formBuilder.group({
      Name: [null, Validators.required],
      UName: [null, Validators.required],
      UPassword: [null, Validators.required],
      dob: [null, Validators.required],
      email: [null, Validators.required],
      gender: ['F', Validators.required],
    });

  }
  get f() {
    return this.userForm.controls;
  }

  // getter for form fields


  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    let user: object = {};
   // user['userID'] = 18;
    user['name'] = this.userForm.value.Name;
    user['gender'] = this.userForm.value.gender;
    user['birthday'] = this.userForm.value.dob;
   // user['contact'] = this.userForm.value.email;
    user['username'] = this.userForm.value.UName;
    user['user_password'] = this.userForm.value.UPassword;
    user['email'] = this.userForm.value.email;
    //user['user_type'] = this.route.snapshot.params['type'];

    this.api.postFaculty(user)
      .subscribe(res => {
let faccourse:object={};
        faccourse['fid']=res._id
        for(let i=0; i<this.courses.length;i++)
        {
          let s="#"+this.courses[i]._id;
          console.log($(s)[0]);
          if($(s)[0].checked)
          {
            faccourse['cid']= this.courses[i]._id;
            this.api.postFacultyCourse(faccourse).subscribe(res => {},(err) => {
            console.log(err);
          });
          }
        }
        this.router.navigate(['/user-profile', res._id,'F']);

      }, (err) => {
        console.log(err);
      });
  }



}
