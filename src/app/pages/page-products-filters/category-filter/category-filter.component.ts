import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import * as $ from 'jquery';
import funcs from '../../../shared/functions';

@Component({
  selector: 'category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css'],
})
export class CategoryFilterComponent implements OnInit {
  categoryProduct: any = [];
  listfilter: any = [];

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getCategoryProducts().subscribe((data) => {
      this.categoryProduct = data;
    });
  }

  clickFilterCategory(item) {
    if (
      this.listfilter.includes(item) &&
      (<HTMLElement>event.currentTarget).getAttribute('class').search('current')
    ) {
      var index = this.listfilter.indexOf(item);
      if (index > -1) {
        this.listfilter.splice(index, 1);
      }
    } else {
      this.listfilter.push(item);
    }

    this.productService.getProducts().subscribe((data) => {
      this.productService.products = data;
      this.productService.products = this.productService.products.filter((p) =>
        this.listfilter.includes(p.cat)
      );
      if (this.listfilter.length == 0) {
        this.productService.products = data;
      }
    });

    funcs.owlCarousel($('.owl-slider'));
        funcs.productVaritantsNormal();
   }
}
