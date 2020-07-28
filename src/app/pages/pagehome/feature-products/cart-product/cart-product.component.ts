import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { Product } from 'src/app/interfaces/product';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import funcs from '../../../../shared/functions';

@Component({
  selector: 'cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css'],
})
export class CartProductComponent implements OnInit {
  @Input() jsonData;
  constructor(private router: Router) {}

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
        // stickyWidget();
        funcs.revolution();
        funcs.filterSlider();
      }, 1000);
    });
  }

  Detail() {
    console.log('clicked');
    this.router.navigate(['/product-detail', this.jsonData.idProduct]);
  }
}
