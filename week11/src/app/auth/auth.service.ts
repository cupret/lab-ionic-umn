import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;

  constructor(private http: HttpClient) { }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+environment.fireBaseAPIKey, {email, password, returnSecureToken: true});
  }

  login(email: string, password: string) {
    this.isAuthenticated = true;
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+environment.fireBaseAPIKey, {email, password, returnSecureToken: true});
  }

  logout() {
    //firebase logout API here
    this.isAuthenticated = false;
    console.log(this.isAuthenticated);
  }
}
