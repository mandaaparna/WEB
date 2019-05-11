import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import * as $ from 'jquery';

@Component({
  selector: 'add-question',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddQuestionComponent implements OnInit {

    fc_id = '';
    selected_value='';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<AddQuestionComponent>,private route: ActivatedRoute, private api: ApiService, private router: Router,private formBuilder: FormBuilder) {
      this.fc_id=data.fcid;
  }

  ngOnInit() {





  }
  hide()
  {
      this.selected_value = $("#ls").children("option:selected").val();
      if(this.selected_value=='M')
      {
          $('.hd').show();
          $('#Pt').hide();
          $('#Pt1').hide();
      }
      else {
          $('.hd').hide();
          $('#Pt').show();
          $('#Pt1').show();
      }
  }
    add_question()
    {
        let question: object = {};
        question['Question'] = $('#qs').val();
        question['level'] = $('#lev').children("option:selected").val();
        if(this.selected_value=='D')
        {
            question['pts'] = $('#Pt').val();
            console.log(question)
            this.api.postDescriptiveQuestions(question)
                .subscribe(res => {
                    let questionfc: object = {};
                    questionfc['qid'] = res._id;
                    questionfc['dmq'] = 'D';
                    questionfc['fcid'] = this.fc_id;
                    questionfc['level']=$('#lev').children("option:selected").val();
                    this.api.postFacultyCourseQuestions(questionfc)
                        .subscribe(res => {
                            console.log("****")
                            console.log(res);
                            console.log(this.fc_id)
                            this.dialogRef.close();

                            }, (err) => {
                                // console.log(err);
                            }
                        );

                    }, (err) => {
                        // console.log(err);
                    }
                );
        }
        else {
            question['OptA'] = $('#A').val();
            question['OptB'] = $('#B').val();
            question['OptC'] = $('#C').val();
            question['OptD'] = $('#D').val();
            question['AnsOpt'] = $('#opt').children("option:selected").val();
            this.api.postMultipleQuestions(question)
                .subscribe(res => {
                    let questionfc: object = {};
                    questionfc['qid'] = res._id;
                    questionfc['dmq'] = 'M';
                    questionfc['fcid'] = this.fc_id;
                    questionfc['level']=$('#lev').children("option:selected").val();
                    this.api.postFacultyCourseQuestions(questionfc)
                        .subscribe(res => {
                            this.dialogRef.close();

                            }, (err) => {
                                // console.log(err);
                            }
                        );

                    }, (err) => {
                        // console.log(err);
                    }
                );
        }

    }




}
