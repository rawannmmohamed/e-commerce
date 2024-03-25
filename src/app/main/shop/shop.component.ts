import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent {
  selectedCategory: string | null = 'all';
  layout: 'list' | 'grid' = 'grid';
  sortOrder!: number;
  sortField!: string;

  sortOptions = [
    { label: 'Price High to Low', value: '!price' },
    { label: 'Price Low to High', value: 'price' },
  ];

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  categories = [
    'all',
    'bedroom',
    'livingroom',
    'dinning',
    'outdoor',
    'bathroom',
  ];

  products = [
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
      price: '192',
      image: '/assets/images/lamp.png',
      rating: 5,
    },
    {
      category: 'livingroom',
      name: 'lamp',
      price: '399',
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
      price: '192',
      image: '/assets/images/lamp.png',
      rating: 5,
    },
    {
      category: 'livingroom',
      name: 'lamp',
      price: '399',
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
      price: '192',
      image: '/assets/images/lamp.png',
      rating: 5,
    },
    {
      category: 'outdoor',
      name: 'lamp',
      price: '399',
      image: '/assets/images/lamp.png',
      rating: 5,
    },
  ];

  filterProducts() {
    if (!this.selectedCategory || this.selectedCategory === 'all') {
      return this.products;
    } else {
      return this.products.filter(
        (product) => product.category === this.selectedCategory
      );
    }
  }
}
