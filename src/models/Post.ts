import { Etiqueta } from './Etiqueta';
import { Usuario } from './Usuario'

export class Post {
    private id: number;
    private texto: string;
    private etiqueta: Etiqueta;
    private autor: Usuario;
    private likes: Usuario[]
    
    constructor(id: number, texto: string, etiqueta: Etiqueta, autor: Usuario, likes: Usuario[]) {
        this.id = id;
        this.texto = texto;
        this.etiqueta = etiqueta;
        this.autor = autor;
        this.likes = likes;
    }

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getTexto(): string {
        return this.texto;
    }

    setTexto(texto: string): void {
        this.texto = texto;
    }

    getEtiqueta(): Etiqueta {
        return this.etiqueta;
    }

    setEtiqueta(etiqueta: Etiqueta): void {
        this.etiqueta = etiqueta;
    }

    getAutor(): Usuario {
        return this.autor;
    }

    setAutor(Autor: Usuario): void {
        this.autor = Autor;
    }

    getLikes(): Usuario[] {
        return this.likes;
    }

    setLikes(likes: Usuario[]): void {
        this.likes = likes;
    }

    agregarLike(like: Usuario): void {
        this.likes.push(like);
    }

    eliminarLike(like: Usuario): void {
        this.likes = this.likes.filter(l => l.getId() !== like.getId());
    }
}