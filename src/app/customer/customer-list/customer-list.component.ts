import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  @Input()
  customers: Customer[] = [];
  isCreate: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  addNewCustomer(customer) {
    this.customers.push(customer);
  }

  showFormCreate() {
    this.isCreate = true;
  }
}
