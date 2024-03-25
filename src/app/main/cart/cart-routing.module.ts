import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import { OrderCompleteComponent } from './order-complete/order-complete.component';

const routes: Routes = [
  { path: '', component: ShoppingCartComponent},
  { path: 'shoppingCart', component: ShoppingCartComponent },
  { path: 'orderComplete', component: OrderCompleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
