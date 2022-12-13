import {Component, OnInit} from '@angular/core';
import {Product} from '../core/product';
import {ProductService} from '../services/product.service';
import {CalculserviceService} from '../services/calculservice.service';
import {ConsumerProductService} from '../services/consumer-product.service';

@Component({selector: 'app-products', templateUrl: './products.component.html', styleUrls: ['./products.component.css']})
export class ProductsComponent implements OnInit {
    title : string = 'Welcome to products page !' 
    productList !: Product[];
    constructor(private productService : ProductService, private calculservice : CalculserviceService, private consumer : ConsumerProductService) {}

    ngOnInit(): void { 
        this.consumer.getProducts().subscribe({
            next: (data) => this.productList = data,
            error: (error) => console.log(error)
        });
    }

    Buy(id : number) {
        for (let i = 0; i < this.productList.length; i++) {
            if (this.productList[i].id == id) {
                this.productList[i].quantity --;
            }
        }
    }


    Like(product:Product) {
        for (let i = 0; i < this.productList.length; i++) {
            if (this.productList[i].id == product.id) {
                this.productList[i].like ++;
            }
        }
    }
    sinda !: number;
    verif() {
        this.sinda = this.calculservice.getNumberOf(this.productList, "quantity", 0);
    }

    delete(id : number) {
      this.consumer.deleteProduct(id).subscribe(()=>this.productList=this.productList.filter((p)=>p.id != id))
    }


}
