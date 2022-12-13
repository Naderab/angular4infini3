import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../core/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Output() incLike = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }

  Like() {
    this.incLike.emit(this.product)
  }

}
