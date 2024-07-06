import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  _url : string = 'http://localhost:8081/api/'

  constructor(private http: HttpClient) { }

  getposts() : Observable<Post[]> {
    const base64 = localStorage.getItem('user');
    const headers = { 'Authorization': 'Basic ' + base64}
    return this.http.get<Post[]>(this._url + 'prestamo/misprestamos', {headers})
  }
}
