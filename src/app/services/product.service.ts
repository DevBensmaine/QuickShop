import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products :Product[] = [];
  messages:any = [];
  pp = {}
  urlApi = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(){
    return this.http.get<Observable<Product[]>>(this.urlApi);
  }

  findProductById(id: number) {
    return this.http.get<Observable<Product[]>>(`${this.urlApi}?idProduct=${id}`);
}

findProductByIdForCart(id: number) {

 this.http.get<Observable<Product[]>>(`${this.urlApi}?idProduct=${id}`).subscribe((data) => {

  this.messages = [data[0]];


});

console.log("Hassan Bensmaine")
console.log(this.pp)
return this.messages

}



}
