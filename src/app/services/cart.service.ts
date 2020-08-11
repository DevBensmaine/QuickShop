import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  urlApi = 'http://localhost:3000/cart';
  somme=0;
  count=0;

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
    return this.http.put(`${this.urlApi}/${cart[0].id}`,cart[0])
  }


  addToCart(cart){
    return this.http.put(`${this.urlApi}/${cart[0].id}`,cart[0])
  }
}
