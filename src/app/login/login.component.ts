import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hd = false;
  constructor(private loginServ: LoginService, private router: Router) {}

  ngOnInit(): void {}

  onLogin(identifiants) {
    this.loginServ.seConnecter(identifiants).subscribe(
      (response) => {
        console.log(response);
        localStorage.setItem('mytoken', response['token']); //response.token
        this.router.navigateByUrl('/cv');
      },
      (error) => {
        this.hd = true;
        console.log('Problem with login', error);
      }
    );
  }
}
