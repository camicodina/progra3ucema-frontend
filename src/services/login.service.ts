import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '../models/Usuario';
import { ApiService } from './api.service';
import { ResponseLoginDTO } from '../dto/ResponseLoginDto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apiService: ApiService) { }

  isLoggedUser = false

  login(username: any, password: any): Observable<ResponseLoginDTO> {
    let response  = this.apiService.login(username, password)
    response.subscribe(
      (jwt) => {
        localStorage.setItem('token', jwt.token!)
        this.isLoggedUser = true
      }
    )
    response.subscribe(this.changeLoggingUser)
    return response
  }

  isUserLogin(): Observable<boolean> {
    this.isLoggedUser = !!localStorage.getItem("token")
    return of(this.isLoggedUser)
  }

  logout() {
    localStorage.removeItem('token')
    this.isLoggedUser = false
  }

  changeLoggingUser() {
    this.isLoggedUser = true
  }

}
