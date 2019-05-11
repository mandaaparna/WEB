import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import * as $ from 'jquery'
import { MatDialog, MatDialogConfig} from '@angular/material';
import {AddQuestionComponent} from '../add-question/addquestion.component';

@Component({
  selector: 'questionslist',
  templateUrl: './questionslist.component.html',
  styleUrls: ['./questionslist.component.css']
})
export class QuestionListComponent implements OnInit {
  courses=[];
  user_id ;
    collapse=true;
    user_name;
    user_type;
    v=[];
    questions_desc=[];
    questions_mul=[]
    fc_id;
    selected_course='';
    faculty_name='';

  constructor(public dialog: MatDialog,private route: ActivatedRoute, private api: ApiService, private router: Router,private formBuilder: FormBuilder) {
      
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

      this.getQuestionList();

  }
  add()
  {
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.height='550px';
      dialogConfig.width='550px';
      dialogConfig.position={top: '8%', left: '30%'}
      dialogConfig.data = {
          fcid: this.selected_course,
          title: 'Add Question'
      };
      let dialogRef = this.dialog.open(AddQuestionComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(
          data => this.getQuestionList()
      );
  }
  getQuestionList()
  {
      this.questions_desc=[];
      this.questions_mul=[];
      this.selected_course = $("#course").children("option:selected").val();
      console.log(this.selected_course);
      if(this.selected_course!= '' ) {
          //console.log("Inside")
          this.api.getFacultyCourseQuestions(this.selected_course)
              .subscribe(data => {
                  //console.log(data);
                  let j=0,k=0;
                  for (let i = 0; i < data.length; i++) {
                      //console.log("********")
                      //console.log(data[i].dmq)

                      if (data[i].dmq == 'D') {
                          //console.log(data[i].qid);
                          this.api.getDescriptive(data[i].qid)
                              .subscribe(res => {
                                  //console.log(1);
                                      // console.log(res);
                                      this.questions_desc[j] = res;
                                      j++;
                                  }, (err) => {
                                      // console.log(err);
                                  }
                              );
                      } else {
                          this.api.getMultiple(data[i].qid)
                              .subscribe(res => {
                                      // console.log(res);
                                      this.questions_mul[k] = res;
                                      k++;
                                  }, (err) => {
                                      // console.log(err);
                                  }
                              );
                      }

                  }
                  //console.log(this.questions_desc);


              });


      }
  }
  getCourses() {
      let j=0;
    this.api.getFacultyCourse(this.user_id)
      .subscribe(data => {
        console.log(data);
		for (let i = 0; i < data.length; i++) {
            this.fc_id=data[i]._id;
          this.api.getCourse(data[i].cid)
              .subscribe(res => {
                 // console.log(res);
                this.courses[j]={'fc_id':data[i]._id,'CourseName':res.CourseName,'_id':res._id};
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
        //console.log(navpage);
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
