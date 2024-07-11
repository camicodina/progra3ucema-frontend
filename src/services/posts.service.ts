import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '../models/Usuario';
import { ApiService } from './api.service';
import { ResponseLoginDTO } from '../dto/ResponseLoginDto';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private apiService: ApiService) { }

  obtenerPostsPorUsuario(username: string) {
    return this.apiService.getPostByUsername(username);
  }

  crearPost(post: Post) {
    this.apiService.postPost(post)
  }
}
