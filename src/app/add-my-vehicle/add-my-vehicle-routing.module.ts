import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMyVehiclePage } from './add-my-vehicle.page';

const routes: Routes = [
  {
    path: '',
    component: AddMyVehiclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMyVehiclePageRoutingModule {}
