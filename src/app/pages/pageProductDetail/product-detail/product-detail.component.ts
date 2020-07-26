import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productFinder:Observable<Product[]>
  name:string = "sajjjasa"
  constructor(private productService:ProductService  ) { }

  ngOnInit(): void {

    this.productService.findProductById(1).subscribe({
      next: (product) => (this.productFinder= product),
      error: (err) => console.log(err),
    });
    console.log("ProductDetailComponent")
    console.log(this.productFinder)
  }

}
