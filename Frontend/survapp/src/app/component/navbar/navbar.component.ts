import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  username: any;
  email: any;
  login: any;
  usertpe: any;
coordinator=false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.email = localStorage.getItem('email');
    this.login = localStorage.getItem('islogged');
    this.usertpe = localStorage.getItem('usertype');
    
  }
User(){
  if(this.usertpe==='coordinator'){
    return this.coordinator=true;
  }
  else{
    return this.coordinator=false;
  }
}

  signout(): void {
    localStorage.clear();
    this.router.navigate(['signin']);
  }
}
