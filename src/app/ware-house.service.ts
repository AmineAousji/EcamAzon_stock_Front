import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class WareHouse {
  "wareHouse_name": string;
  "wareHouse_adress": string;
}

@Injectable({
  providedIn: 'root'
})
export class WareHouseService {

  baseUrl: string = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) {}

  getWareHouse(): Observable <any>{
    return this.http.get(this.baseUrl + 'warehouses/list');
  }

  addWareHouse(warehouse: any):Observable <any>{
    return this.http.post(this.baseUrl + 'warehouses/', warehouse);
  }
}
