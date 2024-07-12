<p align="right"><img width=10% src="https://ucema.edu.ar/themes/ucema_bootstrap/logo.svg"></p>


# **TP de Programación III - Frontend**

_Trabajo práctico de Programación III, Ingeniería Infotmática, Universidad del CEMA._

> [Link al repositorio de Github](https://github.com/camicodina/progra3ucema-frontend)


## **Objetivos** 📌

El objetivo de este trabajo es crear un desarrollo web completo, que comprende:

1) Un backend funcional, que implemente persistencia y exponga la información por medio de una interfaz API RestFul;

2) Un frontend funcional, que obtenga y muestre correctamente la información proporcionada por el backend.


## **El desarrollo** 🚀

El proyecto es una implementación de un foro donde alumnos y profesores pueden compartir material de ciencia y tecnología (por ejemplo, papers y noticias interesantes) y contenido útil para las cursadas. Los profesores tienen la capacidad de borrar contenido ajeno si lo consideran necesario.

Funcionalidades: 

- Creación de usuarios: profesores (usuarios con permisos de administrador) y alumnos (usuarios comunes);
- Gestión de Posts: Crear, borrar y listar posts asociados a etiquetas.
- Sistema de Etiquetas: Los profesores pueden crear nuevas etiquetas para categorizar los posts.


## **Modo de Uso** 📝

Este proyecto fue creado con  [Angular CLI](https://github.com/angular/angular-cli) version 18.0.6.

Para probar la app, se deben de tener instalados los siguientes componentes:

> Frontend

- [Node.js](https://nodejs.org/) (versión 14.x o superior)
- [npm](https://www.npmjs.com/) (versión 6.x o superior)
- [Angular CLI](https://angular.io/cli) (versión 18.0.6)

> Backend

- [Java JDK 21](https://www.oracle.com/ar/java/technologies/downloads/#jdk21-windows)
- [MySQL Server](https://dev.mysql.com/downloads/mysql/) (version 8.X)
- [Apache Maven](https://maven.apache.org/download.cgi) (version 3.9.8)

Para que el frontend funcione correctamente, primero [se debe inicializar el backend](https://github.com/camicodina/progra3ucema-backend) siguiendo estos pasos:

1. Clonar el repositorio del backend:

    ```bash
    git clone https://github.com/camicodina/progra3ucema-backend.git
    ```

2. Navegar al directorio del proyecto clonado:

    ```bash
    cd <DIRECTORIO_DEL_BACKEND>
    ```

3. Instalar las dependencias necesarias:

    ```bash
    mvn clean install
    ```

4. Iniciar el servidor del backend:

    ```bash
    mvn spring-boot:run
    ```

Finalmente, previo a inicializar el Development Server se debe ejecutar el siguiente comando:

```bash
    npm install
    ```

### Development server

Run `ng serve` or `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
