import { Product } from './../model/Product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  product: Product

  constructor() {
    this.product = new Product()
  }

  productFormSubmit(productForm) {
    console.log(this.product)
  }

}