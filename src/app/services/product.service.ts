import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: any = [];
  urlApi = 'http://localhost:3000/products';
  urlApiCategory = 'http://localhost:3000/categroy';
  urlApiTaille = 'http://localhost:3000/taille';
  categoryList:any = []

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Observable<Product[]>>(this.urlApi);
  }

  getProductsTaille() {
    return this.http.get<Observable<Product[]>>(this.urlApiTaille)
  }

  getCategoryProducts() {

    return this.http.get<any[]>(this.urlApiCategory)
  }

  findProductById(id: number) {
    return this.http.get<Observable<Product[]>>(
      `${this.urlApi}?idProduct=${id}`
    );
  }
}
