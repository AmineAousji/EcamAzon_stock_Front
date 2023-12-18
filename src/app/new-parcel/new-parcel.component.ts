import { Component } from '@angular/core';
import {Parcel, ParcelService} from '../parcel.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-new-parcel',
  templateUrl: './new-parcel.component.html',
  styleUrls: ['./new-parcel.component.css']
})
export class NewParcelComponent {


  constructor(
    private router:Router,
    private parcelService : ParcelService,
  ){}

  ngOnInit(): void {
    const workerName = localStorage.getItem('name');
    console.log('Worker Name:', workerName);
    this.parcel.worker = workerName!;
  }

  parcel: Parcel={worker:'', destination:'', contents:'', status:'', id_user:'', id_order:''}

  addParcel(): void{
    this.parcelService.addParcel(this.parcel).subscribe(() => {
      this.parcel = {worker:'', destination:'', contents:'', status:'', id_user:'', id_order:''};

      this.router.navigate(['parcels/list'])
    });
  }



}
