import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

import {AppComponent} from './app.component';
import {UserAddComponent } from './user-add/user-add.component';
import {UserLoginComponent} from './user-login/user-login.component';
import {AppRoutingModule} from './app-routing.module';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {UserTemplateComponent} from './user-template/user-template.component';
import {EnrollmentsComponent} from './enrollments/enrollments.component';
import {UserSignupComponent} from './user-signup/user-signup.component';
import  {FacultyAddComponent} from './faculty-add/faculty-add.component';
import * as $ from 'jquery';
import {CoursesComponent} from './courses/courses.component';
import {StudentListComponent} from './student-list/studentlist.component';
import {QuestionListComponent} from './questions-list/questionslist.component';
import { MatButtonModule,  MatDialogModule} from '@angular/material';
import {AddQuestionComponent} from './add-question/addquestion.component';
import {GeneratePaperComponent} from './generate-paper/generate-paper.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAddComponent ,
    UserLoginComponent,
      UserProfileComponent,
      UserTemplateComponent,
      EnrollmentsComponent,
      UserSignupComponent,
      FacultyAddComponent,
      CoursesComponent,
    StudentListComponent,
      QuestionListComponent,
      AddQuestionComponent,
      GeneratePaperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMaterialModule,
    MatDialogModule,
    MatButtonModule,



    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddQuestionComponent,GeneratePaperComponent]
})
export class AppModule {
}
