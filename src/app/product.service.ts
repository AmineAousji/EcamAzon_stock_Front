import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



export class Product {
  "name": string;
  "quantity": Number;
  "price": String;
  "description": string;
  "picture": string;
  "wareHouse": string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = 'http://localhost:30003/api/';

  constructor(private http: HttpClient) {}

  addProduct(product: any): Observable <any>{

    return this.http.post(this.baseUrl + 'products/', product);
  }

  getProducts(): Observable <any>{
    return this.http.get(this.baseUrl + 'products/list');
  }

}
