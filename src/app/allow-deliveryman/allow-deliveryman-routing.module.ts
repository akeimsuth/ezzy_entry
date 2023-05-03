import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllowDeliverymanPage } from './allow-deliveryman.page';

const routes: Routes = [
  {
    path: '',
    component: AllowDeliverymanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllowDeliverymanPageRoutingModule {}
