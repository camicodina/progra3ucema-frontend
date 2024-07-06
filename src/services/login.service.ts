import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';
import mockService from './mockService';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  _url : string = 'http://localhost:8081/api/'
  

  constructor(private http: HttpClient) { }

  login(username: any, password: any): Observable<Usuario> {
    const headers = { 'Authorization': 'Basic ' + btoa(username + ":" + password)}
    const obs: Observable<Usuario> = this.http.get<Usuario>(this._url + "usuario", {headers});
    obs.subscribe((usuario) => {
      localStorage.setItem('user', btoa(username + ":" + password))
      localStorage.setItem('username', usuario.getUsuario())
    })
    return obs
  }

}
