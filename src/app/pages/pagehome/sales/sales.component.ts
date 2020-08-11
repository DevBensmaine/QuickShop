import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent implements OnInit {
  listProduct:Product[] =[]
  constructor(private productService:ProductService) {}

  getAll() {
    this.productService.getProducts().subscribe((data: any) => {
        // this.listProduct = data.filter((product) => product.productId === true);
        this.listProduct = data
        console.log("List product Promotion")
        console.log(this.listProduct)
    })
  }

  ngOnInit(): void {
    this.getAll()
  }
}
