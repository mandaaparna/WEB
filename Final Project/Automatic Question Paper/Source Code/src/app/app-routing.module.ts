import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserAddComponent} from './user-add/user-add.component';
import {UserLoginComponent} from "./user-login/user-login.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {EnrollmentsComponent} from './enrollments/enrollments.component';
import {UserSignupComponent} from './user-signup/user-signup.component';
import {FacultyAddComponent} from './faculty-add/faculty-add.component';
import {CoursesComponent} from './courses/courses.component';
import {StudentListComponent} from './student-list/studentlist.component';
import {QuestionListComponent} from './questions-list/questionslist.component';
import {AddQuestionComponent} from './add-question/addquestion.component';

const appRoutes: Routes = [
  {
    path: '',
    component: UserSignupComponent,
    data: {title: 'Signup'}
  },
  {
    path: 'user-login/:type',
    component: UserLoginComponent,
    data: {title: 'login'}
  },
  {
    path: 'add-question/:type',
    component: AddQuestionComponent,
    data: {title: 'Add Question'}
  },
  {
    path: 'courses/:id/:type',
    component: CoursesComponent,
    data: {title: 'Books'}
 
  },
  {
    path: 'faculty-add',
    component: FacultyAddComponent,
    data: {title: 'Faculty SignUp'}

  },
  {
    path: 'user-add',
    component: UserAddComponent,
    data: {title: 'Sign Up'}
  },
  {
    path: 'my-enrollments/:id/:type',
    component: EnrollmentsComponent,
    data: {title: 'Sign Up'}
  },
  {
    path: 'user-template/:id',
    component: UserAddComponent,
    data: {title: 'Sign Up'}
  },
  {
    path: 'user-profile/:id/:type',
    component: UserProfileComponent,
    data: {title: 'User Profile'} 
  },
  {
    path: 'student-list/:id/:type',
    component: StudentListComponent,
    data: {title: 'Student List'}
  },
  {
    path: 'question-list/:id/:type',
    component: QuestionListComponent,
    data: {title: 'Questions List'}
  },
 /* {
    path: '',
    redirectTo: '/customers',
    pathMatch: 'full'
  }*/
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
