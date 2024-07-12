import { Component } from '@angular/core';
import { Post } from '../../models/Post';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Etiqueta } from '../../models/Etiqueta';
import { EtiquetasService } from '../../services/etiquetas.service';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private usuarioService: UsuarioService, private postsService: PostsService, private etiquetasSevice: EtiquetasService, private router: Router) { }

  usuario?: Usuario
  etiquetas: Etiqueta[] = []
  posts: Post[] = []

  formPost: FormGroup = new FormGroup({
    texto: new FormControl('', [Validators.required]),
    etiqueta: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
    this.etiquetasSevice.obtenerEtiquetas().subscribe((ets: Etiqueta[]) => {
      this.etiquetas = ets;
    })

    this.usuarioService.obtenerInfoDeUsuario().pipe(
      switchMap((usuario: Usuario) => {
        if (usuario) {
          this.usuario = usuario;
          console.log(usuario);
          return this.postsService.obtenerPostsPorUsuario(usuario.username);
        } else {
          return of([]);
        }
      })
    ).subscribe((posts: Post[]) => {
      console.log(posts);
      this.posts = posts;
    });
  }

  agregarPost() {
    if (this.formPost.valid && this.usuario) {
      const formVals = this.formPost.value
      this.postsService.crearPost(formVals.texto, this.usuario.username, formVals.etiqueta).subscribe(() => {
        this.refreshPosts();
      });
    }
  }

  likePost(p: Post) {
    this.postsService.likePost(p.id).subscribe(() => {
      this.refreshPosts();
    });
  }

  unlikePost(p: Post) {
    this.postsService.UnlikePost(p.id).subscribe(() => {
      this.refreshPosts();
    });
  }

  deletePost(p: Post) {
    if(!this.usuario) return
    this.postsService.borrarPost(p.id, this.usuario.username).subscribe(() => {
      this.refreshPosts();
    });
  }

  isAlumno() {
    return this.usuario?.role === "ALUMNO"
  }

  private refreshPosts() {
    if (this.usuario) {
      this.postsService.obtenerPostsPorUsuario(this.usuario.username).subscribe((posts: Post[]) => {
        this.posts = posts;
      });
    }
  }
}
