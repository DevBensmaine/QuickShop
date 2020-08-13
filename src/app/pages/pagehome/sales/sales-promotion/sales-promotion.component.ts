import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from '../../../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sales-promotion',
  templateUrl: './sales-promotion.component.html',
  styleUrls: ['./sales-promotion.component.css']
})
export class SalesPromotionComponent implements OnInit {
  @Input() product:Product
  title:string = ""

  constructor(private router:Router,private route:ActivatedRoute ) { }

  async Detail() {

   await this.router.navigate(['/product-detail', this.product.idProduct],{relativeTo:this.route});
    // location.reload();
    window.location.reload()
  }

  ngOnInit(): void {
      console.log(this.product)
  }

}
