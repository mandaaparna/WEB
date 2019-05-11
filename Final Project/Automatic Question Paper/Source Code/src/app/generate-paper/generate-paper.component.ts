import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import * as $ from 'jquery';

@Component({
  selector: 'generate-paper',
  templateUrl: './generate-paper.component.html',
  styleUrls: ['./generate-paper.component.css']
})
export class GeneratePaperComponent implements OnInit {

    fc_id = '';
    selected_value='';
 v1=[];i=0;v2=[];j=0;res5=[];
 final_res=[];fr=0;final_res1=[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<GeneratePaperComponent>,private route: ActivatedRoute, private api: ApiService, private router: Router,private formBuilder: FormBuilder) {
      this.fc_id=data.fcid;

  }

  ngOnInit() {



      $('#ty1').hide();

  }
  add()
  {

      if($("#ls").children("option:selected").val()=='D')
      {
        this.v1[this.i]=this.i;
        this.i++;
      }
      else {
          this.v2[this.j]=this.j;
          this.j++;
      }
      console.log(this.v2);
  }
    generate()
    {
        this.res5=[];
        this.final_res=[];
        this.final_res1=[];
        this.fr=0;
        if(this.selected_value=='M')
        {
            let m=0;
            for(m=0;m<this.j;m++)
            {

                let id_1= "#Bv"+m;
                let id_2="#Av"+m;
                let dlevel = $(id_1).children("option:selected").val();
                let num_elems=$(id_2).val();

                this.api.getFacultyQuestionsLevel(this.fc_id,dlevel,'M')
                    .subscribe(res => {
                            let max=0;
                            let k2=0;
max=res.length;
while(k2<num_elems)
{
   let rn= Math.floor(Math.random() * max) ;
   this.res5[k2]=res[rn].qid;
   k2++;

}

if(m==((this.j)))
{
    console.log(this.res5);
    for(let g=0;g<this.res5.length;g++)
    {
        this.api.getMultiple(this.res5[g])
            .subscribe(res => {
                res['ind']=g+1;
                    this.final_res[this.fr]=res;
                    this.fr++;
                if(g==((this.res5.length-1)))
                {
                    console.log(this.final_res);
                    console.log(this.final_res1);
                    $('#ty').hide();
                    $('#ty1').show();
                }
                    //this.dialogRef.close();

                }, (err) => {
                    // console.log(err);
                }
            );
    }
}

                        }, (err) => {

                        }
                    );
            }

        }
        else {
            let m=0;
            for(m=0;m<this.i;m++)
            {

                let id_1= "#B"+m;
                let id_2="#A"+m;
                let dlevel = $(id_1).children("option:selected").val();
                let num_elems=$(id_2).val();
                console.log(dlevel);
                this.api.getFacultyQuestionsLevel(this.fc_id,dlevel,'D')
                    .subscribe(res => {
                            let max=0;
                            let k2=0;
                            max=res.length-1;
                            while(k2<num_elems)
                            {
                                let rn= Math.floor(Math.random() * max) ;
                                console.log(res);
                                console.log(rn)
                                this.res5[k2]=res[rn].qid;
                                k2++;

                            }

                            if(m==((this.i)))
                            {
                                console.log(this.res5);
                                for(let g=0;g<this.res5.length;g++)
                                {
                                    this.api.getDescriptive(this.res5[g])
                                        .subscribe(res => {
                                            res['ind']=g+1;
                                                this.final_res1[this.fr]=res;
                                                if(g==((this.res5.length-1)))
                                                {
                                                    console.log(this.final_res);
                                                    console.log(this.final_res1);
                                                    $('#ty').hide();
                                                    $('#ty1').show();
                                                }
                                                //this.dialogRef.close();

                                            }, (err) => {
                                                // console.log(err);
                                            }
                                        );
                                }
                            }

                        }, (err) => {

                        }
                    );
            }

        }
    }
  hide()
  {
      this.v1=[];this.v2=[];
      this.i=0; this.j=0;
      this.selected_value = $("#ls").children("option:selected").val();
      if(this.selected_value=='M')
      {
          $('#v_1').hide();
          $('#v_2').show();

      }
      else {
          $('#v_2').hide();
          $('#v_1').show();
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
            this.api.postDescriptiveQuestions(question)
                .subscribe(res => {
                    let questionfc: object = {};
                    questionfc['qid'] = res._id;
                    questionfc['dmq'] = 'D';
                    questionfc['fcid'] = this.fc_id;
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
