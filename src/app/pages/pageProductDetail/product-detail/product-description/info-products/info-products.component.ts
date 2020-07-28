import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'info-products',
  templateUrl: './info-products.component.html',
  styleUrls: ['./info-products.component.css'],
})
export class InfoProductsComponent implements OnInit {
  @Input() productActive;
  constructor() {}

  ngOnInit(): void {}
}
