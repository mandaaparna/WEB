import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog, MatDialogConfig} from '@angular/material';
import {AddQuestionComponent} from '../add-question/addquestion.component';
import {GeneratePaperComponent} from '../generate-paper/generate-paper.component';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses=[];
  user_id ;
    collapse=true;
    user_name;
    user_type;
    v=[];
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



  }
    getCourses() {
      let j=0;
    this.api.getFacultyCourse(this.user_id)
      .subscribe(data => {
        //console.log(data);

		for (let i = 0; i < data.length; i++) {
          this.api.getCourse(data[i].cid)
              .subscribe(res => {
                 // console.log(res);
                  res['fc_id']=data[i]._id;
                this.courses[j]=res;
                j++;
                  }, (err) => {
                   // console.log(err);
                  }
              );
        }
      });
  }
    openWindow(id)
    {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.height='550px';
        dialogConfig.width='550px';
        dialogConfig.position={top: '8%', left: '30%'}
        dialogConfig.data = {
            fcid: id,
            title: 'Generate Paper'
        };
        let dialogRef = this.dialog.open(GeneratePaperComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(
            data => console.log(2)
        );
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
        else if(navpage=='Student List')
        {
            this.router.navigate(['/student-list',this.user_id,this.user_type])
        }
        else if(navpage=='Questions List')
        {
            this.router.navigate(['/question-list',this.user_id,this.user_type])
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
