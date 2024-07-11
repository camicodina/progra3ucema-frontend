import { Etiqueta } from './Etiqueta';
import { Usuario } from './Usuario'

export class Post {
    id: number;
    texto: string;
    etiqueta: Etiqueta;
    autor: Usuario;
    likes: Usuario[]
    
    constructor(id: number, texto: string, etiqueta: Etiqueta, autor: Usuario, likes: Usuario[]) {
        this.id = id;
        this.texto = texto;
        this.etiqueta = etiqueta;
        this.autor = autor;
        this.likes = likes;
    }
}