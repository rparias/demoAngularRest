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
