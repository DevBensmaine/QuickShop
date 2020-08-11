export interface Product {
  idProduct:Number,
  title:string,
  genre:string,
  mark:string,
  imgProduct:string,
  cat:string,
  priceBeforePromotion:Number,
  priceAvantPromotion:Number,
  varying : string[],
  taille : string[],
  description:string,
  isPromotion:boolean
}
