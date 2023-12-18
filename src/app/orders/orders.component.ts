import { Component } from '@angular/core';
import {Order, OrdersService} from '../orders.service';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';



@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['../parcels/parcels.component.css']
})
export class OrdersComponent {
  orders : Order[] = [];
  selectedOrder: any = {};


  constructor(
    private ordersService : OrdersService,
    private router:Router
  ){}

  ngOnInit() {
    this.ordersService.getOrders().subscribe(
      data => {
        this.orders = data;
        console.log(this.orders);
      }
    );
  }

  newParcel(order:any) {
    this.selectedOrder = order;
    console.log('Selected Order:', this.selectedOrder);

    const navigationExtras: NavigationExtras = {
      queryParams: { order: JSON.stringify(this.selectedOrder) }
    };

    this.router.navigate(['/parcels'], { queryParams: { order: JSON.stringify(this.selectedOrder) } });
  }

  
}
