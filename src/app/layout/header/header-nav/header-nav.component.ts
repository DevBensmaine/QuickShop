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

  constructor(
    private cart: CartService,
    private productService: ProductService
  ) {}

  getCarts() {
    this.cart.getAll().subscribe((data: any[]) => {
      this.cartList = data.filter((order) => order.userId === 2);
      // this.cartList = data.map((obj) => ({
      //   ...obj,
      //   product: this.productService.findProductByIdForCart(1),
      // }));
      // console.log('ici !!');
      // console.log(this.productService.findProductById(1))
      console.log(this.cartList);
      this.cartList[0].orders.forEach((product) => {
        this.somme += product.Qte * product.prix;
        this.count++;
      });
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

    this.cart.update(this.cartList[0]).subscribe(() => {

    });
  }

  ngOnInit(): void {
    this.getCarts();
  }
}
