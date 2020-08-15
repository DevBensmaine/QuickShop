import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent implements OnInit {

  cartList:any =[];
  listOrder:any = [];
  somme:number = 0;
  constructor(public cart: CartService,private router:Router) { }

  ngOnInit(): void {
    this.cart.getAll().subscribe((data: any[]) => {
      this.cartList = data.filter((order) => order.userId === 2);
      this.listOrder = this.cartList[0].orders
    })
  }

  addOneQte(item){
    this.cart.somme = 0
    this.cartList[0].orders.map(product => {
      product.productId === item.productId ? product.Qte +=1  : product.Qte = product.Qte

    })

  }

  deminuOneQte(item){
    this.cart.somme = 0
    this.cartList[0].orders.map(product => {
      if(product.Qte <= 0){
        product.Qte = 0
      } else{
        product.productId === item.productId ? product.Qte -=1 : product.Qte = product.Qte
      }
      this.cart.somme += product.Qte * product.prix

    })
  }

  deleteFormCard(id) {
    var removeIndex = this.cartList[0].orders
      .map(function (item) {
        return item.productId;
      })
      .indexOf(id);
    this.cartList[0].orders.splice(removeIndex, 1);


    this.cart.somme =  this.cart.count = 0;
    this.cartList[0].orders.forEach((product) => {
      this.cart.somme  += product.Qte * product.prix;
    });

    this.cart.update(this.cartList).subscribe(() => {});
  }

  confirmOrder(id){
    alert("hassan")
    this.router.navigate(['/checkout', id]);

  }




}
