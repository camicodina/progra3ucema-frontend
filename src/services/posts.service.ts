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
    return this.apiService.getPostsRecientes();
  }

  crearPost(texto: string, username: string, idEtiqueta: string) {
    return this.apiService.postPost(texto, username, idEtiqueta)
  }

  likePost(id: number) {
    return this.apiService.postLikePost(id)
  }

  UnlikePost(id: number) {
    return this.apiService.postUnlikePost(id)
  }

  borrarPost(id: number, usersame: string) {
    return this.apiService.deletePost(id, usersame)
  }
}
