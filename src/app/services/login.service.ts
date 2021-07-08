import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  link = 'http://localhost:3000/auth';
  constructor(private http: HttpClient) {}

  seConnecter(identifiants) {
    return this.http.post(`${this.link}/login`, identifiants);
  }

  Inscription(identifiants) {
    return this.http.post(`${this.link}/register`, identifiants);
  }

  isLogged() {
    let token = localStorage.getItem('mytoken');
    return !!token;
  }

  seDeconnecter() {
    localStorage.removeItem('mytoken');
  }
}
