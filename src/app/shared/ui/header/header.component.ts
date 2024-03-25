import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  items: MenuItem[];

  constructor() {
    this.items = [
      { label: 'Home', routerLink: '/main/home' },
      { label: 'Shop', routerLink: '/main/shop' },
      { label: 'Contact Us', routerLink: '/main/contact-us' },
    ];
  }
}
