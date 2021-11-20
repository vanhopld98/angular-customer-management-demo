import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../../customer';
import {CustomerService} from '../../service/customer/customer.service';
import Swal from 'sweetalert2/src/sweetalert2.js';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  id;
  customer;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.customerService.getAll().subscribe((data: any) => {
      this.customers = data.content;
    });
  }

  findCustomerById(id) {
    this.id = id;
  }

  findNameInModal(id) {
    this.customerService.getById(id).subscribe((data: any) => {
      this.customer = data;
      document.getElementById('name').innerHTML = this.customer.firstName + ' ' + this.customer.lastName;
    });
  }

  submitDelete() {
    this.customerService.delete(this.id).subscribe(() => {
      this.customerService.getAll().subscribe((data: any) => {
        this.customers = data.content;
        this.sweetAlertDelete();
      });
    });
  }

  sweetAlertDelete() {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      titleText: 'Xóa Thành Công',
      showConfirmButton: false,
      timer: 3000
    });
  }
}
