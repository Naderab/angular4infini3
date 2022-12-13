import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductComponent } from './form-product/form-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'addProduct',component:FormProductComponent},
  {path:'updateProduct/:id',component:FormProductComponent},
  {path:'product/:id',component:ProductDetailsComponent},
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'todolist',component:TodolistComponent},
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
