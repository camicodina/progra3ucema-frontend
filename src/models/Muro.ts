import { Post } from './Post';

export class Muro {
    private id: number;
    private posts: Post[];
    
    constructor(id: number, posts: Post[]) {
        this.id = id;
        this.posts = posts;
    }

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
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
        this.posts = this.posts.filter(p => p.getId() !== post.getId());
    }
}