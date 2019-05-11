import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'user-template',
  templateUrl: './user-template.component.html',
  styleUrls: ['./user-template.component.css']
})
export class UserTemplateComponent implements OnInit {
    user_id ;
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router,private formBuilder: FormBuilder) {
  }

  ngOnInit() {
      this.user_id = this.route.snapshot.params['id'];
  }
  onProfile()
  {
	  this.router.navigate(['/user-profile',this.user_id]);}
  onBooks()
  {
	  this.router.navigate(['/books',this.user_id]);
  }
  onEnrollments()
  {
    this.router.navigate(['/my-enrollments',this.user_id]);
  }
  
}
