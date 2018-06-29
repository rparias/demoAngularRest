import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

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
      });
  }

}
