import { Component } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  usuario?: Usuario
  username: string = ""

  constructor(private usuarioService: UsuarioService, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.usuarioService.obtenerInfoDeUsuario().subscribe(
      (usuario:Usuario) => {
        if (usuario) { 
          this.usuario = usuario; 
          console.log(usuario)
        }
      }
    )
  }

  logout(){
    this.loginService.logout()
    this.router.navigate(['/login'])
  }
}
