import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: any

  error: string = "";

  formLogin: FormGroup = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private loginService: LoginService, private router: Router) { }

  login(): void {
    const val = this.formLogin.value
    this.loginService.login(val.usuario, val.password).subscribe(
      (jwt) => {
        if (jwt.token === null) {
          this.error = "Usuario o pass invalidos"
          return;
        }
        this.formLogin.reset()
        this.router.navigate(['/home'])

      }
    )
  }
}
