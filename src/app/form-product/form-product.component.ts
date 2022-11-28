import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../core/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  product:Product=new Product();
  email:string=''
  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
  }
  
  ajouter(){
    this.product.like=0
    this.productService.addProduct(this.product);
    this.router.navigateByUrl('/products')
    //console.log(this.product)
  }

}
