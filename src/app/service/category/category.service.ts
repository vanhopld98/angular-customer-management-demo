import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../../category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }
  findAll(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:8080/categories');
  }

  findById(id: number): Observable<Category> {
    return this.http.get<Category>(`http://localhost:8080/categories/${id}`);
  }

  create(category: Category): Observable<Category> {
    return this.http.post<Category>(`http://localhost:8080/categories`, category);
  }

  update(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>(`http://localhost:8080/categories/${id}`, category);
  }

  delete(id: number): Observable<Category> {
    return this.http.delete(`http://localhost:8080/categories/${id}`);
  }
}
