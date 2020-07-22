import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
