import { Component } from '@angular/core';
import { Muro } from '../../models/Muro';
import { Post } from '../../models/Post';
import mockService from '../../services/mockService';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  formPost: FormGroup = new FormGroup({
    texto: new FormControl('', [Validators.required]),
    etiqueta: new FormControl('', [Validators.required])
  })
  
  muro: Muro = new Muro(1, [])
  posts: Post[] = []

  ngOnInit(): void {
    this.muro = mockService.getMuro()
    this.posts = this.muro.getPosts()
    console.log(this.posts)
  }

  agregarPost(){
    
  }
}
