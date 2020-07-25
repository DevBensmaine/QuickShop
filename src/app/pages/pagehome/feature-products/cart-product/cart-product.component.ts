import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { Product } from 'src/app/interfaces/product';
import { Router } from '@angular/router'

@Component({
  selector: 'cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css'],
})
export class CartProductComponent implements OnInit {
  @Input() jsonData;
  constructor(private router:Router) {}

  ngOnInit(): void {}

  Detail() {
    console.log('clicked');
    // console.log(this.jsonData.idProduct)
    this.router.navigate(['/product-detail',this.jsonData.idProduct]);
  }
}
