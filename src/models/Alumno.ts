import { Post } from './Post';
import { Usuario } from './Usuario'

export class Alumno extends Usuario {

    carrera: string;
    año: string;

    constructor(id: number, usuario: string, nombre: string, email: string, password: string, posts: Post[], role: string, carrera: string, año: string) {
        super(id, usuario, nombre, email, password, posts, role);
        this.carrera = carrera;
        this.año = año;
    }
}