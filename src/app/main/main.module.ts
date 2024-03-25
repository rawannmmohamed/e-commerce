import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { GalleriaModule } from 'primeng/galleria';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ShopComponent } from './shop/shop.component';
import { DropdownModule } from 'primeng/dropdown';
import { DataViewModule } from 'primeng/dataview';
import { AccountComponent } from './account/account.component';
import { StepperModule } from 'primeng/stepper';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ContactUsComponent } from './contact-us/contact-us.component';
@NgModule({
  declarations: [
    HomeComponent,
    ShopComponent,
    AccountComponent,
    ContactUsComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    GalleriaModule,
    FormsModule,
    CarouselModule,
    ButtonModule,
    DropdownModule,
    DataViewModule,
    StepperModule,
    PasswordModule,
    InputTextModule,
    TableModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainModule {}
