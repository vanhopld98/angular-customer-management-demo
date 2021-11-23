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
  search;
  page = 0;
  caseInsensitive: boolean;
  key = '';
  totalPage = [];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.getAllCustomer();
  }

  getAllCustomer() {
    this.customerService.getAll(this.page).subscribe((data: any) => {
      this.customers = data.content;
      this.totalPage = data.totalPages;
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
      this.getAllCustomer();
      this.sweetAlertDelete();
    });
  }

  sort(key) {
    this.key = key;
    this.caseInsensitive = !this.caseInsensitive;
  }

  nextPage() {
    this.page++;
    this.customerService.getAll(this.page).subscribe((data: any) => {
      this.customers = data.content;
    });
  }

  previousPage() {
    this.page--;
    this.customerService.getAll(this.page).subscribe((data: any) => {
      this.customers = data.content;
    });
  }

  hasPrevious() {
    return this.page > 0;
  }

  hasNext(totalPage) {
    return this.page < totalPage - 1;
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

  choosePage(page: number) {
    this.page = page;
    this.customerService.getAll(this.page).subscribe((data: any) => {
      this.customers = data.content;
    });
  }
}
