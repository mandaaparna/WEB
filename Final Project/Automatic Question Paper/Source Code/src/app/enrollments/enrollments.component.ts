import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'my-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.css']
})
export class EnrollmentsComponent implements OnInit {
  enrollments = [];
  user_id ;
  v=[];
  student_name;
  collapse=true;
  user_type;
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router,private formBuilder: FormBuilder) {
      
  }

  ngOnInit() {

      this.user_id = this.route.snapshot.params['id'];
    this.v=['My Profile','Enrollments','Assignments'];
    this.user_type=this.route.snapshot.params['type'];
    this.api.getStudent(this.user_id).subscribe(data => {
      this.student_name=data.name;
    });
    this.getEnrollments();
    
  }
  logout()
  {
    this.router.navigate([''])
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
  onNavigate(navpage)
  {
    if(navpage=='My Profile')
    {
      this.router.navigate(['/user-profile',this.user_id,this.user_type])
    }
    else if(navpage=='Courses')
    {
      this.router.navigate(['/courses',this.user_id,this.user_type])
    }
    else if(navpage=='Student List')
    {
      this.router.navigate(['/student-list',this.user_id,this.user_type])
    }
    else if(navpage=='Questions List')
    {
      this.router.navigate(['/question-list',this.user_id,this.user_type])
    }
    else if(navpage=='Enrollments')
    {
      this.router.navigate(['/my-enrollments',this.user_id,this.user_type])
    }
  }
  getEnrollments()
  {
    this.api.getFacultyCourses()
        .subscribe(data => {
          //console.log(data);
          this.enrollments = data;
          for (let i = 0; i < this.enrollments.length; i++) {
            this.enrollments[i].ind = i;
            this.api.getCourse(this.enrollments[i].cid)
                .subscribe(res => {
                  console.log(res)
                      this.enrollments[i].CourseName = res.CourseName;
console.log(this.enrollments[i].CourseName);
                  //console.log(this.enrollments[i]);
                    }, (err) => {
                      console.log(err);
                    }
                );
            //console.log(this.enrollments[i]);
            this.api.getFaculty(this.enrollments[i].fid)
                .subscribe(res => {
                     // console.log(res)
                      this.enrollments[i].FacultyName = res.name;

                    //  console.log(this.enrollments[i]);
                    }, (err) => {
                      console.log(err);
                    }
                );
            this.api.getStudentCourseExists(this.enrollments[i]._id,this.user_id).subscribe(res => {
                  //console.log(res)
                  if(res.length>0)
                  {
                    this.enrollments[i].btnvis= false;
                  }
          else {
                    this.enrollments[i].btnvis= true;
                  }
                }, (err) => {
                  console.log(err);
                }
            );
          }
        });
  }
  delete(id: string, ind: string)
  {
   /* this.api.getUserBook(this.user_id, id )
        .subscribe(data => {
          this.api.deleteUserBook(data[0]._id )
              .subscribe(data => {
                this.my_enrollments[ind].availability = this.my_enrollments[ind].availability+1;
                this.api.updateBook(this.my_enrollments[ind]._id, this.my_enrollments[ind])
                    .subscribe(res1 => {
                      this.my_enrollments.splice( Number(ind) , 1);
					  for (let j = Number(ind) ; j < this.my_enrollments.length ; j++ ) {
                          this.my_enrollments[j].ind = j;}
                    }, (err) => {
                      console.log(err);
                    });

              });

        });*/
  }
  add(id:string,ind:string)
  {
    let student: object = {};
    student['sid'] = this.user_id;
    student['fcid'] = id;
    this.api.postStudentCourse(student)
        .subscribe(res => {
          this.enrollments[ind].btnvis= false;

        }, (err) => {
          console.log(err);
        });
  }
   
}
