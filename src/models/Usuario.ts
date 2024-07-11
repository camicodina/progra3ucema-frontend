import { Post } from './Post'

export abstract class Usuario {
    id: number;
    username: string;
    name: string;
    email: string;
    password: string;
    posts: Post[];
    role: string;

    constructor(id: number, username: string, name: string, email: string, password: string, posts: Post[], role: string) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.email = email;
        this.password = password;
        this.posts = posts;
        this.role = role;
    }

    agregarPost(post: Post): void {
        this.posts.push(post);
    }

    eliminarPost(post: Post): void {
        this.posts = this.posts.filter(l => l.id !== post.id);
    }
}