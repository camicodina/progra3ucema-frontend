import { Post } from './Post';
import { Usuario } from './Usuario'

export class Profesor extends Usuario {

    constructor(id: number, usuario: string, nombre: string, email: string, password: string, posts: Post[], role: string) {
        super(id, usuario, nombre, email, password, posts, role);
    }
}