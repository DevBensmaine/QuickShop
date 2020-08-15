import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'prix-filter',
  templateUrl: './prix-filter.component.html',
  styleUrls: ['./prix-filter.component.css']
})
export class PrixFilterComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
  getPrice(){
    let min = document.querySelector(".ac-slider__min").textContent.replace("DH", "");
    let max = document.querySelector(".ac-slider__max").textContent.replace("DH", "");

    this.productService.getProducts().subscribe((data) => {
      this.productService.products = data;
      this.productService.products = this.productService.products.filter((p) => p.priceAvantPromotion >= min && p.priceAvantPromotion <= max  );
    });
  }

}
