import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
@NgModule({
  declarations: [
    ShoppingCartComponent,
    OrderCompleteComponent,
 
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    StepsModule,
    TableModule,
    ButtonModule,
    CardModule 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CartModule { }
