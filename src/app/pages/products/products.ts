import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class products implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    if (history.state && history.state.product) {
      this.product = history.state.product;
    }
  }
}
