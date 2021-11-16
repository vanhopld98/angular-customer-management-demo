import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customer} from '../../customer';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  @Output()
  eventEmitter: EventEmitter<Customer> = new EventEmitter<Customer>();
  @Input()
  customer: Customer = {};

  constructor() {
  }

  ngOnInit() {
  }

  submit() {
    this.eventEmitter.emit(this.customer);
    this.customer = {};
  }
}
