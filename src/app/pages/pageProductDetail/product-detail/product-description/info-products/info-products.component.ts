import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../../../../services/cart.service';
import * as $ from 'jquery';
import funcs from '../../../../../shared/functions';

@Component({
  selector: 'info-products',
  templateUrl: './info-products.component.html',
  styleUrls: ['./info-products.component.css'],
})
export class InfoProductsComponent implements OnInit {
  @Input() productActive;
  showBtn:boolean = false;

  myCommande:any = {
    productId:'',
    title: "",
    size: "",
    imgProduct: "",
    Qte: 0,
    prix: 0,
    ref: ""
   }
   cartList:any = []

  constructor(  private cart: CartService) {}

  addToCart(product){

      this.myCommande.productId =product[0].idProduct
      this.myCommande.title= product[0].title
      this.myCommande.imgProduct =product[0].imgProduct
      this.myCommande.prix = product[0].priceAvantPromotion

    console.log("Prooodict")
    console.log(this.myCommande)

    this.cart.getAll().subscribe((data: any[]) => {
      this.cartList = data.filter((order) => order.userId === 2);

    this.cartList[0].orders.push(this.myCommande)


    this.cart.addToCart(this.cartList).subscribe(()=>{})
    this.cart.somme = this.cart.count = 0;
    this.cartList[0].orders.forEach((product) => {
      this.cart.somme += product.Qte * product.prix;
      this.cart.count++;
    });
      this.showBtn = true;

    })


  }

  selectVariant(srcImg){
   this.myCommande.ref = srcImg

  }

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
}
