import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderSiderComponent } from './layout/header/header-sider/header-sider.component';
import { HeaderTopComponent } from './layout/header/header-top/header-top.component';
import { HeaderNavComponent } from './layout/header/header-nav/header-nav.component';
import { HomeSliderComponent } from './pages/pagehome/home-slider/home-slider.component';
import { FeatureProductsComponent } from './pages/pagehome/feature-products/feature-products.component';
import { BannerComponent } from './pages/pagehome/banner/banner.component';
import { SalesComponent } from './pages/pagehome/sales/sales.component';
import { HomeMainComponent } from './pages/pagehome/home-main/home-main.component';
import { CartProductComponent } from './pages/pagehome/feature-products/cart-product/cart-product.component';
import { SalesCartComponent } from './pages/pagehome/sales/sales-cart/sales-cart.component';
import { ProductDetailComponent } from './pages/pageProductDetail/product-detail/product-detail.component';
import { SliderImagesProductsComponent } from './pages/pageProductDetail/product-detail/product-description/slider-images-products/slider-images-products.component';
import { InfoProductsComponent } from './pages/pageProductDetail/product-detail/product-description/info-products/info-products.component';
import { ReviewProductComponent } from './pages/pageProductDetail/product-detail/product-description/review-product/review-product.component';
import { ProductCommentComponent } from './pages/pageProductDetail/product-detail/product-description/review-product/product-comment/product-comment.component';
import { SalesPromotionComponent } from './pages/pagehome/sales/sales-promotion/sales-promotion.component';
import { CartCheckoutComponent } from './pages/pageCart/cart-checkout/cart-checkout.component';
import { CheckoutComponent } from './pages/pageCart/checkout/checkout.component';
import { PageProductsFiltersComponent } from './pages/page-products-filters/page-products-filters.component';
import { ListProductFilterComponent } from './pages/page-products-filters/list-product-filter/list-product-filter.component';
import { CategoryFilterComponent } from './pages/page-products-filters/category-filter/category-filter.component';
import { TailleFilterComponent } from './pages/page-products-filters/taille-filter/taille-filter.component';
import { PrixFilterComponent } from './pages/page-products-filters/prix-filter/prix-filter.component';

const routes: Routes = [
  { path:'' , component:HomeMainComponent },
  { path:'product-detail/:id' , component:ProductDetailComponent, pathMatch: 'full' },
  { path:'cart/:id' , component:CartCheckoutComponent , pathMatch: 'full' },
  { path:'checkout/:id' , component:CheckoutComponent , pathMatch: 'full' },
  { path:'product-list' , component:PageProductsFiltersComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderSiderComponent,
    HeaderTopComponent,
    HeaderNavComponent,
    HomeSliderComponent,
    FeatureProductsComponent,
    BannerComponent,
    SalesComponent,
    HomeMainComponent,
    CartProductComponent,
    SalesCartComponent,
    ProductDetailComponent,
    SliderImagesProductsComponent,
    InfoProductsComponent,
    ReviewProductComponent,
    ProductCommentComponent,
    SalesPromotionComponent,
    CartCheckoutComponent,
    CheckoutComponent,
    PageProductsFiltersComponent,
    ListProductFilterComponent,
    CategoryFilterComponent,
    TailleFilterComponent,
    PrixFilterComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule ,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
