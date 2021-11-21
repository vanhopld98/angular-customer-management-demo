import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/products');
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:8080/products/${id}`);
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`http://localhost:8080/products`, product);
  }

  update(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`http://localhost:8080/products/${id}`, product);
  }

  delete(id: number): Observable<Product> {
    return this.http.delete(`http://localhost:8080/products/${id}`);
  }
}
