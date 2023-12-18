import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkersComponent } from './workers/workers.component';
import { ParcelsComponent } from './parcels/parcels.component';
import { OrdersComponent } from './orders/orders.component';
import { NewParcelComponent } from './new-parcel/new-parcel.component';
import { NewProductComponent } from './new-product/new-product.component';
import {ProductsComponent} from './products/products.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: WorkersComponent },
  { path: 'parcels/list', component: ParcelsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'parcels', component: NewParcelComponent },
  { path: 'products', component: NewProductComponent },
  { path: 'products/list', component: ProductsComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
