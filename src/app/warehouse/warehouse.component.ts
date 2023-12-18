import { Component } from '@angular/core';
import { WareHouseService, WareHouse} from '../ware-house.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['../new-parcel/new-parcel.component.css']
})
export class WarehouseComponent {

  warehouse: WareHouse = {wareHouse_name: '', wareHouse_adress: ''};

  constructor(
    private routers:Router,
    private wareHouseService : WareHouseService,
  ){}

  addWarehouse(): void{
    this.wareHouseService.addWareHouse(this.warehouse).subscribe(() => {
      this.warehouse = {wareHouse_name: '', wareHouse_adress: '' };
      this.routers.navigate(['parcels/list'])
    });
  }

}
