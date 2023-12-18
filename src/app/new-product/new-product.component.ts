import { Component } from '@angular/core';
import {Product, ProductService} from '../product.service';
import {WareHouse, WareHouseService} from '../ware-house.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['../new-parcel/new-parcel.component.css']
})
export class NewProductComponent {

  warehouses : WareHouse[] = []
  product: Product = {name: '', quantity: 0 , price: '', description: '', picture: '', wareHouse: ''}

  constructor(
    private router:Router,
    private productService : ProductService,
    private wareHouseService : WareHouseService,

  ){}

  ngOnInit() {
    this.wareHouseService.getWareHouse().subscribe(
      data => {
        this.warehouses = data;
        console.log(this.warehouses);
      }
    );
  }

  addProduct(): void{
    this.productService.addProduct(this.product).subscribe(() => {
      this.product = {name: '', quantity: 0 , price: '', description: '', picture: '', wareHouse: ''};
    });
  }

  getProducts() {
    this.router.navigate(['products/list'])
  }

  
}
