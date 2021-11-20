import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer/customer.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2/src/sweetalert2.js';


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
    this.customerService.createCustomer(customerForm.value).subscribe(() => {
      customerForm.reset();
      this.router.navigate(['/customers']);
      this.sweetAlert();
    });
  }

  sweetAlert() {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      titleText: 'Tạo Mới Thành Công',
      showConfirmButton: false,
      timer: 3000
    });
  }
}
