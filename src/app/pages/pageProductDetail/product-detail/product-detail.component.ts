import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../../../interfaces/product';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productFinder:Observable<Product[]>
  constructor(private productService:ProductService,  private route: ActivatedRoute  ) { }

  ngOnInit(): void {
      let idProduct=  this.route.snapshot.paramMap.get("id")
    this.productService.findProductById(+idProduct).subscribe({

      next: (product) => (this.productFinder= product),
      error: (err) => console.log(err),
    });
  }

}
