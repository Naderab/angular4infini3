import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { FormProductComponent } from './form-product/form-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import { TodolistComponent } from './todolist/todolist.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './product/product.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    FooterComponent,
    FormProductComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    TodolistComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
