import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

import {ApiService} from '../api.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
   customer = {};
  customerForm: FormGroup;
  id = '';
  name: object = {
    first: <string>'',
    last: <string>''
  };
  gender = '';
  birthday = '';
  lastContact = '';
  customerLifetimeValue = '';

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
	  this.customerForm = this.formBuilder.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'gender': [null, Validators.required],
      'birthday': [null, Validators.required],
      'lastContact': [null, Validators.required],
      'customerLifetimeValue': [null, Validators.required]
    });
    this.getCustomer(this.route.snapshot.params['id']);
  }


    /*** Get the Customer Details*/
    getCustomer(id) {
      this.api.getCustomer(id)
          .subscribe(data => {
            console.log(data);
            this.customer = data;
          });
    }

  onSubmit() {
    /*** On form submit update the customer details*/
	//let customer: object = {};
	console.log(document.getElementById('firstName'));
	if(document.getElementById('firstName').classList.contains('ng-dirty'))
		this.customer['name']['first']=this.customerForm.value.firstName;
	if(document.getElementById('lastName').classList.contains('ng-dirty'))
		this.customer['name']['last']=this.customerForm.value.lastName;
    /*this.customer['name'] = {
      first: this.customerForm.value.firstName,
      last: this.customerForm.value.lastName
    };*/
	if(document.getElementById('gender').classList.contains('ng-dirty'))
    this.customer['gender'] = this.customerForm.value.gender;
    if(document.getElementById('birthday').classList.contains('ng-dirty'))
    this.customer['birthday'] = this.customerForm.value.birthday;
	if(document.getElementById('lastContact').classList.contains('ng-dirty'))
    this.customer['lastContact'] = this.customerForm.value.lastContact;
    if(document.getElementById('customerLifetimeValue').classList.contains('ng-dirty'))
    this.customer['customerLifetimeValue'] = this.customerForm.value.customerLifetimeValue;
	this.api.updateCustomer(this.route.snapshot.params['id'], this.customer)
      .subscribe(res => {
		  
        this.router.navigate(['/customer-details', this.route.snapshot.params['id']]);
      }, (err) => {
        console.log('test err')
        console.log(err);
      });
  }
}
