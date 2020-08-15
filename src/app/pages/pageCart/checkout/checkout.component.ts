import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartList:any = [];
  orders:any = [];
  userCustomer = {
    fname:'',
    lname:'',
    email:'',
    tele:'',
    adresse:'',
    orderInfo:'',
    payment:''

  };


  constructor(public cart: CartService,private router:Router) { }

  ngOnInit(): void {

    this.cart.getAll().subscribe((data: any[]) => {
      this.cartList = data.filter((order) => order.userId === 2);
      this.orders = this.cartList[0].orders
    })
  }

  placeOrder(userCustomer){
    console.log("Order : ")
    console.log(userCustomer)
  }

}
