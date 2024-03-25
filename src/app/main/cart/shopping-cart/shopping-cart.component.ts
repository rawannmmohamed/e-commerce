import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {
products : any[] = [
    {
      category: 'bedroom',
      name: 'lamp',
      price: '199',
      image: '/assets/images/lamp.png',
      rating: 5,
      quantity : 1
    },
    {
      category: 'bedroom',
      name: 'lamp',
      price: '192',
      image: '/assets/images/lamp.png',
      rating: 5,
      quantity : 1
    },
    {
      category: 'livingroom',
      name: 'lamp',
      price: '399',
      image: '/assets/images/lamp.png',
      rating: 5,
      quantity : 1
    },
    {
      category: 'bedroom',
      name: 'lamp',
      price: '199',
      image: '/assets/images/lamp.png',
      rating: 5,
      quantity : 1
    },
    {
      category: 'bedroom',
      name: 'lamp',
      price: '192',
      image: '/assets/images/lamp.png',
      rating: 5,
      quantity : 1
    },
    
  ];
  decreaseQuantity(product: any) {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  increaseQuantity(product: any) {
    product.quantity++;
  }
  getTotalPrice(): number {
    return this.products.reduce((total, product) => total + (product.quantity * product.price), 0);
  }

}
