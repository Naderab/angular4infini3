import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../core/product';

@Injectable({
  providedIn: 'root'
})
export class ConsumerProductService {
  productUrl:string = environment.apiUrl+"products";
  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>(this.productUrl);
  }
  getProduct(id:number){
    return this.http.get<Product>(this.productUrl+"/"+id)
  }
  addProduct(product:Product){
    return this.http.post(this.productUrl,product)
  }
  updateProduct(id:number, product:Product){
    return this.http.put(this.productUrl+"/"+id,product)
  }
  deleteProduct(id:number){
    return this.http.delete(this.productUrl+"/"+id)
  }
}
