import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '../models/Usuario';
import { ApiService } from './api.service';
import { ResponseLoginDTO } from '../dto/ResponseLoginDto';

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
