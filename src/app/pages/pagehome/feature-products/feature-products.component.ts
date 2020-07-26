import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from 'src/app/interfaces/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'feature-products',
  templateUrl: './feature-products.component.html',
  styleUrls: ['./feature-products.component.css'],
})
export class FeatureProductsComponent implements OnInit {
  // products: Product[] = [];
  products: Observable<Product[]>;

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.getProductNow()
  }

  ngAfterViewInit(){

  }

  ngDoCheck(){

  }
   async getProductNow() {
    await   this.productService.getProducts().subscribe({
        next: (products) => (this.products = products),
        error: (err) => console.log(err),
      });
  }




}
