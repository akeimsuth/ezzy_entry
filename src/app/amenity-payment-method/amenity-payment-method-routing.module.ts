import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmenityPaymentMethodPage } from './amenity-payment-method.page';

const routes: Routes = [
  {
    path: '',
    component: AmenityPaymentMethodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmenityPaymentMethodPageRoutingModule {}
