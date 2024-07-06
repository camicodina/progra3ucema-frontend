import { Post } from './Post';
import { Usuario } from './Usuario'

export class Profesor extends Usuario {

    constructor(id: number, usuario: string, nombre: string, email: string, contraseña: string, posts: Post[]) {
        super(id, usuario, nombre, email, contraseña, posts);
    }
}