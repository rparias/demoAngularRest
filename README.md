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

6. Visitar la página web [Sweet Alert 2](https://sweetalert2.github.io/#download) o escribir el siguiente comando:

`$ npm install sweetalert2`

7. En la carpeta app vamos a dar clic derecho > new file y lo vamos a llamar app.routes.ts, como se ve a continuación:

![alt text][logo1]

[logo1]: https://i.gyazo.com/776ff202808d37597dac747b4df16da6.png "Crear ruta"
![alt text][logo2]

[logo2]: https://i.gyazo.com/139fc74bb47ca4e1565b5ccfe4ded665.png "Crear ruta"

7.1. Agregamos el siguiente código en el archivo app.routes.ts:
```typescript
import { Routes } from '@angular/router';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { ListCustomerComponent } from './components/list-customer/list-customer.component';

export const ROUTES: Routes = [
    { path: 'add-customer', component: AddCustomerComponent },
    { path: 'edit-customer', component: EditCustomerComponent },
    { path: 'list-customer', component: ListCustomerComponent },
    { path: '', pathMatch: 'full', redirectTo: 'list-customer' },
    { path: '**', pathMatch: 'full', redirectTo: 'list-customer' }
];
```

8. Vamos a modificar el archivo app.module.ts y lo vamos a dejar de la siguiente manera:
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

9. Vamos a modificar el archivo app.component.html y lo vamos a dejar de la siguiente manera:
```typescript
<div class="container mt-5">
    <router-outlet></router-outlet>
</div>
```

10. Vamos a modificar el archivo index.html y lo vamos a dejar de la siguiente manera:
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

11. Dentro de app > model > customer.ts vamos a escribir el siguiente código:
```typescript
export class Customer {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}
```

12. Dentro de app > services > customer.service.ts vamos a escribir el siguiente código:
```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../model/customer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:8080/api/customers';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) {
    console.log('Servicio Customer Funcionando');
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data as Customer[])
    );
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.baseUrl}/${id}`);
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.baseUrl, customer, {headers: this.httpHeaders});
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(this.baseUrl, customer, {headers: this.httpHeaders});
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.http.delete<Customer>(`${this.baseUrl}/${id}`, {headers: this.httpHeaders});
  }
}
```

13. Una vez que se han creado los servicios, es hora de trabajar en nuestros componentes.

14. Dentro de app > components > list-customer > list-customer.component.ts vamos a escribir el siguiente código:
```typescript
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/customer';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styles: []
})
export class ListCustomerComponent implements OnInit {
  customers: Customer[];

  constructor(private router: Router, private service: CustomerService) {}

  ngOnInit() {
    this.service.getCustomers().subscribe(data => (this.customers = data));
  }

  deleteCustomer(customer: Customer): void {
    swal({
      title: 'Está seguro?',
      text: `¿Seguro desea eliminar al cliente ${customer.firstName} ${
        customer.lastName
      }?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
        this.service.deleteCustomer(customer.id).subscribe(data => {
          this.customers = this.customers.filter(c => c !== customer);
        });

        swal('Eliminado!', 'Se ha eliminado el cliente.', 'success');
      }
    });
  }

  editCustomer(customer: Customer): void {
    localStorage.removeItem('editCustomerId');
    localStorage.setItem('editCustomerId', customer.id.toString());
    this.router.navigate(['edit-customer']);
  }

  addCustomer(): void {
    this.router.navigate(['add-customer']);
  }
}
```

15. Dentro de app > components > list-customer > list-customer.component.html vamos a escribir el siguiente código:
```typescript
<div class="col">
  <h2>Clientes</h2>
  <button class="btn btn-primary" (click)="addCustomer()">Agregar Cliente</button>
  <table class="table table-striped">
    <thead>
      <tr>
        <th class="hidden">Id</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Email</th>
        <th>Acción</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let customer of customers">
        <td class="hidden">{{ customer.id }}</td>
        <td>{{ customer.firstName }}</td>
        <td>{{ customer.lastName }}</td>
        <td>{{ customer.email }}</td>
        <td>
          <button class="btn btn-success" (click)="editCustomer(customer)">
            Editar
          </button>
          <button class="btn btn-danger" (click)="deleteCustomer(customer)">
            Borrar
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

16. Dentro de app > components > add-customer > add-customer.component.ts vamos a escribir el siguiente código:
```typescript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styles: []
})
export class AddCustomerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: CustomerService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  onSubmit() {
    this.service.createCustomer( this.addForm.value )
      .subscribe(data => {
        this.router.navigate(['list-customer']);
        swal({
          position: 'top',
          type: 'success',
          title: `Cliente creado con éxito`,
          showConfirmButton: false,
          timer: 1500
        });
      });
  }

}
```

17. Dentro de app > components > add-customer > add-customer.component.html vamos a escribir el siguiente código:
```typescript
<div class="col">
  <h2 class="text-center">Agregar Cliente</h2>
  <form [formGroup]="addForm" (ngSubmit)="onSubmit()">

