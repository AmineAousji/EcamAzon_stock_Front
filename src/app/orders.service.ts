import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



export class Order {
  "order_id": string;
  "articles": string;
  "amount": string;
  "client_name": string;
}

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  baseUrl: string = 'http://localhost:5000/api/orders/';


  constructor(private http: HttpClient) {}

  getOrders(): Observable <any>{
    return this.http.get(this.baseUrl + 'orders');
  }
}
