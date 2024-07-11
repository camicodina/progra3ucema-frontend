import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';
import mockService from './mockService';
import { ApiService } from './api.service';
import { ResponseLoginDTO } from '../dto/ResponseLoginDto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  _url : string = 'http://localhost:8081/api/'
  

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

  changeLoggingUser() {
    this.isLoggedUser = true
  }

}
