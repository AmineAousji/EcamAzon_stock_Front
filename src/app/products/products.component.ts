import { Component } from '@angular/core';
import {Product, ProductService} from '../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['../parcels/parcels.component.css']
})
export class ProductsComponent {

  products: Product[] = []

  constructor(
    private router:Router,
    private productService : ProductService,
  ){}

  ngOnInit() {
    this.productService.getProducts().subscribe(
      data => {
        this.products = data;
      }
    );
  }
}
