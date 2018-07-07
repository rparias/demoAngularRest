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

7. Vamos a modificar el archivo app.module.ts y lo vamos a dejar de la siguiente manera:
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { ListCustomerComponent } from './components/list-customer/list-customer.component';

// Importar rutas
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

// Importar ReactiveFormsModule para los formularios
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    ListCustomerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

8. Vamos a modificar el archivo app.component.html y lo vamos a dejar de la siguiente manera:
```typescript
<div class="container mt-5">
    <router-outlet></router-outlet>
</div>
```

9. Vamos a modificar el archivo index.html y lo vamos a dejar de la siguiente manera:
```typescript
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>ClientesREST</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
    crossorigin="anonymous">
</head>

<body>
  <app-root></app-root>

  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
    crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
    crossorigin="anonymous"></script>
</body>

</html>
```

10. Dentro de app > model > customer.ts vamos a escribir el siguiente código:
```typescript
export class Customer {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}
```

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



