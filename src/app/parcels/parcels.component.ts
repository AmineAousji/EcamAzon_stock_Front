import { Component } from '@angular/core';
import {WareHouse, WareHouseService} from '../ware-house.service';
import {Product, ProductService} from '../product.service';
import {Parcel, ParcelService} from '../parcel.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-parcels',
  templateUrl: './parcels.component.html',
  styleUrls: ['./parcels.component.css']
})
export class ParcelsComponent {

  warehouses : WareHouse[] = [];
  parcels: Parcel[] = [];
  products: Product[] = [];

  parcel: Parcel={worker:'', contents:'', status:'', id_user:'', id_order:''}

  constructor(
    private parcelService : ParcelService,
    private warehouseService : WareHouseService,
    private productService : ProductService,
    private routers:Router
  ){}

  ngOnInit() {
    this.parcelService.getParcels().subscribe(
      data => {
        this.parcels = data;
        console.log(this.parcels);
      }
    );
    this.warehouseService.getWareHouse().subscribe(
      data => {
        this.warehouses = data;
      }
    );
    this.productService.getProducts().subscribe(
      data => {
        this.products = data;
      }
    );

  }

  addParcel(): void{
    this.parcelService.addParcel(this.parcel).subscribe(() => {
      this.parcel = {worker:'', contents:'', status:'', id_user:'', id_order:''};
      this.routers.navigate(['parcels/list'])
    });
  }


}
