import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';
@Injectable({ providedIn: 'root' })
export class ProductsService {

  httpClient = inject(HttpClient);
  getItemsByCategory(category: string | null): Observable<Product[]> {
    if (!category) return new Observable<Product[]>();
    const url = `http://localhost:3000/api/category/${encodeURIComponent(category)}`;
    return this.httpClient.get<Product[]>(url);
  }
  
  getCategoryNameByHandle(handle: string | null): Observable<{ name: string } | null> {
    if (!handle) return new Observable<{ name: string } | null>();
    const url = `http://localhost:3000/api/category-name/${encodeURIComponent(handle)}`;
    return this.httpClient.get<{ name: string } | null>(url);
  }
}
