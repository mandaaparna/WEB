import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import * as $ from 'jquery'

@Component({
  selector: 'studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentListComponent implements OnInit {
  courses=[];
  user_id ;
    collapse=true;
    user_name;
    user_type;
    v=[];
    students=[];
    fc_id;
    selected_course='';
    faculty_name='';
    kl=0;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router,private formBuilder: FormBuilder) {
      
  }
    logout()
    {
        this.router.navigate([''])
    }
  ngOnInit() {

     this.user_id = this.route.snapshot.params['id'];
     this.user_type=this.route.snapshot.params['type'];
     this.api.getFaculty(this.user_id).subscribe(data => {
         this.faculty_name=data.name;
     });
    this.getCourses();
      if(this.user_type=='F')
      {
          this.v=['My Profile','Courses','Student List','Questions List'];
      }
      else {
          this.v=['My Profile','Courses','Assignments','Grades'];
      }

      this.getStudentList();

  }
  getStudentList() {
      this.students = [];
      this.selected_course = $("#course").children("option:selected").val();
      console.log(this.selected_course);
      if (this.selected_course != '') {
          this.api.getStudentCourse(this.selected_course)
              .subscribe(data => {
                  console.log(data);
                  for (let i = 0; i < data.length; i++) {
                      this.api.getStudent(data[i].sid)
                          .subscribe(res => {
                                  // console.log(res);
                                  this.students[this.kl] = res;
                                  this.kl++;
                              }, (err) => {
                                  // console.log(err);
                              }
                          );
                  }
                  console.log(this.students)
              });


      }
  }
  getCourses() {
      let j=0;
    this.api.getFacultyCourse(this.user_id)
      .subscribe(data => {
        //console.log(data);
		for (let i = 0; i < data.length; i++) {
            this.fc_id=data[i]._id;
          this.api.getCourse(data[i].cid)
              .subscribe(res => {
                 // console.log(res);
                this.courses[j]={'fc_id':this.fc_id,'CourseName':res.CourseName,'_id':res._id};
                j++;
                  }, (err) => {
                   // console.log(err);
                  }
              );
        }
      });
  }

    onNavigate(navpage)
    {
        console.log(navpage);
        if(navpage=='My Profile')
        {
            this.router.navigate(['/user-profile',this.user_id,this.user_type])
        }
        else if(navpage=='Courses')
        {
            this.router.navigate(['/courses',this.user_id,this.user_type])
        }
        else if(navpage=='Questions List')
        {
            this.router.navigate(['/question-list',this.user_id,this.user_type])
        }
        else if(navpage=='Student List')
        {
            this.router.navigate(['/student-list',this.user_id,this.user_type])
        }
    }
    onCollapse()
    {
        if(this.collapse==true)
        {this.collapse=false;
            document.getElementById("content-div").classList.add("col-12");
            document.getElementById("content-div").classList.remove("col-10");}
        else
        {this.collapse=true;
            document.getElementById("content-div").classList.add("col-10");
            document.getElementById("content-div").classList.remove("col-12");}
    }


}
