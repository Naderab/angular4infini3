import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../core/product';
import { ProductService } from '../services/product.service';
import { ConsumerProductService } from '../services/consumer-product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  product:Product=new Product();
  email:string=''
  id!:number
  constructor(private productService:ProductService,private router:Router, private consumer:ConsumerProductService,private activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activated.snapshot.params['id']
    this.consumer.getProduct(this.id).subscribe((data)=>this.product=data)
  }
  
  ajouter(){
    this.product.like=0
    //this.productService.addProduct(this.product);
    //this.router.navigateByUrl('/products')
    //console.log(this.product)
    this.id != null 
    ? 
    this.consumer.updateProduct(this.id,this.product).subscribe(()=>this.router.navigateByUrl('/products')) 
    :
    this.consumer.addProduct(this.product).subscribe(()=>this.router.navigateByUrl('/products'))
  }

}
