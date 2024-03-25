import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AccountComponent } from './account/account.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'home',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'shop',
    title: 'Shop',
    component: ShopComponent,
  },
  {
    path: 'account',
    title: 'Account',
    component: AccountComponent,
  },
  {
    path: 'contact-us',
    title: 'Contact-us',
    component: ContactUsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
