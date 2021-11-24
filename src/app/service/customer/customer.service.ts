import {Injectable} from '@angular/core';
import {Customer} from '../../customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getAll(page: number): Observable<Customer[]> {
    return this.http.get<Customer[]>(`http://localhost:8080/customers?page=${page}`);
  }

  getById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`http://localhost:8080/customers/${id}`);
  }

  search(q: string): Observable<Customer> {
    return this.http.get<Customer>(`http://localhost:8080/customers?q=${q}`);
  }

  createCustomer(formData: FormData): Observable<Customer> {
    return this.http.post<Customer>(`http://localhost:8080/customers`, formData);
  }

  update(id: number, formData: FormData): Observable<Customer> {
    return this.http.put<Customer>(`http://localhost:8080/customers/${id}`, formData);
  }

  delete(id: number): Observable<Customer> {
    return this.http.delete<Customer>(`http://localhost:8080/customers/${id}`);
  }
}
