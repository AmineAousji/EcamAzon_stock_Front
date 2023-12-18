import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



export class Parcel {
  "worker": string;
  "contents": string;
  "status": string;
  "id_user": string;
  "id_order": string;
}

@Injectable({
  providedIn: 'root'
})
export class ParcelService {
  baseUrl: string = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) {}

  getParcels(): Observable <any>{
    return this.http.get(this.baseUrl + 'parcels/list');
  }

  addParcel(parcel: any): Observable <any>{

    return this.http.post(this.baseUrl + 'parcels/', parcel);
  }
}
