import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // define list of items
  items = [];
  l = 1;
  p = '';
  v_id1 = -1;
  v_id = '';
  remov_elem = [];
  comp = 0;
  pen = 0;

  // Write code to push new item
  submitNewItem() {
     this.p = document.getElementById('push_val').value ;
this.items.push({'text' : this.p , status : 'fa fa-md fa-clock-o', id  : this.l });
this.l = this.l + 1;
    document.getElementById('push_val').value = '';
    this.cal_count();
  }

  cal_count() {
    this.comp = 0;
    this.pen = 0;
    for ( let i = 0 ; i < this.items.length ; i++ ) {
      if (this.items[i].status.toString() === 'fa fa-md fa-clock-o') {
        this.pen = this.pen + 1;
      }
      if (this.items[i].status.toString() === 'fa fa-md fa-check-square-o') {
        this.comp = this.comp + 1;

      }

    }
  }
  // Write code to complete item
  completeItem(i) {
    this.v_id = (i.target as Element).id;
    for (let i = 0; i < this.items.length ; i++) {
      if ( this.items[i].id.toString() === this.v_id.toString() ) {
        this.v_id1 = i;
      }

    }
    if ( this.items[this.v_id1].status.toString() === 'fa fa-md fa-clock-o') {
      this.items[this.v_id1].status = 'fa fa-md fa-check-square-o';
    }
    this.cal_count();

  }


  // Write code to delete item
  deleteItem(i) {
    this.v_id = (i.target as Element).id;
    for (let i = 0; i < this.items.length ; i++) {
       if ( this.items[i].id.toString() === this.v_id.toString() ) {
         this.v_id1 = i;
       }

    }
     this.items.splice(this.v_id1, 1);
    this.cal_count();
  }

}
