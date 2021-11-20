import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customer} from '../../customer';
import {CustomerService} from '../../service/customer/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2/src/sweetalert2.js';

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
      this.sweetAlert();
    });
  }

  sweetAlert() {
    Swal.fire({
      toast: true,
      position: 'top-right',
      icon: 'success',
      titleText: 'Cập Nhật Thành Công',
      showConfirmButton: false,
      timer: 3000
    });
  }
}
