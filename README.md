# ClientesREST - Consumiendo Servicios Web con Angular hacia Backend en Spring

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Empezar desde aquí

1. Es necesario tener instalado [NodeJs](https://nodejs.org/es/), [Angular](https://cli.angular.io/) y un Editor como [Visual Studio Code](https://code.visualstudio.com/download).

2. En una carpeta de nuestro sistema donde vamos a crear el proyecto escribimos lo siguiente:

`ng new clientesREST`

El proceso puede tardar unos minutos.

3. Abrimos Visual Studio Code, clic en File > Open Folder y escogemos la carpeta donde creamos el proyecto.

4. Abrimos la terminal de Visual Studio Code y escribimos los siguientes comandos:

`ng generate component components/add-customer --spec=false -is`

`ng generate component components/edit-customer --spec=false -is`

`ng generate component components/list-customer --spec=false -is`

`ng generate class model/customer`

`ng generate service services/customer --spec=false`

5. Al finalizar tendremos una estructura similar a esta:

![alt text][logo]

[logo]: https://i.gyazo.com/d9b3fbf61b095f10826d14fa4913be94.png "Estructura del proyecto"

6. En la carpeta app vamos a dar clic derecho > new file y lo vamos a llamar app.routes.ts, como se ve a continuación:

![alt text][logo1]

[logo1]: https://i.gyazo.com/776ff202808d37597dac747b4df16da6.png "Crear ruta"
![alt text][logo2]

[logo2]: https://i.gyazo.com/139fc74bb47ca4e1565b5ccfe4ded665.png "Crear ruta"


3. Ingresamos como root a MySQL y creamos un nuevo usuario, con las siguientes sentencias SQL:
```sql
CREATE USER 'springstudent'@'localhost' IDENTIFIED BY 'springstudent';
GRANT ALL PRIVILEGES ON * . * TO 'springstudent'@'localhost';
```

4. Descargamos el proyecto base desde el siguiente enlace:
https://udlaec-my.sharepoint.com/:u:/g/personal/ronald_arias_udla_edu_ec/EctAuYT1xhtPtQNRXT4Km8UBQSGrlbCUG3nb2CXvUGO1eA?e=Q7evTT

5. Abrimos Eclipse, STS, NetBeans o cualquier IDE Java que sea de su agrado para importar el proyecto descargado.

6. Agregamos la Clase CustomerRestController dentro del paquete controllers, como se ve en la siguiente imagen:
![alt text][logo]


8. Ejecutamos el proyecto de Spring, como se ve en la siguiente imagen:
![alt text][logo2]

[logo2]: https://i.gyazo.com/0ee676536da1f50600fd14338d531928.png "Ejecutar"



