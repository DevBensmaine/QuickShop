import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'slider-images-products',
  templateUrl: './slider-images-products.component.html',
  styleUrls: ['./slider-images-products.component.css'],
})
export class SliderImagesProductsComponent implements OnInit {
  @Input() productActive;
  constructor() {}

  ngOnInit(): void {}
}
