import { Component } from '@angular/core';
import {Order, OrdersService} from '../orders.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['../parcels/parcels.component.css']
})
export class OrdersComponent {
  orders : Order[] = [];


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

  newParcel() {
    this.router.navigate(['/parcels']);
  }

  
}
