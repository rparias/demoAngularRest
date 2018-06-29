import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl = 'http://localhost:8080/api/customers';

  constructor( private http: HttpClient ) {
    console.log('Servicio Customer Funcionando');
  }

  getCustomers() {
    return this.http.get<Customer[]>(this.baseUrl);
  }

  getCustomer(id: number) {
    return this.http.get<Customer>(this.baseUrl + '/' + id);
  }

  createCustomer(customer: Customer) {
    return this.http.post(this.baseUrl, customer);
  }

  updateCustomer(customer: Customer) {
    return this.http.put(this.baseUrl, customer);
  }

  deleteCustomer(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
