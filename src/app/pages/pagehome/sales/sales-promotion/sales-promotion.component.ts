import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from '../../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sales-promotion',
  templateUrl: './sales-promotion.component.html',
  styleUrls: ['./sales-promotion.component.css']
})
export class SalesPromotionComponent implements OnInit {
  @Input() product:Product
  title:string = ""

  constructor(private router:Router) { }

  Detail() {

    this.router.navigate(['/product-detail', this.product.idProduct]);
  }

  ngOnInit(): void {
    console.log("===========================")
      console.log(this.product)
  }

}
