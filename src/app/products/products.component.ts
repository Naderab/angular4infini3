import { Component, OnInit } from '@angular/core';
import { Product } from '../core/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title:string = 'Welcome to products page !'
  productList!: Product[];
  constructor() { }

  ngOnInit(): void {
    this.productList = [
      {id:1,title:'T-Shirt 1',price:100,quantity:20,like:0,picture:'https://static.bershka.net/4/photos2/2022/I/0/2/p/2766/777/800//01/2766777800_2_4_3.jpg?t=1660741431395'},
      {id:2,title:'T-Shirt 2',price:50,quantity:0,like:0,picture:'https://static.bershka.net/4/photos2/2022/I/0/2/p/2766/777/800//01/2766777800_2_4_3.jpg?t=1660741431395'},
      {id:3,title:'T-Shirt 3',price:50,quantity:0,like:0,picture:'https://static.bershka.net/4/photos2/2022/I/0/2/p/2766/777/800//01/2766777800_2_4_3.jpg?t=1660741431395'}
    ];
  }

  Buy(id:number){
    for(let i=0;i<this.productList.length;i++){
      if(this.productList[i].id == id){
        this.productList[i].quantity--;
      }
    }
  }

  
  Like(id:number){
    for(let i=0;i<this.productList.length;i++){
      if(this.productList[i].id == id){
        this.productList[i].like++;
      }
    }
  }





}
