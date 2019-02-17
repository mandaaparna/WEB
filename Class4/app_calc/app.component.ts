import { Component } from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CalculatorICP';
   v = [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', '/', 0, '=', 'C'];
   l = 0;
   v1 = [];
   val_1 = '';
   eqn = '';
   v_id = '';
   constructor() {
  }
  val1(i) {
    this.v_id = (i.target as Element).id;
    switch (this.v_id) {
      case '+': {
        // this.v1.push(this.val_1);
        // this.val_1 = this.v1[ this.l ];
        this.v1.push(this.val_1);
        this.v1.push('+');
        this.eqn = this.eqn + this.val_1 + '+';
        this.val_1 = '';
        break;
      }
      case '-': {
        this.v1.push(this.val_1);
        this.v1.push('-');
        this.eqn = this.eqn + this.val_1 + '-';
        this.val_1 = '';
        break;
      }

      case '*': {
        this.v1.push(this.val_1);
        this.v1.push('*');
        this.eqn = this.eqn + this.val_1 + '*';
        this.val_1 = '';
        break;
      }
      case '/': {
        this.v1.push(this.val_1);
        this.v1.push('/');
        this.eqn = this.eqn + this.val_1 + '/';
        this.val_1 = '';
        break;
      }
      case 'C': {
        this.val_1 = '';
        this.eqn = '';
          this.v1 = [];
        break;

      }
      case '=': {
        this.v1.push(this.val_1);
        this.eq();
         this.v1 = [];
        // this.v1.push(this.eqn)
        break;
      }
      default: {
        this.val_1 = this.val_1 + this.v_id;
        break;
      }
    }
  }
  add(a, b) {
    return parseInt(a, 10) + parseInt(b, 10);
  }
  sub(a, b) {
    return parseInt(a, 10) - parseInt(b, 10);
  }
  mul(a, b) {
    return parseInt(a, 10) * parseInt(b, 10);
  }
  div(a, b) {
    return parseInt(a, 10) / parseInt(b, 10);
  }
  eq () {
    for (let i = 0 ; i < this.v1.length ; i++ ) {
      if (this.v1[i] === '*') {
        this.v1[i - 1] = this.mul(this.v1[i - 1], this.v1[i + 1]) ;
        this.v1.splice(i, 2);
        i = i - 2;
      }
      if (this.v1[i] === '/' ) {
        this.v1[i - 1] = this.div(this.v1[i - 1], this.v1[i + 1]) ;
        this.v1.splice(i, 2);
        i = i - 2;
      }
    }
    for ( let i = 0 ; i < this.v1.length ; i++ ) {
      if (this.v1[i] === '+') {
        this.v1[i - 1] = this.add(this.v1[i - 1], this.v1[i + 1]) ;
        this.v1.splice(i, 2);
        i = i - 2;
      }
      if (this.v1[i] === '-' ) {
        this.v1[i - 1] = this.sub(this.v1[i - 1], this.v1[i + 1]) ;
        this.v1.splice(i, 2);
        i = i - 2;
      }
    }
    // this.val_1  = this.v1[this.v1.length - 1]
    this.val_1  = this.v1[0]
    this.eqn = '';
  }
}
