import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import funcs from '../../../../../shared/functions';

@Component({
  selector: 'slider-images-products',
  templateUrl: './slider-images-products.component.html',
  styleUrls: ['./slider-images-products.component.css'],
})
export class SliderImagesProductsComponent implements OnInit {
  @Input() productActive;
  constructor() {}

  ngOnInit(): void {
    $(document).ready(function () {
      setTimeout(function () {
        funcs.owlCarousel($('.owl-slider'));
        funcs.mapConfig();
        funcs.productVariantsAjax();
        funcs.productThumbnailChange();

        funcs.slickConfig();
        funcs.zoomInit();
      }, 1000);
    });
  }
}
