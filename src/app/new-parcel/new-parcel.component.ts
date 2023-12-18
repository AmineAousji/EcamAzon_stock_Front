import { Component } from '@angular/core';
import {Parcel, ParcelService} from '../parcel.service';
import {Order, OrdersService} from '../orders.service';
import {ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-new-parcel',
  templateUrl: './new-parcel.component.html',
  styleUrls: ['./new-parcel.component.css']
})
export class NewParcelComponent {
  

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private parcelService : ParcelService,
    private orderService : OrdersService
  ){}

  ngOnInit(): void {
    const workerName = localStorage.getItem('name');
    console.log('Worker Name:', workerName);
    this.parcel.worker = workerName!;
    this.route.queryParams.subscribe(params => {
      const orderString = params['order'];
      
      if (orderString) {
        const selectedOrder: Order = JSON.parse(orderString);
        console.log('Selected Order:', selectedOrder);

        this.parcel.id_order = selectedOrder.order_id;
        this.parcel.id_user = selectedOrder.client_name;
        this.parcel.contents = selectedOrder.articles;
      } else {
        console.error('Order information not found in query parameters.');
      }
    });
  }

  parcel: Parcel={worker:'', contents:'', status:'', id_user:'', id_order:''}

  addParcel(): void{
    this.parcelService.addParcel(this.parcel).subscribe(() => {
      this.parcel = {worker:'', contents:'', status:'', id_user:'', id_order:''};
      this.router.navigate(['parcels/list']);
    });
  }


}
