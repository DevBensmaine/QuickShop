import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import * as $ from 'jquery';
import funcs from '../../../shared/functions';
@Component({
  selector: 'taille-filter',
  templateUrl: './taille-filter.component.html',
  styleUrls: ['./taille-filter.component.css']
})
export class TailleFilterComponent implements OnInit {

  listTaille:any = []
  listfilter: any = [];
  constructor(private productService:ProductService) {  }

  clickFilterTaille(taille){

    if (
      this.listfilter.includes(taille) &&
      (<HTMLElement>event.currentTarget).getAttribute('class').search('current')
    ) {
      var index = this.listfilter.indexOf(taille);
      if (index > -1) {
        this.listfilter.splice(index, 1);
      }
    } else {
      this.listfilter.push(taille);
    }

    this.productService.getProducts().subscribe((data) => {
      this.productService.products = data;
      this.productService.products = this.productService.products.filter((p) =>
        p.taille.some (v => this.listfilter.includes(v))
      );
      // if (this.listfilter.length == 0) {
      //   this.productService.products = data;
      // }
    });

    funcs.owlCarousel($('.owl-slider'));
    funcs.productVaritantsNormal();


    console.log("Les Tailles")
    console.log(this.listfilter)

  }
  ngOnInit(): void {
    this.productService.getProductsTaille().subscribe(data => {
      this.listTaille = data
    })
  }

}
