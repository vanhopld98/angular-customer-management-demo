import {Injectable} from '@angular/core';
import {Customer} from '../customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [
    {
      id: 1,
      firstName: 'Nguyễn Văn',
      lastName: 'Hợp',
      phone: '0836886899',
      address: 'Liên Đàm'
    }
  ];

  constructor() {
  }

  getAll() {
    return this.customers;
  }

  getById(index: number) {
    return this.customers[index];
  }

  createCustomer(customer: Customer) {
    this.customers.push(customer);
  }

  update(index: number, customer: Customer) {
    this.customers[index] = customer;
  }

  delete(index: number) {
    this.customers.slice(index, 1);
  }
}
