import { Component, Input, input } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { Alumno } from '../../models/Alumno';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  @Input() usuario!: Usuario | undefined;

  getUsername(): string {
    return this.usuario?.username || "-";
  }

  getName(): string {
    return this.usuario?.name || "-";
  }

  getEmail(): string {
    return this.usuario?.email || "-";
  }

  getCarrera(): string {
    return (this.usuario as Alumno)?.carrera || "-";
  }

  getAnio(): string {
    return (this.usuario as Alumno)?.año || "-";
  }

  shouldShowCarrera(): boolean {
    return  (this.usuario as Alumno)?.carrera !== undefined
  }

  shouldShowAnio(): boolean {
    return  (this.usuario as Alumno)?.año !== undefined
  }
}
