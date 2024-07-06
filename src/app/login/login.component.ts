import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import mockService from '../../services/mockService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario:any

  formLogin: FormGroup = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    contraseña: new FormControl('', [Validators.required])
  })

  constructor(private loginService:LoginService, private router: Router) {}

  login(): void {
    const val = this.formLogin.value
    const usuario = mockService.login(val.usuario, val.contraseña)
    if(!usuario) return
    this.router.navigate(['/home'])
    this.loginService.login(val.usuario, val.contraseña).subscribe(
      (usuario) => {
        this.router.navigate(['/home'])
      }
    )
  }
}
