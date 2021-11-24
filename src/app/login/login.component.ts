import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../service/authentication/authentication.service';
import Swal from 'sweetalert2/src/sweetalert2.js';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit() {
  }

  login(formLogin) {
    this.authenticationService.login(formLogin.value.username, formLogin.value.password).subscribe(() => {
      this.sweetAlert();
      this.router.navigate(['/customers']);
    });
  }

  sweetAlert() {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      titleText: 'Đăng Nhập Thành Công',
      showConfirmButton: false,
      timer: 3000
    });
  }
}
