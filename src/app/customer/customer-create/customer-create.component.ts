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
  avatar;

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit() {
  }

  submit(customerForm) {
    const formData = new FormData();
    formData.append('avatar', this.avatar);
    formData.append('firstName', customerForm.value.firstName);
    formData.append('lastName', customerForm.value.lastName);
    formData.append('phone', customerForm.value.phone);
    formData.append('address', customerForm.value.address);
    this.customerService.createCustomer(formData).subscribe(() => {
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

  handleFileInput(event) {
    this.avatar = (event.target).files[0];
  }
}
