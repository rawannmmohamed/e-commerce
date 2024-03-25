import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {
  orders = [
    {
      id: '#13456',
      price: '$199',
      date: '1-5-2020',
      status: 'delivered',
    },
    {
      id: '#13456',
      price: '$199',
      date: '1-5-2020',
      status: 'delivered',
    },
    {
      id: '#13456',
      price: '$199',
      date: '1-5-2020',
      status: 'delivered',
    },
    {
      id: '#13456',
      price: '$199',
      date: '1-5-2020',
      status: 'delivered',
    },
  ];
  wishList = [
    {
      category: 'bedroom',
      name: 'lamp',
      price: '199',
      image: '/assets/images/lamp.png',
      rating: 5,
    },
    {
      category: 'bedroom',
      name: 'lamp',
      price: '199',
      image: '/assets/images/lamp.png',
      rating: 5,
    },
    {
      category: 'bedroom',
      name: 'lamp',
      price: '199',
      image: '/assets/images/lamp.png',
      rating: 5,
    },
    {
      category: 'bedroom',
      name: 'lamp',
      price: '199',
      image: '/assets/images/lamp.png',
      rating: 5,
    },
    {
      category: 'bedroom',
      name: 'lamp',
      price: '199',
      image: '/assets/images/lamp.png',
      rating: 5,
    },
  ];
}
