import { Component } from '@angular/core';
import { Carousel } from "../../components/carousel/carousel";
import { Card } from "../../components/card/card";

@Component({
  selector: 'app-home',
  imports: [Carousel, Card],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  subscribed: boolean = false;

  onSubscribe(e: any) {
    e.preventDefault();
    this.subscribed = true;
  }
} 
