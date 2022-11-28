import { Component, OnInit } from '@angular/core';
import { Product } from '../core/product';
import { ProductService } from '../services/product.service';
import { CalculserviceService } from '../services/calculservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  title:string = 'Welcome to products page !'
  productList!: Product[];
  constructor(private productService:ProductService , private calculservice:CalculserviceService) { }

  ngOnInit(): void {
    this.productList = this.productService.productListService;
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
  sinda !:number;
  verif()
  {
    this.sinda=this.calculservice.getNumberOf(this.productList,"quantity",0);
  }





}