    <div class="form-group">
      <label for="firstName">Nombre:</label>
      <input formControlName="firstName" placeholder="Nombre" name="firstName" class="form-control" id="firstName" required>
    </div>

    <div class="form-group">
      <label for="lastName">Apellido:</label>
      <input formControlName="lastName" placeholder="Apellido" name="lastName" class="form-control" id="lastName" required>
    </div>

    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" formControlName="email" placeholder="Email" name="email" class="form-control" id="email" required>
    </div>

    <button class="btn btn-success">Aceptar</button>
    <button class="btn btn-primary" routerLink="list-customer">Regresar</button>
  </form>
</div>
```

18. Dentro de app > components > edit-customer > edit-customer.component.ts vamos a escribir el siguiente código:
```typescript
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/customer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styles: []
})
export class EditCustomerComponent implements OnInit {

  customer: Customer;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: CustomerService) { }

  ngOnInit() {

    const customerId = localStorage.getItem('editCustomerId');

    if ( !customerId ) {
      alert('Acción invalida');
      this.router.navigate(['list-customer']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    });

    this.service.getCustomer(+customerId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.service.updateCustomer(this.editForm.value)
      .pipe(first())
      .subscribe( data => {
        this.router.navigate(['list-customer']);
        swal({
          position: 'top',
          type: 'success',
          title: `Cliente modificado con éxito`,
          showConfirmButton: false,
          timer: 1500
        });
      },
      error => {
        alert(error);
      });
  }

}
```

19. Dentro de app > components > edit-customer > edit-customer.component.html vamos a escribir el siguiente código:
```typescript
<div class="col">
    <h2 class="text-center">Editar Cliente</h2>
    <form [formGroup]="editForm" (ngSubmit)="onSubmit()">
  
      <div class="form-group">
        <label for="firstName">Nombre:</label>
        <input formControlName="firstName" placeholder="Nombre" name="firstName" class="form-control" id="firstName" required>
      </div>
  
      <div class="form-group">
        <label for="lastName">Apellido:</label>
        <input formControlName="lastName" placeholder="Apellido" name="lastName" class="form-control" id="lastName" required>
      </div>
  
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" formControlName="email" placeholder="Email" name="email" class="form-control" id="email" required>
      </div>
  
      <button class="btn btn-success">Aceptar</button>
      <button class="btn btn-primary" routerLink="list-customer">Regresar</button>
    </form>
  </div>
```

20. En la terminal de Visual Studio Code ejecutamos el siguiente comando:

`ng serve -o`

21. Es importante que este corriendo el [backend en Spring](https://github.com/rparias/demoSpringRest)

22. Se abrirá el navegador y el proyecto funcionará, como se ve en la siguiente imagen:

![alt text][logo6]

[logo6]: https://i.gyazo.com/f5993bb1cb48bcab0ec49fe54c8caa3b.png "Ejecutar"



