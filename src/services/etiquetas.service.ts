import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '../models/Usuario';
import { ApiService } from './api.service';
import { ResponseLoginDTO } from '../dto/ResponseLoginDto';
import { Post } from '../models/Post';
import { Etiqueta } from '../models/Etiqueta';

@Injectable({
  providedIn: 'root'
})
export class EtiquetasService {

  constructor(private apiService: ApiService) { }

  obtenerEtiquetas() {
    return this.apiService.getEtiquetas();
  }

  crearEtiqueta(etiqueta: Etiqueta) {
    this.apiService.postEtiqueta(etiqueta)
  }
}