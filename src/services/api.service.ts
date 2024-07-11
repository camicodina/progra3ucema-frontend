import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ResponseLoginDTO } from '../dto/ResponseLoginDto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  _url : string = 'http://localhost:8081/api/'

  constructor(private http:HttpClient) { }

    
    
  getToken() : string | null {
    return localStorage.getItem('token') || null
  }

  login(username: string, password: string): Observable<ResponseLoginDTO> {
    return this.http.post<ResponseLoginDTO>(this._url + 'auth/login', {username: username, password: password})
  }

 
}