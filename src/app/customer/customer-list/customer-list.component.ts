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
    this.getAllCustomer(0);
  }

  getAllCustomer(page: number) {
    if (this.search == null) {
      this.search = '';
    }
    this.customerService.getAll(page, this.search).subscribe((data: any) => {
      this.totalPage = [];
      this.customers = data.content;
      for (let i = 0; i < data.totalPages; i++) {
        this.totalPage.push(i);
      }
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
      this.getAllCustomer(0);
      this.sweetAlertDelete();
    });
  }

  sort(key) {
    this.key = key;
    this.caseInsensitive = !this.caseInsensitive;
  }

  nextPage() {
    this.page++;
    this.getAllCustomer(this.page);
  }

  previousPage() {
    this.page--;
    this.getAllCustomer(this.page);
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
    this.getAllCustomer(page);
  }
}
