import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '../models/Usuario';
import { ApiService } from './api.service';
import { ResponseLoginDTO } from '../dto/ResponseLoginDto';
import { Alumno } from '../models/Alumno';
import { Profesor } from '../models/Profesor';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(private apiService: ApiService) { }

    obtenerUsernameLocal() {
        return localStorage.getItem('usersame')
    }

    obtenerRoleLocal() {
        return localStorage.getItem('role')
    }

    crearAlumno(username: string, password: string, email: string, name: string, año: string, carrera: string) {
        return this.apiService.postAlumno(username, password, email, name, año, carrera)
    }

    crearProfesor(username: string, password: string, email: string, name: string) {
        return this.apiService.postProfesor(username, password, email, name)
    }

    obtenerInfoDeUsuario(): Observable<Usuario> {
        let response = this.apiService.getUsuarioInfo()
        response.subscribe(
            (usuario: Usuario) => {
                localStorage.setItem('usersame', usuario.username)
                localStorage.setItem('role', usuario.role)
            }
        )
        return response
    }



}
