import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


export class Worker {
  'name': string;
  'password': string;
}

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  baseUrl: string = 'http://localhost:30003/api/';

  constructor(private http: HttpClient) {}

  login(worker : Worker) : Observable <any> {
    return this.http.post(this.baseUrl + 'login', worker)
  }

  check(worker : Worker) : Observable <any> {
    console.log(worker)
    return this.http.post(this.baseUrl + 'check/', worker)
  }


  
}
