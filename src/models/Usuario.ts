import { Post } from './Post'

export abstract class Usuario {
    private id: number;
    private usuario: string;
    private nombre: string;
    private email: string;
    private contraseña: string;
    private posts: Post[];

    constructor(id: number, usuario: string, nombre: string, email: string, contraseña: string, posts: Post[]) {
        this.id = id;
        this.usuario = usuario;
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
        this.posts = posts;
    }

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getUsuario(): string {
        return this.usuario;
    }

    setUsuario(usuario: string): void {
        this.usuario = usuario;
    }

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    getContraseña(): string {
        return this.contraseña;
    }

    setContraseña(contraseña: string): void {
        this.contraseña = contraseña;
    }

    getPosts(): Post[] {
        return this.posts;
    }

    setPosts(posts: Post[]): void {
        this.posts = posts;
    }

    agregarPost(post: Post): void {
        this.posts.push(post);
    }

    eliminarPost(post: Post): void {
        this.posts = this.posts.filter(l => l.getId() !== post.getId());
    }
}