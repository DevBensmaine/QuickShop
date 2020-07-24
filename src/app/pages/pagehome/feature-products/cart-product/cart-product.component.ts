import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css'],
})
export class CartProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProductNow();
  }

  Detail() {
    console.log('clicked');

    console.log(this.findProductByid(1));
  }
  getProductNow() {
    this.productService.getProducts().subscribe({
      next: (products) => (this.products = products),
      error: (err) => console.log(err),
    });
  }

  findProductByid(id) {
    return this.products.filter((p) => p.idProduct === id);
  }
}
