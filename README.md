# Título del Proyecto

Proyecto para Backend Test: Desafío Envíame

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._



### Pre-requisitos 📋

- Docker
- Dockers-compose
- Disponer libre los puertos 5000 y 27017


### Instalación 🔧
Al ejecutar el comando se descargarán y crearán todos los paquetes necesarios.
```sh
docker-compose up
```

## Ejecutando las pruebas ⚙️

- Para las preguntas 1 y 2.
    - Se debe importar a postman el archivo ubicado en ./postman/EnviameTest.postman_collection.json
    - Se agregarán 2 carpetas en el postman Parcels y Auth
    - Desde Auth ejecutar signup y guardar el token generado. Los roles son admin y user.
    - Desde la carpeta Parcels se encuentra:
        - createParcel (get): Se pueden crear los envíos. El método de autenticación es bearer token, por lo que se le debe agregar el token entregado al momento de crear el usuario. Rol user y admin tienen acceso.
        - getParcels (get): Obtiene la lista de todos los envíos existentes. El método de autenticación es bearer token, por lo que se le debe agregar el token entregado al momento de crear el usuario. Rol user y admin tienen acceso.
        - getParcelByid (get): Busca un envío (id) que se pasa por parámetro en la URL. El método de autenticación es bearer token, por lo que se le debe agregar el token entregado al momento de crear el usuario. Rol user y admin tienen acceso.
        - updateParcelById (put): Se puede modificar uno o todos los datos del envío pasando por URL el id. El método de autenticación es bearer token, por lo que se le debe agregar el token entregado al momento de crear el usuario. Rol user y admin tienen acceso.
        - deleteParcelById (delete): Se elimina un envío, pasando el id por la URL. El método de autenticación es bearer token, por lo que se le debe agregar el token entregado al momento de crear el usuario. Rol admin tiene acceso.


- Para la pregunta 3 de debe ejecutar el comando 
        ```sh
        node test/test3.js
        ```
- Para la pregunta 4 de debe ejecutar el comando
        ```sh
        node test/test4.js
        ```
- Para la pregunta 5 de debe ejecutar el comando
        ```sh
        node test/test5.js
        ```
- Para la pregunta 6 de debe ejecutar el comando
        ```sh
        node test/test6.js
        ```
- Para la pregunta 7 se debe ejecutar el contenido del archivo test/test7.sql en un ambiente de SQL Server


## Construido con 🛠️

| Plugin | README |
| ------ | ------ |
| Nodejs | [https://nodejs.org/en/docs/][PlDb] |
| Docker | [https://www.docker.com/why-docker][PlGh] |


## Autores ✒️

* **Gustavo Cárdenas** 