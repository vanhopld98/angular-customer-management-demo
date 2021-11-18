import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customer} from '../../customer';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit() {
  }

  submit(customerForm) {
    this.customerService.createCustomer(customerForm.value);
    customerForm.reset();
    this.router.navigate(['/customers']);
  }
}
