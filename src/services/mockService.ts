import { Etiqueta } from "../models/Etiqueta";
import { Muro } from "../models/Muro";
import { Post } from "../models/Post";
import { Profesor } from "../models/Profesor";
import { Usuario } from "../models/Usuario";

class MockService {
    private userRoot: Profesor = new Profesor(1, "profesor girafales", "don ramon", "profesor@test.com", "1234", [])
    private etiqueta1: Etiqueta = new Etiqueta(1, "Comentario");
    private etiqueta2: Etiqueta = new Etiqueta(2, "Contenido");

    private usuarios: Usuario[] = [this.userRoot]
    private posts: Post[] = [new Post(1, "Post de prueba", this.etiqueta1, this.userRoot, [this.userRoot])]
    private etiquetas: Etiqueta[] = [this.etiqueta1, this.etiqueta2]

    private muro: Muro = new Muro(1, this.posts);

    login(email: string, pass: string) {
        let user = this.usuarios.find((u) => u.getEmail() === email && u.getContraseña() === pass)
        if (user) localStorage.setItem('username', user.getUsuario())
        return user
    }

    getUsuarios() {
        return this.usuarios
    }

    addUsuario(usuario: Usuario) {
        this.usuarios.push(usuario)
    }

    getPosts() {
        return this.posts
    }

    addPost(post: Post) {
        this.posts.push(post)
        this.muro.setPosts(this.posts)
    }

    getEtiquetas() {
        return this.etiquetas
    }

    addEtiqueta(etiqueta: Etiqueta) {
        this.etiquetas.push(etiqueta)
    }

    getMuro() {
        return this.muro
    }


}

const mockService = new MockService()

export default mockService;