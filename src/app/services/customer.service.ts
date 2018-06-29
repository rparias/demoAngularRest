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
