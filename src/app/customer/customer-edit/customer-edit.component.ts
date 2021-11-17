import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customer} from '../../customer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  @Input()
  customer: Customer = {};
  @Output()
  eventEmitter: EventEmitter<Customer> = new EventEmitter<Customer>();

  constructor() {
  }

  ngOnInit() {
  }

  submitEdit(customerFormEdit) {
    this.eventEmitter.emit(customerFormEdit.value);
  }

}
