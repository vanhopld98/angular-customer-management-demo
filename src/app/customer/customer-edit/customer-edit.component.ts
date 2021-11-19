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
  id: number;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
    });
  }

  ngOnInit() {
    this.customerService.getById(this.id).subscribe((data) => {
      this.customer = data;
    });
  }

  submitEdit(formEditCustomer) {
    this.customerService.update(this.id, formEditCustomer.value).subscribe(() => {
      this.router.navigate(['/customers']);
    });
  }
}
