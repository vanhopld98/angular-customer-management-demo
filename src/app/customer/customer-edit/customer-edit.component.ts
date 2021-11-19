import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customer} from '../../customer';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer: Customer = {};
  index;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.index = +paramMap.get('id');
      // this.customer = this.customerService.getById(this.index);
    });
  }


  ngOnInit() {
  }

  submitEdit(formEditCustomer) {
    this.customerService.update(this.index, formEditCustomer.value);
    this.router.navigate(['/customers']);
  }
}
