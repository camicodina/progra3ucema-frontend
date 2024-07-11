import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Alumno } from '../../models/Alumno';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  error: string = "";

  constructor(private usuarioService: UsuarioService, private router: Router) { }
  formRegistro: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    role: new FormControl('alumno', [Validators.required]), // Campo select para el rol
    carrera: new FormControl('', []),
    año: new FormControl('', [])
  })

  // Método para verificar si el valor del select es "alumno"
  isAlumno(): boolean {
    return this.formRegistro.get('role')?.value === 'alumno';
  }
  submitFormRegistro() {
    if (this.formRegistro.valid) {
      const formValue = this.formRegistro.value;

      if (this.isAlumno()) {
        // Llamar al servicio API para registrar al usuario
        this.usuarioService.crearAlumno(formValue.username, formValue.password, formValue.email, formValue.name, formValue.año, formValue.carrera).subscribe(
          response => {
            console.log('Registro exitoso', response);
            // Redirigir al usuario a otra página, por ejemplo, a la página de login
            this.router.navigate(['/login']);
          },
          error => {
            this.error = "Ocurrio un error, por favor intente nuevamente"
          }
        );
      } else {
        // Llamar al servicio API para registrar al usuario
        this.usuarioService.crearProfesor(formValue.username, formValue.password, formValue.email, formValue.name).subscribe(
          response => {
            console.log('Registro exitoso', response);
            // Redirigir al usuario a otra página, por ejemplo, a la página de login
            this.router.navigate(['/login']);
          },
          error => {
            this.error = "Ocurrio un error, por favor intente nuevamente"
          }
        );
      }

    } else {
      this.error = "El formulario no es valido, revise los datos"
    }
  }

}
