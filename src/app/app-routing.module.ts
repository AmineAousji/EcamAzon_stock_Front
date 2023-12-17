import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkersComponent } from './workers/workers.component';
import { ParcelsComponent } from './parcels/parcels.component';
import { OrdersComponent } from './orders/orders.component';
import { NewParcelComponent } from './new-parcel/new-parcel.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: WorkersComponent },
  { path: 'parcels/list', component: ParcelsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'parcels', component: NewParcelComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
