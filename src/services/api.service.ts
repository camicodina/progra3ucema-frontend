import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ResponseLoginDTO } from '../dto/ResponseLoginDto';
import { Usuario } from '../models/Usuario';
import { Profesor } from '../models/Profesor';
import { Post } from '../models/Post';
import { Etiqueta } from '../models/Etiqueta';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  _url: string = 'http://localhost:8081/api/'

  constructor(private http: HttpClient) { }

  getToken(): string | null {
    return localStorage.getItem('token') || null
  }

  login(username: string, password: string): Observable<ResponseLoginDTO> {
    return this.http.post<ResponseLoginDTO>(this._url + 'auth/login', { username: username, password: password })
  }

  //USUARIO
  postAlumno(username: string, password: string, email: string, name: string, año: string, carrera: string): Observable<Usuario> {
    return this.http.post<Usuario>(this._url + 'usuario/alumno', {
      username,
      password,
      email,
      name,
      año,
      carrera
    });
  }

  postProfesor(username: string, password: string, email: string, name: string): Observable<Profesor> {
    return this.http.post<Profesor>(this._url + 'usuario/profesor', {
      username,
      password,
      email,
      name
    });
  }

  putUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this._url + 'usuario', usuario);
  }

  deleteUsuario(usuario: Usuario): Observable<void> {
    return this.http.delete<void>(this._url + 'usuario', {
      body: usuario
    });
  }

  getUsuarioByUsername(username: string): Observable<Usuario> {
    return this.http.get<Usuario>(this._url + 'usuario/username/' + username);
  }

  getUsuarioById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(this._url + 'usuario/' + id);
  }

  getUsuarioInfo(): Observable<Usuario> {
    return this.http.get<Usuario>(this._url + 'usuario/info');
  }

  getPerfilUsuario(username: string): Observable<any> {
    return this.http.get<any>(this._url + 'usuario/perfil/' + username);
  }

  postSeguidor({ posteador, subscriptor }: { posteador: number, subscriptor: number }): Observable<any> {
    return this.http.post<any>(this._url + `${subscriptor}/follow/${posteador}`, {});
  }

  //POST
  postPost(texto: string, username: string, idEtiqueta: string) {
    return this.http.post<Post>(this._url + `posts?texto=${texto}&username=${username}&etiquetaId=${idEtiqueta}`, {});
  }

  deletePost(id: number, username: string) {
    return this.http.delete<void>(this._url + `posts/${id}?username=${username}`);
  }

  getPostByUsername(username: string) {
    return this.http.get<Post[]>(this._url + 'posts/user/' + username);
  }

  getPostsByEtiqueta(idEtiqueta: number) {
    return this.http.get<Post[]>(this._url + 'posts/etiqueta/' + idEtiqueta);
  }

  getPostsRecientes() {
    return this.http.get<Post[]>(this._url + 'posts/recientes');
  }

  postLikePost(id: number) {
    return this.http.post<any>(this._url + 'posts/' + id + '/like', {});
  }

  postUnlikePost(id: number) {
    return this.http.post<any>(this._url + 'posts/' + id + '/unlike', {});
  }

  //Etiqueta
  postEtiqueta(nombre: string, username: string) {
    return this.http.post<Etiqueta>(this._url + `etiquetas?nombre=${nombre}&usuario=${username}`, {});
  }

  getEtiquetaById(id: number) {
    return this.http.get<Etiqueta>(this._url + 'etiquetas/' + id);
  }

  getEtiquetas() {
    return this.http.get<Etiqueta[]>(this._url + 'etiquetas');
  }

  getEtiquetaByNombre(nombre: string) {
    return this.http.get<Etiqueta>(this._url + 'etiquetas/nombre/' + nombre);
  }
}