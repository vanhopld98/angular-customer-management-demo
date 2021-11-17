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
  isFormCreate = false;
  isFormEdit = false;
  index = -1;

  constructor() {
  }

  ngOnInit() {
  }

  addNewCustomer(customer) {
    this.customers.push(customer);
    this.isFormCreate = !this.isFormCreate;
  }

  editCustomer(customer) {
    this.customers[this.index] = customer;
    this.isFormEdit = !this.isFormEdit;
  }

  showFormCreate() {
    this.isFormCreate = !this.isFormCreate;
  }

  showFormEdit(i: number) {
    this.isFormEdit = !this.isFormEdit;
    this.index = i;
  }

}
