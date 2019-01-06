import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loginModel: any = {};


  constructor( public authService: AuthService,
    private alertify: AlertifyService,
    private router: Router ) { }

  ngOnInit() {
  }


  login() {
    this.authService.login(this.loginModel)
      .subscribe(next => {
        console.log('====================================');
        console.log('LOGGED IN!');
        console.log('====================================');
        this.alertify.success('Logged in successful');
      }
      , error => {
        this.alertify.error(error);
        console.log('====================================');
        console.log('LOGGIN ERROR', error);
        console.log('====================================');
      }, () => {
        this.router.navigate(['/members']);
      }
      );
  }

  loggedIn() {
    // const token = localStorage.getItem('token');
    // return !!token;
    return this.authService.loggedIn();
  }

  logOut() {
    localStorage.removeItem('token');
    console.log('====================================');
    console.log('LOGGED OUT!');
    console.log('====================================');
    this.alertify.warning('Logged out');
    this.router.navigate(['/home']);
  }
}


