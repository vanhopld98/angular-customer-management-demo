import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../service/authentication/authentication.service';
import {UserToken} from '../userToken';

declare const $: any;

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.css']
})

export class SidebarLeftComponent implements OnInit {
  currentUser: UserToken = {};

  constructor(private authenticationService: AuthenticationService) {
    this.currentUser = authenticationService.currentUserValue;
  }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
  }
}
