import { Injectable } from '@angular/core';
import { Product } from '../core/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productListService:Product[] = [
    {id:1,title:'T-Shirt 1',price:100,quantity:20,like:0,picture:'https://static.bershka.net/4/photos2/2022/I/0/2/p/2766/777/800//01/2766777800_2_4_3.jpg?t=1660741431395'},
    {id:2,title:'T-Shirt 2',price:50,quantity:0,like:0,picture:'https://static.bershka.net/4/photos2/2022/I/0/2/p/2766/777/800//01/2766777800_2_4_3.jpg?t=1660741431395'},
    {id:3,title:'T-Shirt 3',price:50,quantity:0,like:0,picture:'https://static.bershka.net/4/photos2/2022/I/0/2/p/2766/777/800//01/2766777800_2_4_3.jpg?t=1660741431395'}
  ];
  constructor() { }
  addProduct(product:Product){
    this.productListService.push(product)
  }
}
