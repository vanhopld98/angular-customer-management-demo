import {Injectable} from '@angular/core';
import {Customer} from '../customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`http://localhost:8080/customers`);
  }

  getById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`http://localhost:8080/customers/${id}`);
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`http://localhost:8080/customers`, customer);
  }

  update(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`http://localhost:8080/customers/${id}`, customer);
  }

  delete(id: number): Observable<Customer> {
    return this.http.delete<Customer>(`http://localhost:8080/customers/${id}`);
  }
}
