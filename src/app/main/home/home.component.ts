import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  images = [
    { itemImageSrc: '/assets/images/Placeholder1.png' },
    { itemImageSrc: '/assets/images/Placeholder2.png' },
    { itemImageSrc: '/assets/images/Placeholder3.png' },
  ];
  products = [
    { name: 'lamp', price: '199', image: '/assets/images/lamp.png' },
    { name: 'chair', price: '449', image: '/assets/images/productChair.png' },
    { name: 'basket', price: '399', image: '/assets/images/productBasket.png' },
    {
      name: 'white lamp',
      price: '199',
      image: '/assets/images/productLamp.png',
    },
    {
      name: 'white lamp',
      price: '199',
      image: '/assets/images/productLamp.png',
    },
    {
      name: 'white lamp',
      price: '199',
      image: '/assets/images/productLamp.png',
    },
    {
      name: 'white lamp',
      price: '199',
      image: '/assets/images/productLamp.png',
    },
    {
      name: 'white lamp',
      price: '199',
      image: '/assets/images/productLamp.png',
    },
    {
      name: 'white lamp',
      price: '199',
      image: '/assets/images/productLamp.png',
    },
  ];
}
