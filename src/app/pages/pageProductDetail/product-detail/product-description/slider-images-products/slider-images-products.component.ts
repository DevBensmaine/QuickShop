import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../../../../services/cart.service';

@Component({
  selector: 'slider-images-products',
  templateUrl: './slider-images-products.component.html',
  styleUrls: ['./slider-images-products.component.css'],
})
export class SliderImagesProductsComponent implements OnInit {
  @Input() productActive;
  // productCurrent:any = []
  constructor( private cart: CartService) {}

  ngOnInit(): void {

    // this.productCurrent = this.productActive[0];
  }
}
