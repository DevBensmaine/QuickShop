import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import funcs from '../../../../shared/functions';

@Component({
  selector: 'sales-cart',
  templateUrl: './sales-cart.component.html',
  styleUrls: ['./sales-cart.component.css']
})
export class SalesCartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
        setTimeout(function () {
          funcs.backgroundImage();
          funcs.parallax();
          funcs.rating();
          funcs.menuBtnToggle();
          funcs.subMenuToggle();
          funcs.owlCarousel($('.owl-slider'));
          funcs.mapConfig();
          // setHeightProduct();
          funcs.navigateOwlCarousel();
          funcs.countDown();
          funcs.masonry();
          funcs.stickyHeader();
          funcs.productVariantsAjax();
          funcs.productThumbnailChange();
          funcs.bootstrapSelect();
          funcs.slickConfig();
          funcs.zoomInit();
          funcs.magnificPopup();
          funcs.productVaritantsNormal();


          funcs.revolution();
          funcs.filterSlider();
      }, 2000);
    });
  }

}
