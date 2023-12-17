import { Component } from '@angular/core';
import {Worker, WorkerService} from '../worker.service';
import {Parcel, ParcelService} from '../parcel.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-parcels',
  templateUrl: './parcels.component.html',
  styleUrls: ['./parcels.component.css']
})
export class ParcelsComponent {

  workers : Worker[] = []
  parcels: Parcel[] = []

  parcel: Parcel={worker:'', destination:'', contents:'', status:'', id_user:'', id_order:''}

  constructor(
    private parcelService : ParcelService,
    private workerService : WorkerService,
    private routers:Router
  ){}

  ngOnInit() {
    this.parcelService.getParcels().subscribe(
      data => {
        this.parcels = data;
        console.log(this.parcels);
      }
    );
  }

  addParcel(): void{
    this.parcelService.addParcel(this.parcel).subscribe(() => {
      this.parcel = {worker:'', destination:'', contents:'', status:'', id_user:'', id_order:''};

      this.routers.navigate(['parcels/list'])
    });
  }


}
