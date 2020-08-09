import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  urlApi = 'http://localhost:3000/cart';

  constructor(private http: HttpClient) { }

   //@Methode Get
   getAll() {
    return this.http.get(this.urlApi);
  }

  //@Methode Delete
  delete(id) {
    return this.http.delete(`${this.urlApi}/${id}`);
  }

  update(cart){
    return this.http.put(`${this.urlApi}/${cart.id}`,cart)
  }
}
