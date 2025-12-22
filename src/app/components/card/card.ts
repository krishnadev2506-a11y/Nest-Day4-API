import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from '../../services';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements OnInit {
  cards: any[] = [];

  constructor(
    private services: Services,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.services.getFakeStoreData().subscribe((data: any) => {
      this.cards = data;
    });
  }

  viewProductDetail(product: any) {
    this.router.navigate(
      ['/products', product.id],
      { state: { product } }
    );
  }
}
