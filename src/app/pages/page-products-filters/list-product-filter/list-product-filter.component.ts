import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'list-product-filter',
  templateUrl: './list-product-filter.component.html',
  styleUrls: ['./list-product-filter.component.css']
})
export class ListProductFilterComponent implements OnInit {

  constructor(public productService :ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.productService.products = data
    })
  }


}
