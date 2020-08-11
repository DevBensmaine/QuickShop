import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css'],
})
export class HeaderNavComponent implements OnInit {
  cartList: any = [];
  somme: number = 0;
  count: number = 0;
  orders:any =[];

  constructor(
    private cart: CartService,
    private productService: ProductService
  ) {}

  getCarts() {
    this.cart.getAll().subscribe((data: any[]) => {
      this.cartList = data.filter((order) => order.userId === 2);
      this.cartList[0].orders.forEach((product) => {
        this.cart.somme += product.Qte * product.prix;
        this.cart.count++;
      });
      this.somme =this.cart.somme  ;
      this.count = this.cart.count;
      this.orders = this.cartList[0].orders;
    });
  }

  deleteFormCard(id) {
    var removeIndex = this.cartList[0].orders
      .map(function (item) {
        return item.productId;
      })
      .indexOf(id);
    this.cartList[0].orders.splice(removeIndex, 1);


    this.somme = this.count = 0;
    this.cartList[0].orders.forEach((product) => {
      this.somme += product.Qte * product.prix;
      this.count++;
    });


    this.cart.update(this.cartList).subscribe(() => {});
    alert("dsds")
    this.cart.somme = this.somme;
    this.cart.count = this.count;


  }

  ngOnInit(): void {
    this.getCarts();
  }
}
