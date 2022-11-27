import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_categories, sample_products } from 'src/data';

//* urls.ts
import {
  PRODUCTS_BY_CATEGORY_URL,
  PRODUCTS_BY_ID_URL,
  PRODUCTS_BY_SEARCH_URL,
  PRODUCTS_CATEGORIES_URL,
  PRODUCTS_URL,
} from '../shared/constants/urls';

//* Models
import { Category } from '../shared/models/Category';
import { Product } from '../shared/models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  //* Tüm ürünleri getiren metot.
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(PRODUCTS_URL);
  }

  //* Arama terimine göre ürünleri getiren metot.
  getProductsBySearchTerm(searchTerm: string) {
    return this.http.get<Product[]>(PRODUCTS_BY_SEARCH_URL + searchTerm);
  }

  //* Tüm kategorileri getiren metot.
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(PRODUCTS_CATEGORIES_URL);
  }

  //* Kategoriye göre ürünleri getiren metot.
  getProductsByCategory(category: string): Observable<Product[]> {
    return category === 'tumu'
      ? this.getAllProducts()
      : this.http.get<Product[]>(PRODUCTS_BY_CATEGORY_URL + category);
  }

  //* Ürün ID'sine göre ilgili ürünü getiren metot.
  getProductById(productId: string): Observable<Product> {
    return this.http.get<Product>(PRODUCTS_BY_ID_URL + productId);
  }
}
