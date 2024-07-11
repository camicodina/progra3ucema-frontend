import { Post } from './Post';
import { Usuario } from './Usuario'

export class Estudiante extends Usuario {

    private carrera: string;
    private año: string;


    constructor(id: number, usuario: string, nombre: string, email: string, password: string, posts: Post[], carrera: string, año: string) {
        super(id, usuario, nombre, email, password, posts);
        this.carrera = carrera;
        this.año = año;
    }


    getCarrera(): string {
        return this.carrera;
    }

    setCarrera(carrera: string): void {
        this.carrera = carrera;
    }

    getAño(): string {
        return this.año;
    }

    setAño(año: string): void {
        this.año = año;
    }
}